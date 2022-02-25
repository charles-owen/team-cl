<?php
/**
 * @file
 * API Resource for /api/team
 */
namespace CL\Team;

use CL\Site\Site;
use CL\Site\System\Server;
use CL\Site\Api\JsonAPI;
use CL\Site\Api\APIException;
use CL\Users\User;
use CL\Course\Members;
use CL\Course\Member;
use CL\Team\Submission\TeamSubmissionApi;

/**
 * API Resource for /api/team
 */
class TeamApi extends \CL\Course\Api\Resource {

	/**
	 * QuizApi constructor.
	 */
	public function __construct() {
		parent::__construct();
	}

	/**
	 * Dispatch API calls.
	 * @param Site $site Site object
	 * @param Server $server Server object
	 * @param array $params Parameters passed by the router (after /api/quiz)
	 * @param array $properties Properties passed by the router (:id values)
	 * @param int $time Current time
	 * @return JsonAPI with response filled in
	 * @throws APIException
	 */
	public function dispatch(Site $site, Server $server, array $params, array $properties, $time) {
		$user = $this->isUser($site, User::USER);

		switch($params[0]) {
			case 'submission':
				$api = new TeamSubmissionApi();
				$params2 = $params;
				array_shift($params2);
				return $api->dispatch($site, $server, $params2, $properties, $time);

			// /api/team/teamings
			// /api/team/teamings/new
			// /api/team/teamings/update
			// /api/team/teamings/delete
			case 'teamings':
				return $this->teamings($site, $server, $params, $time);

			// /api/team/teams/:teamingid
			case 'teams':
				return $this->teams($site, $server, $params, $time);

			case 'tables':
				return $this->tables($site, $server, new TeamTables($site->db));

			// /api/team/distribute/:assigntag/:memberid
            case 'distribute':
                return $this->gradeDistribute($site, $server, $params, $time);

            // /api/team/rate/:assigntag/:teaming
            case 'rate':
                return $this->rate($site, $server, $params, $time);

            // /api/team/:teamid
            default:
                return $this->team($site, $server, $params, $time);
		}

		// throw new APIException("Invalid API Path", APIException::INVALID_API_PATH);
	}

    /**
     * /api/team/rate/:assigntag/:teaming
     * Create ratings by a team member.
     *
     * @param Site $site
     * @param Server $server
     * @param $params
     * @param $time
     * @return JsonAPI
     * @throws APIException
     */
    private function rate(Site $site, Server $server, $params, $time) {
        if(count($params) < 3) {
            throw new APIException("Invalid API Path", APIException::INVALID_API_PATH);
        }

        $post = $server->post;
        $this->ensure($post, ['ratings']);

        // Must be a student in the course
        $user = $this->isUser($site, Member::STUDENT);

        //
        // Get the assignment and ensure it is open. We can only
        // rate when the assignment is open.
        $assignTag = $params[1];

        $assignment = $this->getAssignment($site, $user, $assignTag);
        if(!$user->atLeast(User::STAFF) && !$assignment->is_open($user, $time)) {
            throw new APIException("Assignment is not open rating");
        }

        //
        // Get the team. We can only rate for a team we are a member
        // of and can only rate members of our team.
        //
        $teamId = +$params[2];

        //
        // Get the team
        //
        $teamsTable = new Teams($site->db);
        $teamMembers = new TeamMembers($site->db);

        //
        // Get the teams
        //
        $team = $teamsTable->get($teamId);
        if($team === null) {
            throw new APIException("Team does not exist", APIException::GENERAL_ERROR);
        }

        //
        // Get the members of this team
        //
        $teamMembers->getTeamMembers($team);
        if($team->getMember($user->member->id) === null) {
            throw new APIException("Not a member of this team", APIException::GENERAL_ERROR);
        }

        $teamRatings = new TeamRatings($site->db);

        $ratings = $post['ratings'];
        foreach($ratings as $memberId => $rating) {
            // Is this member in the team?
            $ratee = $team->getMember(+$memberId);
            if($ratee !== null) {
                $teamRatings->add($teamId, $user->member->id, $ratee->member->id, $rating);
            }
        }

        $json = new JsonAPI();
        return $json;
    }

    // /api/team/:teamid
    private function team(Site $site, Server $server, array $params, $time) {
        $teamId = +$params[0];

        //
        // Get the team
        //
        $teamsTable = new Teams($site->db);
        $teamMembers = new TeamMembers($site->db);

        //
        // Get the teams
        //
        $team = $teamsTable->get($teamId);
        if($team === null) {
            throw new APIException("Team does not exist", APIException::GENERAL_ERROR);
        }

        //
        // Get the members
        //
        $teamMembers->getTeamMembers($team);

        //
        // Convert to data and send to the client
        $json = new JsonAPI();
        $json->addData('team', $teamId, $team->data());
        return $json;
    }

