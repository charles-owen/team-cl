<?php
/** @file
 * Unit tests for the class Teamings
 * @cond 
 */
require_once __DIR__ . '/init.php';
require_once __DIR__ . '/cls/TeamDatabaseTestBase.php';

use CL\Team\Teamings;
use CL\Team\Teaming;

class TeamingsTest extends TeamDatabaseTestBase {
    protected function setUp() : void {
        $this->ensureTable(new Teamings($this->site->db));
    }


	public function test() {
		$teamings = new Teamings($this->site->db);

		$teaming1 = new Teaming();
		$teaming1->tag = 'project1';
		$teaming1->name = 'Project 1';
		$teaming1->semester = 'FS18';
		$teaming1->sectionId = '799';
		$teaming1->public = true;

		$teamings->add($teaming1);

		$get = $teamings->getBySection('FS18', '799');
		$this->assertCount(1, $get);

		$byTag = $teamings->getByTag('FS18', '799', 'project1');

		$byId = $teamings->getById($teaming1->id);

		$teaming1->tag = 'project1a';
		$teaming1->name = 'Project 1 A';
		$teamings->update($teaming1);

		$byId = $teamings->getById($teaming1->id);

		$this->assertTrue($teamings->delete($teaming1->id));

		$get = $teamings->getBySection('FS18', '799');
		$this->assertCount(0, $get);
	}



//	/**
//	 * @depends test_construct
//	 */
//	public function test_get_by_tag(\Team\Teamings $teamings) {
//		$result = $teamings->get_by_tag("001", 'testteaming');
//		$this->assertEquals(1, $result['id']);
//		$this->assertEquals('testteaming', $result['tag']);
//		$this->assertEquals('Test Teaming', $result['name']);
//		$this->assertTrue($result['public']);
//	}
//
//
//
//	/**
//	 * @depends test_construct
//	 */
//	public function test_get_by_id(\Team\Teamings $teamings) {
//		// Test normal get
//		$result = $teamings->get_by_id(1);
//		$this->assertEquals(1, $result['id']);
//		$this->assertEquals('testteaming', $result['tag']);
//		$this->assertEquals('Test Teaming', $result['name']);
//		$this->assertTrue($result['public']);
//
//		// Test when record does not exist
//		$result = $teamings->get_by_id(2);
//		$this->assertNull($result);
//	}
//
//	/**
//	 * @depends test_construct
//	 */
//	public function test_get_teams(\Team\Teamings $teamings) {
//		$teams = $teamings->get_teams(array());
//		$this->assertEquals(3, count($teams));
//	}
//
//
//	public function test_add() {
//		$teamings = new \Team\Teamings(get_course());
//
//		$id = $teamings->add("teaming2", "Teaming 2", "FS14", "001");
//		$this->assertEquals(2, $id);
//
//		// Test normal add
//		$result = $teamings->get_by_id(2);
//		$this->assertEquals(2, $result['id']);
//		$this->assertEquals('teaming2', $result['tag']);
//		$this->assertEquals('Teaming 2', $result['name']);
//		$this->assertTrue($result['public']);
//
//		$id = $teamings->add("teaming2", "Teaming 2", "FS14", "001");
//		$this->assertNull($id);
//
//		$id = $teamings->add("teaming3", "Teaming 3", "FS14", "001", false);
//		$this->assertNotNull($id);
//		$result = $teamings->get_by_id($id);
//		$this->assertEquals($id, $result['id']);
//		$this->assertEquals('teaming3', $result['tag']);
//		$this->assertEquals('Teaming 3', $result['name']);
//		$this->assertFalse($result['public']);
//	}
//
//	public function test_update() {
//		$teamings = new \Team\Teamings(get_course());
//
//		$teamings->update(1, "xxx", "YY YY YY", false);
//
//		// Test normal get
//		$result = $teamings->get_by_id(1);
//		$this->assertEquals(1, $result['id']);
//		$this->assertEquals('xxx', $result['tag']);
//		$this->assertEquals('YY YY YY', $result['name']);
//		$this->assertFalse($result['public']);
//	}
//
//	public function test_delete() {
//		$teamings = new \Team\Teamings(get_course());
//		$teamings->delete(1);
//
//		$result = $teamings->get_by_id(1);
//		$this->assertNull($result);
//
//		// Ensure the actual team was also deleted
//		$teams = new \Team\Teams(get_course());
//		$team = $teams->get(1);
//
//		$this->assertEquals(0, count($team));
//	}
//
//	public function test_duplicate() {
//		$teamings = new \Team\Teamings(get_course());
//
//		$teamings->duplicate(1);
//
//		// Teaming copied?
//		$result = $teamings->get_by_id(2);
//		$this->assertEquals(2, $result['id']);
//		$this->assertEquals('testteaming-1', $result['tag']);
//		$this->assertEquals('Test Teaming Copy', $result['name']);
//
//		// Teams copies?
//		$teamsTable = new \Team\Teams(get_course());
//		$teams = $teamsTable->get(2);
//		$this->assertEquals(1, count($teams));
//		$this->assertEquals("Team 1", $teams[0]['name']);
//
//		// Members copied?
//		$teamMembers = new \Team\TeamMembers(get_course());
//		$members = $teamMembers->get_members($teams[0]['id']);
//		$this->assertEquals(3, count($members));
//		$this->assertEquals('arb', $members[0]->get_userid());
//		$this->assertEquals('axi', $members[1]->get_userid());
//		$this->assertEquals('bart', $members[2]->get_userid());
//	}


}

/// @endcond
