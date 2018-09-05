<?php
/** @file
 * @brief Class that manages the distribution of unassigned members to teams.
 */

namespace Team;

/** @brief Manages the distribution of unassigned members to teams. 
 *
 * Used by the team management page */
class TeamDistributer {
	/** @brief Constructor
	 * $param $course The Course variable */
	public function __construct(\Course $course) {
		$this->course = $course;
	}
	
	/**
	 * Distribute the unassigned students in a section to
	 * teams of size $size.
	 * @param $teamingid The teaming we create the teams in
	 * @param $size Size of a team 
	 */
	public function distribute_unassigned($teamingid, $size) {
		/*
		 * Get the teaming information so we can get the section
		 */
		$teamings = new Teamings($this->course);
		$teaming = $teamings->get_by_id($teamingid);
		if($teaming === null) {
			return;
		}
		
		$section = $this->course->get_section($teaming['semester'], $teaming['section']);
		
		/*
		 * Get all the users ID values and shuffle them
		 */
		$users = new \Users($this->course);
		$allusers = array();
		foreach($users->get_users($section) as $user) {
            if($user->get_role() != \User::STUDENT) {
                continue;
            }

			$allusers[] = $user;
		}
		
		shuffle($allusers);
		
		/*
		 * Iterate over the users and collect them into teams
		 */
		$teams = new Teams($this->course);
		$teammembers = new TeamMembers($this->course);
		
		$cnt = 0;
		$currentteamid = 0;
		$currentteamsize = $size;	// Ensure we start a new team
		foreach($allusers as $user) {
			/*
			 * Is this user already in a team?
			 */	
			$in = $teammembers->get_teams_in_teaming($user, $teamingid);
			if(count($in) > 0) {
				continue;
			}
			
			/*
			 * Add user to a team
			 */
			if($currentteamsize >= $size) {
				// Current team is full. 
				// Create a new one
				$cnt++;
				$currentteamid = $teams->add($teamingid, "Team $cnt");
				$currentteamsize = 0;
			}
			
			$teammembers->add($currentteamid, $user);
			$currentteamsize++;
		}
	}

	/**
	 * Distribute the unassigned students equally to all existing teams
	 * @param $teamingid The teaming we create the teams in
	 */
	public function distribute_existing($teamingid) {
		/*
		 * Get the teaming information so we can get the section
		 */
		$teamings = new Teamings($this->course);
		$teaming = $teamings->get_by_id($teamingid);
		if($teaming === null) {
			return;
		}

		$teammembers = new TeamMembers($this->course);

		$section = $this->course->get_section($teaming['semester'], $teaming['section']);

		/*
		 * Get all the users ID values and shuffle them
		 */
		$users = new \Users($this->course);
		$allusers = array();
		foreach($users->get_users($section) as $user) {
			if($user->get_role() != \User::STUDENT) {
				continue;
			}

			/*
			 * Is this user already in a team?
			 */
			$in = $teammembers->get_teams_in_teaming($user, $teamingid);
			if(count($in) > 0) {
				continue;
			}

			$allusers[] = $user;
		}

		shuffle($allusers);

		/*
		 * Determine the existing teams
		 */
		$teams = new Teams($this->course);
		$existing = $teams->get($teamingid);
		$cnt = count($existing);
		if($cnt == 0) {
			return;
		}

		// How many to add to each team
		$teamcnt = count($allusers) / $cnt;

		/*
		 * Distribute members out to these teams
		 */
		$index = 0;			// Index into the list of teams
		$teamsize = 0;		// How many added to that team?
		foreach($allusers as $user) {


			$teamid = $existing[$index]['id'];
			$teammembers->add($teamid, $user);
			$teamsize++;
			if($teamsize >= $teamcnt && $index < ($cnt - 1)) {
				$index++;
				$teamsize = 0;
			}
		}
	}

	private $course;
}

?>