    /**
     * /api/team/distribute/:assigntag/:memberid
     * Distribute a grade item among team members.
     *
     * This is only available if the grades component is installed.
     *
     * @param Site $site
     * @param Server $server
     * @param $params
     * @param $time
     * @return JsonAPI
     * @throws APIException
     */
	private function gradeDistribute(Site $site, Server $server, $params, $time) {
        if(count($params) < 3) {
            throw new APIException("Invalid API Path", APIException::INVALID_API_PATH);
        }

        $user = $this->isUser($site, Member::GRADER);
        $post = $server->post;

        $this->ensure($post, ['teaming']);
        $this->ensure($post, ['gradeTag']);

        // Gather all data
        $assignTag = $params[1];
        $memberId = +$params[2];
        $teamingTag = strip_tags($post['teaming']);
        $gradeTag = strip_tags($post['gradeTag']);

        // Get the distribution source member
        $members = new Members($site->db);
        $sourceMember = $members->getAsUser($memberId);
        if($sourceMember === null) {
            throw new APIException("Member does not exist");
        }

        // Find the teaming
        $teamings = new Teamings($site->db);
        $team = $teamings->getTeamByMember($sourceMember, $teamingTag, true);
        if($team === null) {
            throw new APIException("Team does not exist");
        }

        // Get the grade
        $grades = new \CL\Grades\Grades($site->db);
        $grade = $grades->get($sourceMember, $assignTag, $gradeTag);
        $sourceMetadata = $grade->metaData;

        foreach($team->members as $otherMember) {
            if($otherMember->member->id === $sourceMember->member->id) {
                continue;
            }

            // Get the other member's grade
            $memberGrade = $grades->get($otherMember, $assignTag, $gradeTag);

            // Get the history Metadata for the member
            $history = $memberGrade->metaData->get('public', \CL\Grades\Grade::HISTORY, []);


            // Copy over the Metadata from the source grade,
            // then restore the grade history
            $memberGrade->meta->copyFrom($sourceMetadata);
            $memberGrade->metaData->set('public', \CL\Grades\Grade::HISTORY, $history);

            $memberGrade->set($user, $grade->points, $grade->comment, $time, true);
            $grades->post($otherMember, $memberGrade);

            $history = $memberGrade->metaData->get('public', \CL\Grades\Grade::HISTORY, []);
        }

        $json = new JsonAPI();
        return $json;
    }

	private function teams(Site $site, Server $server, array $params, $time) {
		if(count($params) < 2) {
			throw new APIException("Invalid API Path", APIException::INVALID_API_PATH);
		}

		$teamingId = +$params[1];

		//
		// Get the teaming
		//
		$teamings = new Teamings($site->db);
		$teaming = $teamings->getById($teamingId);
		if($teaming === null) {
			throw new APIException("Teaming does not exist");
		}

		$teamsTable = new Teams($site->db);
		$teamMembers = new TeamMembers($site->db);

		if($server->requestMethod === 'POST' && count($params) > 1) {
			$user = $this->isUser($site, Member::TA);
			$post = $server->post;

			switch($params[2]) {
				case 'new':
					$this->ensure($post, ['name']);
					$teamsTable->add($teaming->id, strip_tags($post['name']));
					break;

				case 'update':
					$this->ensure($post, ['id', 'name']);
					$teamId = +$post['id'];
					$teamName = strip_tags($post['name']);

					$teamsTable->update($teamId, $teamName);
					break;

				case 'delete':
					$this->ensure($post, ['id']);
					$teamsTable->delete(+$post['id']);
					$teamMembers->delete(+$post['id']);
					break;

				case 'move':
					$this->ensure($post, ['member', 'team']);
					$teamsTable->move($teaming->id, $post['member'], $post['team']);
					break;

				case 'distribute':
					$this->ensure($post, ['size']);
					$this->distribute($site, $teaming, +$post['size']);
					break;

				case 'names':
					$this->ensure($post, ['names']);
					$this->names($site, $teaming, $post['names']);
					break;

				default:
					throw new APIException("Invalid API Usage", APIException::INVALID_API_USAGE);
			}

		}


		//
		// Get the teams
		//
		$teams = $teamsTable->getTeams($teamingId);

		// Add unaffiliated team
		$teams[0] = new Team(['id'=>0, 'name'=>null, 'teamingid'=>0]);

		//
		// Get the members
		//
		$members = $teamMembers->getMembers($teaming);

		//
		// Add them to teams
		//
		foreach($members as $teamId => $teamMembers) {
			foreach($teamMembers as $member) {
				if(isset($teams[$teamId])) {
					$teams[$teamId]->addMember($member);
				} else {
					// This is a delete team
					$teams[0]->addMember($member);
				}
			}
		}

		//
		// Convert to data to send to the client
		$allData = [];
		foreach($teams as $team) {
			$allData[] = $team->data();
		}

		$json = new JsonAPI();
		$json->addData('teams', $teamingId, $allData);
		return $json;
	}

