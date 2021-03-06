<?php
/** @file
 * Base class for database tests.
 */

use CL\Site\Test\DatabaseTestBase;
use CL\Course\Course;


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

		return $site;
	}

	protected $course;

}
