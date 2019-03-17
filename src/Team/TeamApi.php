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
class TeamApi extends \CL\Users\Api\Resource {

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
		}

		throw new APIException("Invalid API Path", APIException::INVALID_API_PATH);
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