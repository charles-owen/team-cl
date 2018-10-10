<?php
/** @file
 * ViewAux class for a team member for all teams.
 */

namespace CL\Team;

use CL\Site\Site;
use CL\Site\View;

/**
 * ViewAux class for a team member or all teams.
 * 
 * Views where a member needs to know what teams they are in or 
 * who the team members are. Also used to display all teams on management pages.
 */
class TeamMemberView extends \CL\Site\ViewAux {
	/** Constructor
	 * @param Site $site The Site object
	 * @param string $teamingTag Optional teaming tag
	 */
	public function __construct(Site $site, $teamingTag=null) {
		$this->site = $site;
		$this->user = $site->users->user;
		$this->teamingTag = $teamingTag;
	}

	/**
	 * Property get magic method
	 *
	 * <b>Properties</b>
	 * Property | Type | Description
	 * -------- | ---- | -----------
	 *
	 * @param string $property Property name
	 * @return mixed
	 */
	public function __get($property) {
		switch($property) {
			case 'teaming':
				return $this->teamingTag;
				break;

			case 'team':
				return $this->get_team();

			default:
				return parent::__get($property);
		}
	}

	/**
	 * Called when this auxiliary view is installed in a view
	 * @param View $view View we are installing into
	 */
	protected function install(View $view) {
		parent::install($view);
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
		$teamings = new Teamings($this->site->db);
		if($this->teamingTag !== null) {
			$team = $teamings->getTeamByMember($this->view->user, $this->teamingTag, true);
			if($team !== null) {
				return [$team];
			}

			return [];
		}

		return [];

//		$section = $this->view->section;
//
//		$where = ['userid' => $this->user->member->id];
//
//		if($this->teamingTag !== null) {
//			$where['tag'] = $this->teamingTag;
//		}
//
//		if($public !== null) {
//			$where['public'] = $public ? 1 : 0;
//		}
//
//		$teams = $teamings->get_teams($where, 'teamingname, teamname');
//		return $teams;
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
	 * @returns string HTML for the teams information block
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
	 * Present all teams for team administration purposes.
	 * @return string
	 */
	public function present_all_teams($link) {
		$this->fetchAll();

		$html = '';
		foreach($this->teams as $team) {
			$html .= $this->present_team($team, false, $link);
		}

		return $html;
	}



	private function fetchAll() {
		if($this->teaming !== null) {
			// Already fetched...
			return;
		}

		$member = $this->user->member;

		//
		// Get the teaming
		//
		$teamings = new Teamings($this->site->db);
		$teaming = $teamings->getByTag($member->semester, $member->sectionId, $this->teamingTag);
		if($teaming === null) {
			return '<p class="shoutout">Teaming ' . $this->teamingTag . ' does not exist</p>';
		}

		$this->teaming = $teaming;

		$teamingId = $teaming->id;

		$teamsTable = new Teams($this->site->db);
		$teamMembers = new TeamMembers($this->site->db);

		//
		// Get the teams
		//
		$teams = $teamsTable->getTeams($teamingId);
		$this->teams = $teams;

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
				}
			}
		}

		$this->teamsInOrder = [];
		foreach($this->teams as $team) {
			$this->teamsInOrder[] = $team;
		}
	}

	/**
	 * Get a team by ID.
	 * @param $teamId Team ID
	 * @return Team object
	 * or null if team does not exist
	 */
	public function get_team_by_id($teamId) {
		$index = $this->teamIndex($teamId);
		if($index < 0) {
			return null;
		}

		return $this->teamsInOrder[$index];
	}


	public function get_prev_by_id($teamId) {
		$index = $this->teamIndex($teamId);
		if($index < 1) {
			return null;
		}

		return $this->teamsInOrder[$index-1];
	}

	public function get_next_by_id($teamId) {
		$index = $this->teamIndex($teamId);
		if($index < 0 || $index >= count($this->teamsInOrder) - 1) {
			return null;
		}

		return $this->teamsInOrder[$index+1];
	}

	/**
	 * Get the index for a team in the array of teams.
	 * @param $teamId
	 * @return int
	 */
	private function teamIndex($teamId) {
		$this->fetchAll();

		for($i=0; $i<count($this->teamsInOrder); $i++) {
			if($this->teamsInOrder[$i]->id === +$teamId) {
				return $i;
			}
		}

		return -1;
	}






//	public function present_team_by_id($teamId) {
//		$teams = new Teams($this->course);
//		$teamName = $teams->get_by_id($teamId);
//
//		return $this->present_team($teamName);
//	}

	/**
	 * Present a single team, given the team structure
	 * @param Team $team Team object to present
	 * @return string HTML
	 */
	public function present_team(Team $team, $emailNotice = true, $link=null) {
		$teamings = new Teamings($this->site->db);
		$teaming = $teamings->getById($team->teamingId);

		$teamingname = $teaming->name;
		$teamingTag = $teaming->tag;
		$teamname = $team->name;
		$teamId = $team->id;

		$email = $team->email_link($this->site);

		$html = <<<HTML
	<div class="left">	
HTML;

		if($link !== null) {
			$html .= <<<HTML
<h4 class="center"><a href="$link?teaming=$teamingTag&team=$teamId">$teamingname Team: $teamname</a></h4>
HTML;
		} else {
			$html .= <<<HTML
<h4 class="center">$teamingname Team: $teamname</h4>
HTML;
		}

		if($emailNotice) {
			$html .= <<<HTML
<p class="rightbox secondb">The email links are mailto: links for the team members or the entire team.</p>
HTML;
		}

		$html .= <<<HTML
<table class="small wide">
<tr><th>Name</th><th>User ID</th><th>$email</th></tr>
HTML;

		foreach($team->members as $member) {
			$name = $member->displayName;
			$userid = $member->userId;
			$email = $member->email;
			$subject = rawurlencode($this->site->siteName . ' Team ' . $teamname);
			$html .= <<<HTML
<tr><td>$name</td><td>$userid</td>
<td><a href="mailto:$email&subject=$subject" title="Email Team Member">$email</a></td></tr>
HTML;
		}

		$html .= "</table></div>";
		return $html;
	}

	private $site;
	private $user;
	private $teamingTag;

	private $teaming = null;
	private $teams = [];
	private $teamsInOrder = [];
}