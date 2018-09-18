<?php
/**
 * @file
 * Representation of a single team
 */

namespace CL\Team;

use CL\Users\User;

/**
 * Representation of a single team
 *
 * @cond
 * @property int $id
 * @property string $name
 * @endcond
 */
class Team {
	/**
	 * Team constructor.
	 * @param array|null $row Database row
	 * @param string $prefix Prefix on database column names
	 */
	public function __construct(array $row=null, $prefix = '') {
		if($row !== null) {
			$this->id = +$row[$prefix . 'id'];
			$this->name = $row[$prefix . 'name'];
			$this->teamingId = $row[$prefix . 'teamingid'];
		} else {
			$this->id = 0;
			$this->teamingId = 0;
			$this->name = null;
		}
	}

	/**
	 * Property get magic method
	 *
	 * <b>Properties</b>
	 * Property | Type | Description
	 * -------- | ---- | -----------
	 *
	 * @param string $property Property name
	 * @return mixed
	 */
	public function __get($property) {
		switch($property) {
			case 'id':
				return $this->id;

			case 'name':
				return $this->name;

			default:
				$trace = debug_backtrace();
				trigger_error(
					'Undefined property ' . $property .
					' in ' . $trace[0]['file'] .
					' on line ' . $trace[0]['line'],
					E_USER_NOTICE);
				return null;
		}
	}

	/**
	 * Add a member to this team
	 * @param User $member
	 */
	public function addMember(User $member) {
		$this->members[] = $member;
	}

	/**
	 * Get data representation suitable for sending to client system.
	 * @return array Data for sending to client
	 */
	public function data() {
		$data = ['id'=>$this->id, 'name'=>$this->name];

		$members = [];
		foreach($this->members as $member) {
			$members[] = [
				'id'=>$member->id,
				'memberid'=>$member->member->id,
				'name'=>$member->name,
				'email'=>$member->email,
				'user'=>$member->userId
			];
		}

		$data['members'] = $members;
		return $data;
	}

	private $id;        // Team internal id
	private $teamingId; // The teaming ID
	private $name;      // Team name

	private $members = [];  // Team membership
}