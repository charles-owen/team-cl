<?php
/**
 * @file
 * Unit tests for the class TeamRatings
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
use CL\Team\TeamRatings;

class TeamRatingsTest extends TeamDatabaseTestBase {

    protected function setUp() : void {
//        $this->ensureTable(new Teamings($this->site->db));
//        $this->ensureTable(new Teams($this->site->db));
//        $this->ensureTable(new TeamMembers($this->site->db));
//        $this->ensureTable(new Users($this->site->db));
//        $this->ensureTable(new Members($this->site->db));
        $this->ensureTable(new TeamRatings($this->site->db));
    }

    public function test() {
        $ratings = new TeamRatings($this->site->db);

        $team1 = 31;
        $team2 = 47;

        $team1member1 = 8;
        $team1member2 = 18;
        $team1member3 = 22;

        $team2member1 = 84;
        $team2member2 = 184;
        $team2member3 = 224;

        $this->assertEmpty($ratings->get($team1, $team1member1));

        $ratings->add($team1, $team1member1, $team1member2, []);
        $this->assertEquals([['rateeid'=>$team1member2, 'metadata'=>[]]], $ratings->get($team1, $team1member1));

        $ratings->add($team1, $team1member1, $team1member2, [['participation'=>'Y']]);
        $this->assertEquals([['rateeid'=>$team1member2, 'metadata'=>[['participation'=>'Y']]]], $ratings->get($team1, $team1member1));

        $ratings->add($team1, $team1member1, $team1member3, [['participation'=>'N']]);
        $this->assertEquals([
                ['rateeid'=>$team1member2, 'metadata'=>[['participation'=>'Y']]],
                ['rateeid'=>$team1member3, 'metadata'=>[['participation'=>'N']]]
            ], $ratings->get($team1, $team1member1));

        $ratings->add($team2, $team2member1, $team2member2, []);
        $this->assertEquals([
            ['rateeid'=>$team1member2, 'metadata'=>[['participation'=>'Y']]],
            ['rateeid'=>$team1member3, 'metadata'=>[['participation'=>'N']]]
        ], $ratings->get($team1, $team1member1));
    }
}

/// @endcond
