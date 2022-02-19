<?php
/** @file
 * Unit tests for the class TeamApi
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
use CL\Site\Test\ServerMock;
use CL\Course\Member;
use CL\Team\TeamApi;

class TeamApiTest extends TeamDatabaseTestBase {


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

		$teaming1 = new Teaming();
		$teaming1->tag = 'project1';
		$teaming1->name = 'Project 1';
		$teaming1->semester = 'FS18';
		$teaming1->sectionId = '799';
		$teaming1->public = true;

		$teamings->add($teaming1);
		$teamingId = $teaming1->id;

		$site = $this->createSite();
		$site->start(['open'=>true]);

		$members = new Members($this->site->db);
		$admin = $members->getAsUser(10);
		$admin->member->role = Member::TA;
		$site->users->user = $admin;

		$api = new TeamApi();

		$time1 = time() + 882143;
		$server = new ServerMock();
		$server->setServer('REQUEST_URI', '/api/team/teams/' . $teamingId);
		$server->setPost('value', $time1);
		$ret = $api->apiDispatch($site, $server, ['teams', $teamingId], [], $time1);
		$this->assertStringNotContainsString('error', $ret);
		$json = json_decode($ret, true);

		//print_r($json);
		$teams = $json['data'][0]['attributes'];
		$this->assertCount(1, $teams);
	}


}

/// @endcond
