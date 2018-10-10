<?php
/**
 * @file
 * Representation of a single team
 */

namespace CL\Team;

use CL\Users\User;
use CL\Site\Site;

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

			case 'teamingId':
				return $this->teamingId;

			case 'members':
				return $this->members;

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
	 * Clear the membership of this team object.
	 * Usually called prior to loading new members using addMember.
	 */
	public function clearMembers() {
		$this->members = [];
	}

	/**
	 * Add a member to this team
	 * @param User $member
	 */
	public function addMember(User $member) {
		$this->members[] = $member;
	}

	/**
	 * Construct an email link for a team
	 *
	 * Call this function with results from get_members()
	 * @param string $class Optional class to add to the a tag.
	 * @return string HTML link
	 */
	public function email_link(Site $site, $class=null) {
		$email = '';
		if(count($this->members) > 0) {
			foreach($this->members as $user) {
				if ($email !== '') {
					$email .= ";";
				}

				$email .= $user->email;
			}

			$subject = $site->siteName . ' Team ' . $this->name;
			$classAttr = $class === null ? '' : ' class="' . $class . '"';
			$email = '<a' . $classAttr . ' href="mailto:' . $email .
				'&subject=' . rawurlencode($subject) . '" title="Email Team">email</a>';
		}

		return $email;
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