<?php
/** @file
 * @brief Table class for teams. These are the teams in a set of teamings.
 */

/**
 * @brief Classes associated with the teams and teamings system
 */
namespace Team;

/** @brief Table class for teams. These are the teams in a set of teamings.
 */
class Teams extends \Table {
	
	/** @brief Constructor 
	 * @param $course A Course object to use */
	public function __construct(\Course $course) {
		parent::__construct($course, 'team');
	}
	
	/** @brief Get all teams for a given teaming 
	 * @param $teamingid The teaming ID
	 * @returns Array of team records, each with the keys id and name */
	public function get($teamingid) {
		$pdo = $this->pdo();
		
		$sql = <<<SQL
select id, name from $this->tablename
where teamingid=?
order by name
SQL;

		$stmt = $pdo->prepare($sql);
		$stmt->execute(array($teamingid));
		
		return $stmt->fetchAll();
	}
	
	/** @brief A team by id
	 * @param $id The team ID
	 * @returns Array for record with the keys name, teamname, treamingid, and teamid */
	public function get_by_id($id) {
		$pdo = $this->pdo();

		$sql = <<<SQL
select teamingid, name from $this->tablename
where id=?
order by name
SQL;

		$stmt = $pdo->prepare($sql);
		$stmt->execute(array($id));
		if($stmt->rowCount() == 0) {
			return null;
		}
		
		$row = $stmt->fetch();
		return array("name" => $row['name'],
			"teamname" => $row['name'],
			"teamingid" => $row['teamingid'],
			"teamid" => $id);
	}

	public function get_next_by_id($id) {
		$pdo = $this->pdo();

		$sql = <<<SQL
select *
from $this->tablename
where name > (SELECT name FROM $this->tablename WHERE id=?) 
and teamingid = (SELECT teamingid FROM $this->tablename WHERE id=?) 
order by name
limit 0,1
SQL;

		$stmt = $pdo->prepare($sql);
		$stmt->execute(array($id, $id));
		if($stmt->rowCount() == 0) {
			return null;
		}

		$row = $stmt->fetch();
		return array("name" => $row['name'],
			"teamname" => $row['name'],
			"teamingid" => $row['teamingid'],
			"teamid" => $row['id']);
	}

	public function get_prev_by_id($id) {
		$pdo = $this->pdo();

		$sql = <<<SQL
select *
from $this->tablename
where name < (SELECT name FROM $this->tablename WHERE id=?) 
and teamingid = (SELECT teamingid FROM $this->tablename WHERE id=?) 
order by name desc
limit 0,1
SQL;

		$stmt = $pdo->prepare($sql);
		$stmt->execute(array($id, $id));
		if($stmt->rowCount() == 0) {
			return null;
		}

		$row = $stmt->fetch();
		return array("name" => $row['name'],
			"teamname" => $row['name'],
			"teamingid" => $row['teamingid'],
			"teamid" => $row['id']);
	}

	/** @brief Add a new team
	 * @param $teamingid The Teaming ID
	 * @param $name Team name
	 * @returns ID of the new record or null if insert failed */
	public function add($teamingid, $name) {
		$pdo = $this->pdo();
		
		$sql = <<<SQL
insert into $this->tablename(teamingid, name) 
values(?, ?);
SQL;
		
		//echo $this->sub_sql($sql, array($tag, $name, $semester, $sectionid));
		
		try {
			$stmt = $pdo->prepare($sql);
			$stmt->execute(array($teamingid, $name));
			return $pdo->lastInsertId();
		} catch(\PDOException $e) {
			return null;
		}
	}
	
	/** @brief Update a team record
	 * @param $id ID for the record
	 * @param $name New name 
	 * @returns true if successful, false otherwise */
	public function update($id, $name) {
		$pdo = $this->pdo();
		
		$sql = <<<SQL
update $this->tablename
set name=?
where id=?
SQL;

		try {
			$stmt = $pdo->prepare($sql);
			$stmt->execute(array($name, $id));
			return true;
		} catch(\PDOException $e) {
			return false;
		}	
	
	}
	
	/** @brief Delete a team
	 * @param $id ID for the team
	 * @returns true if successful, false otherwise */
	public function delete($id) {
		$pdo = $this->pdo();
		
		$sql = <<<SQL
delete from $this->tablename
where id=?
SQL;

		try {
			$stmt = $pdo->prepare($sql);
			$stmt->execute(array($id));
			return true;
		} catch(\PDOException $e) {
			return false;
		}	
		
	}
	
	/** @brief Delete a team
	 * @param $teamingid ID for the teaming
	 * @returns true if successful, false otherwise */
	public function delete_by_teaming($teamingid) {
		$pdo = $this->pdo();
		
		$sql = <<<SQL
delete from $this->tablename
where teamingid=?
SQL;

		try {
			$stmt = $pdo->prepare($sql);
			$stmt->execute(array($teamingid));
			return true;
		} catch(\PDOException $e) {
			return false;
		}	
		
	}
	
	
	
	
	/** @brief Create an SQL create table command for the this table */
	public function create_sql() {
		$prefix = $this->prefix;
		$query = <<<SQL
CREATE TABLE IF NOT EXISTS $this->tablename (id int(11) NOT NULL AUTO_INCREMENT, teamingid int(11) NOT NULL, name varchar(200) NOT NULL, PRIMARY KEY (id), INDEX (teamingid));
SQL;

		return $query;
	}
	
};
