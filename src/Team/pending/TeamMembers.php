<?php
/** @file
 * Table class for team members. 
 */
 
namespace Team;

/** Table class for team members.
 */
class TeamMembers extends \Table {
	
	/** Constructor 
	 * @param $course A Course object to use */
	public function __construct(\Course $course) {
		parent::__construct($course, 'teammember');
	}
	
	/** Get the members of a team by team ID
	 * @param $teamid The team ID value
	 * @returns Array of members as User objects */
	public function get_members($teamid) {
		$pdo = $this->pdo();
		$users = new \Users($this->course);
		
		$sql = <<<SQL
select userid from $this->tablename
where teamid=?
SQL;

		$ids = array();
		
		$stmt = $pdo->prepare($sql);
		if($stmt->execute(array($teamid))) {
			while($row = $stmt->fetch(\PDO::FETCH_ASSOC)) {
				$ids[] = $row['userid'];
			}
		}
		
		return $users->get_users_by_ids($ids, "name");
	}


	/** Is a user a member of an indicated team?
	 * @param $teamid The team ID value
	 * @param \User $user User we are testing
	 * @returns Array of members as User objects */
	public function is_member($teamid, \User $user) {
		$pdo = $this->pdo();

		$sql = <<<SQL
select * from $this->tablename
where teamid=? and userid=?
SQL;

		$stmt = $pdo->prepare($sql);
		if($stmt->execute(array($teamid, $user->get_id()))) {
			return $stmt->rowCount() > 0;
		}

		return false;
	}
	
	/** Get the teams this user is a member of 
	 * @param $user User object
	 * @returns Array of team ID values */
	public function get_teams(\User $user) {
		$pdo = $this->pdo();
		$sql = <<<SQL
select teamid from $this->tablename
where userid=?
SQL;

		$ids = array();
		
		$stmt = $pdo->prepare($sql);
		if($stmt->execute(array($user->get_id()))) {
			while($row = $stmt->fetch(\PDO::FETCH_ASSOC)) {
				$ids[] = $row['teamid'];
			}
		}
	
		return $ids;
	}
	
	/** Get the teams this user is a member of in a given teaming
	 * @param $user User object
	 * @param $teamingid Teaming ID value
	 * @returns Array of team ID values */
	public function get_teams_in_teaming(\User $user, $teamingid) {
		$teams = new Teams($this->course);
		$teams_table = $teams->get_tablename();
		
		$pdo = $this->pdo();
		$sql = <<<SQL
SELECT teamid FROM $this->tablename
inner join $teams_table
on id = teamid
where userid=? and teamingid = ?
SQL;

		$ids = array();
		
		$stmt = $pdo->prepare($sql);
		if($stmt->execute(array($user->get_id(), $teamingid))) {
			while($row = $stmt->fetch(\PDO::FETCH_ASSOC)) {
				$ids[] = $row['teamid'];
			}
		}
	
		return $ids;
	}

	/** Get the teams this user is a member of in a given teaming
	 * @param $user User object
	 * @param $teamingTag Teaming name
	 * @returns Array of team ID values */
	public function get_teams_in_teaming_by_tag(\User $user, $teamingTag) {
		$teamings = new Teamings($this->course);
		$teams = new Teams($this->course);

		$teamings_table = $teamings->get_tablename();
		$teams_table = $teams->get_tablename();

		$pdo = $this->pdo();
		$sql = <<<SQL
SELECT teamid FROM $teamings_table teaming
inner join $teams_table team
on teaming.id = team.teamingid
inner join $this->tablename teammember
on team.id = teamid
where teaming.tag=? and teammember.userid=?
SQL;

		$ids = array();

		$stmt = $pdo->prepare($sql);
		$exec = array($teamingTag, $user->get_id());

		if($stmt->execute($exec)) {
			while($row = $stmt->fetch(\PDO::FETCH_ASSOC)) {
				$ids[] = $row['teamid'];
			}
		}

		return $ids;
	}
	
	/** Add a new team membership
	 * @param $teamid The Team ID
	 * @param $user User to add */
	public function add($teamid, \User $user) {
		$pdo = $this->pdo();
		
		$sql = <<<SQL
insert into $this->tablename(teamid, userid) 
values(?, ?);
SQL;
				
		try {
			$stmt = $pdo->prepare($sql);
			$stmt->execute(array($teamid, $user->get_id()));
			return true;
		} catch(\PDOException $e) {
			return false;
		}
	}
	
	/** Delete a team membership
	 * @param $teamid The Team ID
	 * @param $user User to add */
	public function delete($teamid, \User $user) {
		$pdo = $this->pdo();
		
		$sql = <<<SQL
delete from $this->tablename
where teamid=? and userid=?
SQL;

		try {
			$stmt = $pdo->prepare($sql);
			$stmt->execute(array($teamid, $user->get_id()));
			return true;
		} catch(\PDOException $e) {
			return false;
		}	
	}
	
	/** Delete a team (all members)
	 * @param $teamid The Team ID */
	public function delete_team($teamid) {
		$pdo = $this->pdo();
		
		$sql = <<<SQL
delete from $this->tablename
where teamid=?
SQL;

		try {
			$stmt = $pdo->prepare($sql);
			$stmt->execute(array($teamid));
			return true;
		} catch(\PDOException $e) {
			return false;
		}	
	}


	/**
	 * Construct an email link for a team
	 *
	 * Call this function with results from get_members()
	 * @param $name Name of the team
	 * @param $members Members of the team (array)
	 * @return string HTML link
	 */
	public function email_link($name, $members, $class=null) {
		$email = '';
		if(count($members) > 0) {
			foreach($members as $user) {
				if ($email !== '') {
					$email .= ";";
				}

				$email .= $user->get_email();
			}

			$subject = $this->course->get_name() . ' Team ' . $name;
			$classAttr = $class === null ? '' : ' class="' . $class . '"';
			$email = '<a' . $classAttr . ' href="mailto:' . $email .
				'&subject=' . rawurlencode($subject) . '" title="Email Team">email</a>';
		}

		return $email;
	}

	
	/** Create an SQL create table command for the this table */
	public function create_sql() {
		$prefix = $this->prefix;
		$query = <<<SQL
CREATE TABLE IF NOT EXISTS $this->tablename (
  teamid int(11) NOT NULL, 
  userid int(11) NOT NULL, 
  PRIMARY KEY (teamid, 
  userid));
SQL;

		return $query;
	}
};