	/**
	 * Rename teams with supplied names.
	 * @param Site $site
	 * @param Teaming $teaming
	 * @param array $names
	 */
	private function names(Site $site, Teaming $teaming, array $names) {
		//
		// Get the teams
		//
		$teamsTable = new Teams($site->db);
		$teams = $teamsTable->getTeams($teaming->id);

		$ndx = 0;
		foreach($teams as $team) {
			if($ndx >= count($names)) {
				break;
			}

			$name = strip_tags($names[$ndx]);
			$teamsTable->update($team->id, $name);

			$ndx++;
		}
	}

	private function distribute(Site $site, Teaming $teaming, $size) {
		//
		// Get the teams
		//
		$teamsTable = new Teams($site->db);
		$teams = $teamsTable->getTeams($teaming->id);

		//
		// Get the team members
		//
		$teamMembers = new TeamMembers($site->db);
		$members = $teamMembers->getMembers($teaming);

		//
		// Find the unaffiliated
		//
		$unaffiliated = [];
		foreach($members as $teamId => $list) {
			if(!isset($teams[$teamId])) {
				$unaffiliated = array_merge($unaffiliated, $list);
			}
		}

		if(count($unaffiliated) === 0) {
			return;     // If there are no unaffiliated
		}

		shuffle($unaffiliated);

		$teamNum = 0;
		for($i=0;  $i<count($unaffiliated);  $i+=$size) {
			// Create a new team
			while(true) {
				$teamNum++;
				$found = false;
				foreach($teams as $team) {
					if($team->name === 'Team ' . $teamNum) {
						$found = true;
						break;
					}
				}

				if(!$found) {
					break;
				}
			}

			$team = $teamsTable->add($teaming->id, 'Team ' . $teamNum);
			for($j=0; $j<$size && ($i+$j) < count($unaffiliated);  $j++) {
				$user = $unaffiliated[$i+$j];
				$teamsTable->move($teaming->id, $user->member->id, $team->id);
			}

		}

	}

	/**
	 * Management of the teamings
	 *
	 * // /api/team/teamings
	 * // /api/team/teamings/new
	 * // /api/team/teamings/update
	 * // /api/team/teamings/delete
	 * @param Site $site
	 * @param Server $server
	 * @param array $params
	 * @param $time
	 * @return JsonAPI
	 * @throws APIException
	 */
	private function teamings(Site $site, Server $server, array $params, $time) {
		$user = $this->isUser($site, Member::STAFF);
		$teamings = new Teamings($site->db);

		if($server->requestMethod === 'POST' && count($params) > 1) {
			$user = $this->isUser($site, Member::TA);

			switch($params[1]) {
				case 'new':
					$teaming = new Teaming();
					$post = $server->post;
					$this->ensure($post, ['tag', 'name', 'public']);
					$teaming->tag = strip_tags($post['tag']);
					$teaming->name = strip_tags($post['name']);
					$teaming->public = $post['public'] === true;
					$teaming->semester = $user->member->semester;
					$teaming->sectionId = $user->member->sectionId;

					$teamings->add($teaming);
					break;

				case 'copy':
					$teaming = new Teaming();
					$post = $server->post;
					$this->ensure($post, ['orig', 'tag', 'name', 'public']);
					$teaming->tag = strip_tags($post['tag']);
					$teaming->name = strip_tags($post['name']);
					$teaming->public = $post['public'] === true;
					$teaming->semester = $user->member->semester;
					$teaming->sectionId = $user->member->sectionId;

					$teamings->duplicate($post['orig'], $teaming);
					break;

				case 'update':
					$teaming = new Teaming();
					$post = $server->post;
					$this->ensure($post, ['id', 'tag', 'name', 'public']);
					$teaming->id = +$post['id'];
					$teaming->tag = strip_tags($post['tag']);
					$teaming->name = strip_tags($post['name']);
					$teaming->public = $post['public'] === true;
					$teaming->semester = $user->member->semester;
					$teaming->sectionId = $user->member->sectionId;

					$teamings->update($teaming);
					break;

				case 'delete':
					$post = $server->post;
					$this->ensure($post, ['id']);
					$teamings->delete(+$post['id']);
					break;
			}

		}

		$all = $teamings->getBySection($user->member->semester, $user->member->sectionId);
		$data = [];
		foreach($all as $teaming) {
			$data[] = $teaming->data();
		}

		$json = new JsonAPI();
		$json->addData('teamings', 0, $data);
		return $json;
	}
}