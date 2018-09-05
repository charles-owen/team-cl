<?php
/** @file
 * Table class for teamings. This is the list of all team sets.
 */
 
namespace CL\Team;

/**
 * Model the collection of all teams (the teaming table)
 */
class Teamings extends \CL\Tables\Table {
	/**
	 * Constructor
	 * @param \CL\Tables\Config $config The Database configuration object
	 */
	public function __construct(\CL\Tables\Config $config) {
		parent::__construct($config, 'teaming');
	}

	/**
	 * Create an SQL create table command for the users table
	 * @return string SQL
	 */
	public function createSQL() {

		$query = <<<SQL
CREATE TABLE IF NOT EXISTS `$this->tablename` (
  id       int(11) NOT NULL AUTO_INCREMENT, 
  `tag`    varchar(30) NOT NULL, 
  name     varchar(200) NOT NULL, 
  semester char(4) NOT NULL, 
  section  char(3) NOT NULL, 
  `public` int(1) NOT NULL, 
  metadata mediumtext, 
  PRIMARY KEY (id), 
  INDEX (`tag`));

SQL;

		return $query;
	}

	/** Add a new teaming record
	 * @param Teaming $teaming Teaming to add (from record)
	 * @return int ID of new record or null if insert failed
	 */
	public function add(Teaming $teaming) {
		$pdo = $this->pdo();

		$sql = <<<SQL
insert into $this->tablename(tag, name, semester, section, public, metadata)
values(?, ?, ?, ?, ?, ?);
SQL;

		//echo $this->sub_sql($sql, array($tag, $name, $semester, $sectionid));

		try {
			$stmt = $pdo->prepare($sql);
			$stmt->execute([$teaming->tag, $teaming->name, $teaming->semester, $teaming->sectionId,
				$teaming->public ? 1 : 0, $teaming->meta->json()]);
			$teaming->id = $pdo->lastInsertId();
			return $teaming->id;
		} catch(\PDOException $e) {
			return null;
		}
	}



	/** Get all teamings records for a given section
	 * @param string $semester The semester code, like FS18
	 * @param string $sectionId The id for the section (like 001)
	 * @return array of Teaming objects
	 */
	public function getBySection($semester, $sectionId) {
		$pdo = $this->pdo();

		$sql = <<<SQL
select *
from $this->tablename
where semester=? and section=?
order by name
SQL;

		$stmt = $pdo->prepare($sql);
		$stmt->execute([$semester, $sectionId]);

		$result = array();
		while(($row = $stmt->fetch(\PDO::FETCH_ASSOC))) {
			$result[] = new Teaming($row);
		}

		return $result;
	}

	/**
	 * Get teaming record for a given section/tag
	 * @param $semester
	 * @param $sectionId
	 * @param $tag
	 * @return Teaming object or null
	 */
	public function getByTag($semester, $sectionId, $tag) {
		$pdo = $this->pdo();

		$sql = <<<SQL
select *
from $this->tablename
where semester=? and section=? and tag=?
order by name
SQL;

		$stmt = $pdo->prepare($sql);
		$stmt->execute([$semester, $sectionId, $tag]);

		$row = $stmt->fetch(\PDO::FETCH_ASSOC);
		if($row) {
			return new Teaming($row);
		}

		return null;
	}

	/**
	 * Get teaming record by id
	 * @param int $id Teaming internal ID
	 * @return Teaming object or null
	 */
	public function getById($id) {
		$pdo = $this->pdo();

		$sql = <<<SQL
select *
from $this->tablename
where id=?
order by name
SQL;

		$stmt = $pdo->prepare($sql);
		$stmt->execute([$id]);

		$row = $stmt->fetch(\PDO::FETCH_ASSOC);
		if($row) {
			return new Teaming($row);
		}

		return null;
	}


