<?php
/**
 * @file
 * @brief Class that provides functions to create and delete all team system tables
 */

namespace Team;

/**
 * Class that provides functions to create and delete all team system tables
 *
 * It is used by the management system to create the necessary tables as needed.
 */
class TeamTables extends \TableMaker {
    /**
     * @brief Constructor
     * @param \Course $course The Course object
     */
    public function __construct(\Course $course) {
        $this->add(new Teamings($course));
        $this->add(new Teams($course));
        $this->add(new TeamMembers($course));
        $this->add(new TeamSubmissions($course));
    }
}