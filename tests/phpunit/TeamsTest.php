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

class TeamingsTest extends TeamDatabaseTestBase {
	/**
	 * @return PHPUnit_Extensions_Database_DataSet_IDataSet
	 */
	public function getDataSet() {
		return $this->dataSets(['teaming.xml', 'team.xml', 'teammember.xml', 'user-many.xml', 'member-many.xml']);
	}


	public function ensureTables() {
		$this->ensureTable(new Teamings($this->site->db));
		$this->ensureTable(new Teams($this->site->db));
		$this->ensureTable(new TeamMembers($this->site->db));
		$this->ensureTable(new Users($this->site->db));
		$this->ensureTable(new Members($this->site->db));
	}


	public function test() {
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

		$teams->addTeam($teamingId, 'Team 1');

		$t = $teams->getTeams($teamingId);
		$this->assertCount(1, $t);  // Just unaffiliated right now

	}


}

/// @endcond
