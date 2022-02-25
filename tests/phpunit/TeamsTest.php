<?php
/** @file
 * Unit tests for the class Teamings
 * @cond 
 */
require_once __DIR__ . '/init.php';
require_once __DIR__ . '/cls/TeamDatabaseTestBase.php';

use CL\Team\Teamings;
use CL\Team\Teaming;
use CL\Users\Users;
use CL\Course\Members;
use CL\Team\Teams;
use CL\Team\TeamMembers;

class TeamsTest extends TeamDatabaseTestBase {

    protected function setUp() : void {
        $this->ensureTable(new Teamings($this->site->db));
        $this->ensureTable(new Teams($this->site->db));
        $this->ensureTable(new TeamMembers($this->site->db));
        $this->ensureTable(new Users($this->site->db));
        $this->ensureTable(new Members($this->site->db));
    }



	public function test() {
        $this->dataSets(['db/user-many.xml', 'db/member-many.xml']);

        $teamings = new Teamings($this->site->db);
        $teams = new Teams($this->site->db);


        // Create a teaming
        $teaming = $this->createTeaming('project1', 'Project 1');
        $teamingId = $teaming->id;

        // Should not be any teams in this teaming right now
        $t = $teams->getTeams($teamingId);
        $this->assertCount(0, $t);  // Just unaffiliated right now

        // Create a team
		$team1 = $teams->add($teamingId, 'Team 1');

        // Ensure it exists
		$t = $teams->getTeams($teamingId);
		$this->assertCount(1, $t);  // Just unaffiliated right now

		// We now have the teaming 'project1'
		// with one team 'Team 1' in it.

		// Add some members to the team
		$members = new Members($this->site->db);
		$user22 = $members->getAsUser(22);
		$user40 = $members->getAsUser(40);
		$user47 = $members->getAsUser(47);

		$teamMembers = new TeamMembers($this->site->db);
		$teamMembers->add($user22->member->id, $team1->id);
		$teamMembers->add($user40->member->id, $team1->id);
		$teamMembers->add($user47->member->id, $team1->id);

		$userTeam = $teamings->getTeamByMember($user22, 'project1');
		$this->assertEquals('Team 1', $userTeam->name);
		//print_r($userTeam);

	}




}

/// @endcond
