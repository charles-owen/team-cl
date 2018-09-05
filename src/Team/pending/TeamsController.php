<?php
/**
 * Created by PhpStorm.
 * User: cbowen
 * Date: 4/19/2016
 * Time: 3:05 PM
 */

namespace Team;


class TeamsController extends \Controller {

	public function __construct(\Course $course, \User $user) {
		parent::__construct($course, $user);
	}

	public function post($post) {
		$teams = new \Team\Teams($this->course);
		$teamingid = trim(strip_tags($_REQUEST['teamingid']));
		$users = new \Users($this->course);

		$this->set_redirect($this->course->get_libroot() . '/team/teams.php?teaming=' . $teamingid);

		/*
		 * Distribute options
		 */
		if(isset($post['distribute'])) {
			$size = strip_tags($post['size']);

			$distributer = new \Team\TeamDistributer($this->course);
			$distributer->distribute_unassigned($teamingid, $size);
			return;
		}

		if(isset($post['distribute-existing'])) {
			$distributer = new \Team\TeamDistributer($this->course);
			$distributer->distribute_existing($teamingid);
			return;
		}

		/*
		 * Move option
		 */
		if(isset($post['move'])) {
			$userid = trim(strip_tags($post['move']));
			$user = $users->get_user($userid);
			if($user !== null) {
				$from = trim(strip_tags($_REQUEST['from']));
				$to = trim(strip_tags($_REQUEST['to']));

				$teammembers = new \Team\TeamMembers($this->course);
				if($from != 0) {
					$teammembers->delete($from, $user);
				}

				if($to != 0) {
					$teammembers->add($to, $user);
				}
			}

			return;
		}

		/*
		 * Delete option
		 */
		if(isset($post['delete'])) {
			// Request to delete a teaming
			$id = trim(strip_tags($post['delete']));
			$teams->delete($id);
			return;
		}



		// The request values are: teamingid, id, name
		$id = trim(strip_tags($post['id']));
		$name = trim(strip_tags($post['name']));

		if($id == 0) {
			$teams->add($teamingid, $name);
		} else {
			$teams->update($id, $name);
		}

	}
}