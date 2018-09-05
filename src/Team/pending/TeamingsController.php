<?php
/**
 * Created by PhpStorm.
 * User: cbowen
 * Date: 4/19/2016
 * Time: 3:05 PM
 */

namespace Team;


class TeamingsController extends \Controller {

	public function __construct(\Course $course, \User $user) {
		parent::__construct($course, $user);

		$this->set_redirect($course->get_libroot() . '/team/teamings.php');
	}

	public function post($post) {
		$teamings = new \Team\Teamings($this->course);

		if(isset($post['delete'])) {
			// Request to delete a teaming
			$id = trim(strip_tags($post['delete']));
			$teamings->delete($id);
			exit;
		}

		if(isset($post['duplicate'])) {
			// Request to delete a teaming
			$id = trim(strip_tags($post['duplicate']));
			$teamings->duplicate($id);
			exit;
		}

		// The request values are: section, id, tag, name
		$id = trim(strip_tags($post['id']));
		$section = trim(strip_tags($post['section']));
		$tag = trim(strip_tags($post['tag']));
		$name = trim(strip_tags($post['name']));
		$public = isset($post['public']);

		if($id == 0) {
			$teamings->add($tag, $name,
				$this->course->get_semester(), $section, $public);
		} else {
			$teamings->update($id, $tag, $name, $public);
		}

	}
}