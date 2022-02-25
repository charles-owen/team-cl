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
use CL\Team\TeamRatings;
use CL\Course\Section;

class TeamApiTest extends TeamDatabaseTestBase {

    protected function setUp() : void {
        $this->ensureTable(new Teamings($this->site->db));
        $this->ensureTable(new Teams($this->site->db));
        $this->ensureTable(new TeamMembers($this->site->db));
        $this->ensureTable(new Users($this->site->db));
        $this->ensureTable(new Members($this->site->db));
        $this->ensureTable(new TeamRatings($this->site->db));
    }

	public function test() {
        $this->dataSets(['db/user-many.xml', 'db/member-many.xml']);

        $teaming = $this->createTeaming('project1', 'Project 1');
        $teamingId = $teaming->id;

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

    public function testRate() {
        $this->dataSets(['db/user-many.xml', 'db/member-many.xml']);

        $site = $this->createSite();


        $course = $site->course;
        $site->start(['open'=>true]);

        //
        // Add a section and an assignment (from course/assignments.s22.799.php)
        // $rater = $projects->add_assignment("project1r1", "Project 1 Member Rating #1");
        //
        $section = $course->add_section('ss22', '799', Section::Online);
        $assignment = $section->get_assignment("project1r1");
        $this->assertNotNull($assignment);

        $teams = new Teams($this->site->db);

        // Create a teaming
        $teaming = $this->createTeaming('project1', 'Project 1');
        $teamingId = $teaming->id;

        // Create a couple of teams
        $team1 = $teams->add($teamingId, 'Team 1');
        $team2 = $teams->add($teamingId, 'Team 2');

        // Add some members to the team
        $members = new Members($this->site->db);
        $user22 = $members->getAsUser(22);
        $user40 = $members->getAsUser(40);
        $user47 = $members->getAsUser(47);
        $user35 = $members->getAsUser(35);

        $teamMembers = new TeamMembers($this->site->db);
        $teamMembers->add($user22->member->id, $team1->id);
        $teamMembers->add($user40->member->id, $team1->id);
        $teamMembers->add($user47->member->id, $team1->id);
        $teamMembers->add($user35->member->id, $team2->id); // One to another team

        // A typical rating by user 22 of users 40 and 47
        $rating = [
            40 => ['participation' => 'Y', 'rating' => '4'],
            47 => ['participation' => 'N', 'rating' => '1']
        ];

        $assignTag = '';

        $api = new TeamApi();

        $time1 = time() + 882143;
        $server = new ServerMock();
//        $server->setServer('REQUEST_URI', '/api/team/rate/' . $teamingId);
//        $server->setPost('value', $time1);
//        $ret = $api->apiDispatch($site, $server, ['teams', $teamingId], [], $time1);
//        $this->assertStringNotContainsString('error', $ret);
//        $json = json_decode($ret, true);

    }


}

/// @endcond
