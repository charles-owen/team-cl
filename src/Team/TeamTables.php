<?php
/**
 * @file
 * Table maker for the Team subsystem tables
 */

namespace CL\Team;

use CL\Tables\Config;

/**
 * Table maker for the Interact subsystem tables
 */
class TeamTables extends \CL\Tables\TableMaker {

	/**
	 * Table maker for the Team subsystem tables
	 * @param Config $config Database configuration object
	 */
	public function __construct(Config $config) {
		parent::__construct($config);

		$this->add(new Teamings($config));
		$this->add(new Teams($config));
		$this->add(new TeamMembers($config));
	}
}
