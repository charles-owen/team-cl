<?php
/** @file
 * @brief View class for a team member.
 */

namespace Team;

/** @brief View class for a team member.
 * 
 * Views where a member needs to know what teams they are in or 
 * who the team members are.
 *
 * Used by:
 *   aboutme.php
 */
class TeamMemberView {
	/** @brief Constructor
	 * @param $course The Course object
	 * @param $user The user object
	 * @param $teamingTag Optional teaming tag */
	public function __construct(\Course $course, \User $user, $teamingTag=null) {
		$this->course = $course;
		$this->user = $user;
		$this->teamingTag = $teamingTag;
	}

	/**
	 * Get the teams this user is a member of.
	 * @param null $public Optional boolean - if true display public teams only
	 * @return array of team items.
	 */
	public function get_teams($public = null) {
		/*
		 * Get the teams this user is a member of
		 */
		$section = $this->user->get_section();

		$where = array('userid' => $this->user->get_id());

		if($this->teamingTag !== null) {
			$where['tag'] = $this->teamingTag;
		}

		if($public !== null) {
			$where['public'] = $public ? 1 : 0;
		}

		$teamings = new \Team\Teamings($this->course);
		$teams = $teamings->get_teams($where, 'teamingname, teamname');
		return $teams;
	}

	public function get_team() {
		$teams = $this->get_teams();
		if(count($teams) == 0) {
			return null;
		}

		return $teams[0];
	}
	
	/**
	 * Present the teams this user is a member of
	 *
	 * Only presents public teams!
	 * $param $heading Optional heading to put on the section if any teams are found
	 * @returns HTML for the teams information block
	 */
	public function present_teams($heading='') {
		$html = $heading;
		
		/*
		 * Get the teams this user is a member of
		 */
		$teams = $this->get_teams(true);

		if(count($teams) == 0) {
			if ($this->teamingTag === null) {
				$html .= '<p class="center">You are not a member of any teams</p>';
			} else {
				$html .= '<p class="center">You are not a member of a team</p>';
			}
			return $html;
		}

		foreach($teams as $team) {
			$html .= $this->present_team($team);
		}

		return $html;
	}

	/**
	 * Get a team by ID.
	 * @param $teamId Team ID
	 * @return Array for record with the keys name, teamname, treamingid, and teamid
	 * or null if team does not exist
	 */
	public function get_team_by_id($teamId) {
		$teams = new Teams($this->course);
		return $teams->get_by_id($teamId);
	}

	public function get_next_by_id($teamId) {
		$teams = new Teams($this->course);
		return $teams->get_next_by_id($teamId);
	}

	public function get_prev_by_id($teamId) {
		$teams = new Teams($this->course);
		return $teams->get_prev_by_id($teamId);
	}

	public function present_team_by_id($teamId) {
		$teams = new Teams($this->course);
		$teamName = $teams->get_by_id($teamId);

		return $this->present_team($teamName);
	}

	/**
	 * Present a single team, given the team structure
	 * @param $team Array of team items as returned by TeamMembers::get_teams()
	 * @return string HTML
	 */
	public function present_team($team) {
		$teamingname = isset($team['teamingname']) ? $team['teamingname'] : '';
		$teamname = $team['teamname'];
		$teamid = $team['teamid'];

		$teammembers = new \Team\TeamMembers($this->course);

		$members = $teammembers->get_members($teamid);
		$email = $teammembers->email_link($teamname, $members);

		$html = "<h3 class=\"center\">$teamingname Team: $teamname</h3>";

		$html .= <<<HTML
<p class="rightbox secondb">The email links are mailto: links for the team members or the entire team.</p>
<div class="left">
<table>
<tr><th>Name</th><th>User ID</th><th>$email</th></tr>
HTML;

		foreach($members as $member) {
			$name = $member->get_displayname();
			$userid = $member->get_userid();
			$email = $member->get_email();
			$subject = rawurlencode($this->course->get_name() . ' Team ' . $teamname);
			$html .= <<<HTML
<tr><td>$name</td><td>$userid</td>
<td><a href="mailto:$email&subject=$subject" title="Email Team Member">$email</a></td></tr>
HTML;

		}

		$html .= "</table></div>";
		return $html;
	}
	
	private $course;
	private $user;
	private $teamingTag;
}
