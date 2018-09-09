<?php
/**
 * @file
 * Representation of a single team
 */

namespace CL\Team;


/**
 * Representation of a single team
 *
 * @cond
 * @property int $id
 * @endcond
 */
class Team {

	public function __construct(array $row=null, $prefix = '') {
		if($row !== null) {
			$this->id = +$row[$prefix . 'id'];
			$this->name = $row[$prefix . 'name'];
		} else {
			$this->id = 0;
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

	public function addMember($member) {
		$this->members[] = $member;
	}

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
	private $name;      // Team name

	private $members = [];  // Team membership
}