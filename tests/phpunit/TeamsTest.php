<?php
/** @file
 * Unit tests for the class Teamings
 * @cond 
 */
require_once __DIR__ . '/init.php';
require_once __DIR__ . '/cls/TeamDatabaseTestBase.php';

use CL\Site\Test\DatabaseTestBase;
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


        // Create a teaming
		$teamings = new Teamings($this->site->db);

		$teaming1 = new Teaming();
		$teaming1->tag = 'project1';
		$teaming1->name = 'Project 1';
		$teaming1->semester = 'FS18';
		$teaming1->sectionId = '799';
		$teaming1->public = true;

		$teamingId = $teamings->add($teaming1);

		$teams = new Teams($this->site->db);
		$t = $teams->getTeams($teamingId);
		$this->assertCount(0, $t);  // Just unaffiliated right now

		$team = $teams->add($teamingId, 'Team 1');

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
		$teamMembers->add($user22->member->id, $team->id);
		$teamMembers->add($user40->member->id, $team->id);
		$teamMembers->add($user47->member->id, $team->id);

		$userTeam = $teamings->getTeamByMember($user22, 'project1');
		$this->assertEquals('Team 1', $userTeam->name);
		//print_r($userTeam);

	}



}

/// @endcond
