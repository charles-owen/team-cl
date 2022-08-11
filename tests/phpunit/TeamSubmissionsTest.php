<?php
/** @file
 * Unit tests for the class TeamSubmissions
 * @cond 
 */

require_once __DIR__ . '/init.php';
require_once __DIR__ . '/cls/TeamDatabaseTestBase.php';

use CL\Users\Users;
use CL\Course\Member;
use CL\Course\Members;
use CL\Team\Teamings;
use CL\Team\Teams;
use CL\Team\TeamMembers;
use CL\Team\Submission\TeamSubmissions;
use CL\Course\Test\DummyMember;

class TeamSubmissionsTest extends TeamDatabaseTestBase {
    protected function setUp() : void {
        $this->ensureTable(new Users($this->site->db));
        $this->ensureTable(new Members($this->site->db));
        $this->ensureTable(new Teamings($this->site->db));
        $this->ensureTable(new Teams($this->site->db));
        $this->ensureTable(new TeamSubmissions($this->site->db));
        $this->ensureTable(new TeamMembers($this->site->db));
    }

//	public function test_has_submissions() {
//		$submissions = new Submissions($this->site->db);
//		$dummy = new DummyMember();
//		$user = $dummy->create(887, 14, Member::STUDENT);
//
//        $time = strtotime("2015-01-10 14:00:00");
//        $submissions->submit_text($user, 'design3', 'task1', $time, "test text");
//
//        $this->assertTrue($submissions->has_submissions($user, 'design3', "task1"));
//		$this->assertFalse($submissions->has_submissions($user, 'design3', "taskX"));
//	}


	public function test_submit_text() {
        $this->dataSets(['db/user-many.xml',
            'db/member-many.xml',
            'db/teaming.xml',
            'db/team.xml',
            'db/teammember.xml'
        ]);

        $members = new Members($this->site->db);
        $member1 = $members->getAsUser(23);
        // $member2 = $members->getAsUser(25);
        // $member3 = $members->getAsUser(45);

        $teamId = 7;

        $submissions = new TeamSubmissions($this->site->db);


		// After existing submissions
		$time = strtotime("2015-01-10 14:00:00");
		$submissions->submit_text($teamId, $member1, 'design3', 'task1', $time, "test text");

		$submits = $submissions->get_submissions($teamId, 'design3', "task1");
		$this->assertEquals(1, count($submits));

		$submit = $submits[0];
		$this->assertEquals($time, $submit['date']);
		$id = $submit['id'];

		$text = $submissions->get_text($id);
		$this->assertEquals("test text", $text['text']);
		$this->assertEquals($teamId, $text['teamid']);
		$this->assertEquals("design3", $text['assigntag']);
		$this->assertEquals("task1", $text['submissiontag']);
	}


	public function test_submit_file() {
        $this->dataSets(['db/user-many.xml',
            'db/member-many.xml',
            'db/teaming.xml',
            'db/team.xml',
            'db/teammember.xml'
        ]);

        $members = new Members($this->site->db);
        $member1 = $members->getAsUser(23);
        // $member2 = $members->getAsUser(25);
        // $member3 = $members->getAsUser(45);

        $teamId = 7;

        $submissions = new TeamSubmissions($this->site->db);

		$file = __DIR__ . "/data/classdiagram.png";
        $handle = fopen($file, "rb");
        $fileData = fread($handle, filesize($file));
        fclose($handle);

		$time = strtotime("2015-01-10 22:22:00");
		$result = $submissions->submit_file($teamId, $member1, 'design3', 'task2',
			$time, $file,"test.png","image/png");

		$this->assertNotFalse($result);

		$submits = $submissions->get_submissions($teamId, 'design3', "task2");
		$this->assertEquals(1, count($submits));

		$submit = $submits[0];
		$this->assertEquals($time, $submit['date']);
		$this->assertEquals("test.png", $submit['name']);
		$this->assertEquals("image/png", $submit['type']);

		$id = $submit['id'];

		$file = $submissions->get_file($id);
        $this->assertEquals($fileData, $file['binary']);
		$this->assertEquals(23, $file['memberid']);
		$this->assertEquals("design3", $file['assigntag']);
		$this->assertEquals("task2", $file['submissiontag']);
	}

//	public function test_analysis() {
//		$submissions = new Submissions($this->site->db);
//        $dummy = new DummyMember();
//        $user = $dummy->create(887, 14, Member::STUDENT);
//
//        // Add a submission
//        $time = strtotime("2015-01-10 14:00:00");
//        $id = $submissions->submit_text($user, 'design3', 'task1', $time, "test text");
//
//        $analysis = $submissions->get_analysis($id);
//		$this->assertNull($analysis);
//
//		$test = array('doxygen' => 'some results', 'cppcheck' => 'other results');
//
//		$submissions->set_analysis($id, $test);
//		$test1 = $submissions->get_analysis($id);
//
//		$this->assertTrue(isset($test1['doxygen']));
//		$this->assertEquals($test['doxygen'], $test1['doxygen']);
//		$this->assertEquals($test['cppcheck'], $test1['cppcheck']);
//	}


	public function test_create_sql() {
		global $course;

		$submissions = new TeamSubmissions($this->site->db);

		$sql = $submissions->createSQL();
		$this->assertStringContainsString('test_cl_teamsubmission', $sql);
	}

	public function test_drop_sql() {
		global $course;

		$submissions = new TeamSubmissions($this->site->db);

		$sql = $submissions->dropSQL();
		$sqlshouldbe = <<<SQL
drop table if exists test_cl_teamsubmission;
SQL;

		$this->assertEquals($sqlshouldbe, $sql);
	}
}

/// @endcond
