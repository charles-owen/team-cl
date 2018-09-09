<?php
/**
 * @file
 * Table class for storing teams. Rows represent a team within a teaming
 */

namespace CL\Team;

use CL\Course\Member;
use CL\Course\Members;
use CL\Users\User;

/**
 * Table class for storing teams. Rows represent a team within a teaming
 */
class Teams  extends \CL\Tables\Table {
	/**
	 * Constructor
	 * @param \CL\Tables\Config $config The Database configuration object
	 */
	public function __construct(\CL\Tables\Config $config) {
		parent::__construct($config, 'team');
	}

	/**
	 * Create an SQL create table command for the team table
	 * @return string SQL
	 */
	public function createSQL() {

		$query = <<<SQL
CREATE TABLE IF NOT EXISTS `$this->tablename` (
  id        int(11) NOT NULL AUTO_INCREMENT, 
  teamingid int(11) NOT NULL, 
  name      varchar(200) NOT NULL, 
  PRIMARY KEY (id), 
  INDEX (teamingid));

SQL;

		return $query;
	}

	public function add($teamingId, $name) {
		$sql = <<<SQL
insert into $this->tablename(teamingid, name)
values(?, ?)
SQL;

		$stmt = $this->pdo->prepare($sql);
		$exec = [$teamingId, $name];
		// echo $this->sub_sql($sql, $exec);
		$stmt->execute($exec);

		return $this->pdo->lastInsertId();
	}


	public function delete($teamId) {
		$sql = <<<SQL
delete from $this->tablename
where id=?
SQL;

		$stmt = $this->pdo->prepare($sql);
		$exec = [$teamId];
		// echo $this->sub_sql($sql, $exec);
		return $stmt->execute($exec);
	}

	public function update($teamId, $name) {
		$sql = <<<SQL
update $this->tablename
set name=?
where id=?
SQL;

		$stmt = $this->pdo->prepare($sql);
		$exec = [$name, $teamId];
		// echo $this->sub_sql($sql, $exec);
		return $stmt->execute($exec);
	}

	/**
	 * Move a member to a team.
	 * @param int $teamingId Teaming we are in
	 * @param int $memberId Member we are moving
	 * @param int $teamId Team we are moving them to or 0 if removing
	 * @return true if successful
	 */
	public function move($teamingId, $memberId, $teamId) {
		$this->remove($teamingId, $memberId);
		if($teamId === 0) {
			return true;     // We are done!
		}

		$teamMembers = new TeamMembers($this->config);
		$sql = <<<SQL
insert into $teamMembers->tablename(teamid, memberid)
values(?, ?)
SQL;

		$stmt = $this->pdo->prepare($sql);
		$exec = [$teamId, $memberId];
		// echo $this->sub_sql($sql, $exec);
		return $stmt->execute($exec);
	}



	/**
	 * Remove a user from any teams
	 * @param int $teamingId Teaming we are in
	 * @param int $memberId Member we are removing
	 * @return true if successful
	 */
	public function remove($teamingId, $memberId) {
		$teamMembers = new TeamMembers($this->config);

		$sql = <<<SQL
delete from $teamMembers->tablename
where memberid = ? and teamid in (
 	select id from $this->tablename
 	where teamingid=?
)
SQL;

		$stmt = $this->pdo->prepare($sql);
		$exec = [$memberId, $teamingId];
		// echo $this->sub_sql($sql, $exec);
		return $stmt->execute($exec);
	}

	public function getTeams($teamingId) {

		$sql = <<<SQL
select * from $this->tablename
where teamingid=?
SQL;

		$stmt = $this->pdo->prepare($sql);
		$exec = [$teamingId];
		// echo $this->sub_sql($sql, $exec);
		$stmt->execute($exec);

		$teams = [];
		$teamNames = [];
		while(($row = $stmt->fetch(\PDO::FETCH_ASSOC))) {
			$team = new Team($row);
			$teams[$team->id] = new Team($row);
			$teamNames[$team->id] = $team->name;
		}

		//
		// Sort teams into natural order
		//
		natcasesort($teamNames);

		$ret = [];
		foreach($teamNames as $id => $name) {
			$ret[$id] = $teams[$id];
		}

		return $ret;
	}
}
