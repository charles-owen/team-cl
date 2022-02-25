<?php
/** @file
 * Base class for database tests.
 */

use CL\Site\Test\DatabaseTestBase;

use CL\Team\Teamings;
use CL\Team\Teaming;


/**
 * Base class for database tests.
 *
 * Adds some assertions I find useful and a more useful way to add tables
 */
abstract class TeamDatabaseTestBase extends DatabaseTestBase {

	public function __construct() {
		parent::__construct(__DIR__ . '/..');
	}


    protected function createSite() {
        $site = parent::createSite();
        $site->config = 'course';

        $course = $site->course;
        $course->define("cse999", 	// Course account name
            "CSE999", 				// Course name
            "Course Software Development"
        );

        return $site;
    }


    /**
     * Create a teaming for testing purposes
     * @param string $tag Tag for the teaming
     * @param string $name Name for the teaming
     * @return Teaming|null Created Teaming
     */
    protected function createTeaming($tag, $name) {
        $teamings = new Teamings($this->site->db);

        $teaming1 = new Teaming();
        $teaming1->tag = $tag;
        $teaming1->name = $name;
        $teaming1->semester = 'FS18';
        $teaming1->sectionId = '799';
        $teaming1->public = true;

        $teamingId = $teamings->add($teaming1);
        return $teamings->getById($teamingId);
    }
}