	/** Update a teaming record
	 * @param $id ID for the record
	 * @param $tag New tag
	 * @param $name New name
	 * @param $public Public
	 * @return true if successful, false otherwise
	 */
	public function update(Teaming $teaming) {
		$pdo = $this->pdo();

		$sql = <<<SQL
update $this->tablename
set tag=?, name=?, public=?, metadata=?
where id=?
SQL;

		try {
			$stmt = $pdo->prepare($sql);
			$stmt->execute([$teaming->tag, $teaming->name, $teaming->public ? 1 : 0, $teaming->meta->json(), $teaming->id]);
			return true;
		} catch(\PDOException $e) {
			return false;
		}

	}


	/** Delete a teaming record
	 * @param int $id ID for the record
	 * @return true if successful, false otherwise
	 */
	public function delete($id) {
		$pdo = $this->pdo();

		$sql = <<<SQL
delete from $this->tablename
where id=?
SQL;

		try {
			$stmt = $pdo->prepare($sql);
			$stmt->execute([$id]);
			return true;
		} catch(\PDOException $e) {
			return false;
		}
	}


//
//	/** Get team records
//	 *
//	 * This version works based on a join of the three
//	 * tables and will return fields from all three tables.
//	 * Seach can be by arbitrary options
//	 * @param $where Array of key/value pairs we can test by
//	 * @param $order Optional ordering parameter for results */
//	public function get_teams($where, $order=null) {
//		$pdo = $this->pdo();
//
//		$teams = new Teams($this->course);
//		$teamMembersTable = new TeamMembers($this->course);
//
//		$sql = <<<SQL
//select teamingid, tag, $this->tablename.name as teamingname, section, semester,  $teams->tablename.name as teamname, teamid, userid from $this->tablename
//inner join $teams->tablename on $this->tablename.id = teamingid
//inner join $teamMembersTable->tablename on $teams->tablename.id = teamid
//SQL;
//
//		$first = true;
//		$a = array();
//		foreach($where as $key => $value) {
//			if($first) {
//				$sql .= " where $key=?";
//				$first = false;
//			} else {
//				$sql .= " and $key=?";
//			}
//
//			$a[] = $value;
//		}
//
//		if($order !== null) {
//			$sql .= ' order by ' . $order;
//		}
//
//		//echo $this->sub_sql($sql, $a);
//
//		$stmt = $pdo->prepare($sql);
//		$stmt->execute($a);
//
//		return $stmt->fetchAll(\PDO::FETCH_ASSOC);
//	}
//


//
//	/** Delete a teaming
//	 * @param $id ID for the record
//	 * @returns true if successful, false otherwise */
//	public function delete($id) {
//		// Delete any teams for this teaming
//		$teams = new Teams($this->course);
//		$teams->delete_by_teaming($id);
//
//		$pdo = $this->pdo();
//
//		$sql = <<<SQL
//delete from $this->tablename
//where id=?
//SQL;
//
//		try {
//			$stmt = $pdo->prepare($sql);
//			$stmt->execute(array($id));
//			return true;
//		} catch(\PDOException $e) {
//			return false;
//		}
//
//	}
//
//	/** Duplicate a teaming
//	 * @param $id ID for the teaming record
//	 * @returns id if successful, null otherwise */
//	public function duplicate($id) {
//		$teaming = $this->get_by_id($id);
//		if($teaming === null) {
//			return null;
//		}
//
//		// Duplicate the teaming
//		$newId = $this->add($teaming['tag'] . '-1',
//			$teaming['name'] . ' Copy',
//			$teaming['semester'],
//			$teaming['section'],
//			$teaming['public']);
//		if($newId === null) {
//			return null;
//		}
//
//		// Get the teams and their members
//		$teamsTable = new Teams($this->course);
//		$teamMembersTable = new TeamMembers($this->course);
//
//		$teams = $teamsTable->get($id);
//		foreach($teams as $team) {
//			// Create a new team
//			$newTeamId = $teamsTable->add($newId, $team['name']);
//
//			// Get and duplicate the team members
//			$members = $teamMembersTable->get_members($team['id']);
//			foreach($members as $member) {
//				$teamMembersTable->add($newTeamId, $member);
//			}
//		}
//
//		return $id;
//
//	}
//


}
