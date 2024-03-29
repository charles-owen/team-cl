<?php
/** @file
 * Table class for teamings. This is the list of all team sets.
 */
 
namespace CL\Team;

use \CL\Users\User;


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
  section  char(4) NOT NULL, 
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
		$pdo = $this->pdo;

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
		$pdo = $this->pdo;

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
		$pdo = $this->pdo;

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
		$pdo = $this->pdo;

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


	/**
	 * Update a teaming record
	 * @param Teaming $teaming
	 * @return bool true if successful
	 */
	public function update(Teaming $teaming) {
		$pdo = $this->pdo;

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
		$pdo = $this->pdo;

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

	/**
	 * Get the team for a given user
	 * @param User $user User we are getting the team for
	 * @param string $teamingTag The teaming tag
	 * @param bool $getMembers True if we need to fetch the members as well
	 * @return Team|null
	 */
	public function getTeamByMember(User $user, $teamingTag, $getMembers = false) {
		$teams = new Teams($this->config);
		$teamMembers = new TeamMembers($this->config);

		$pdo = $this->pdo;

		$sql = <<<SQL
select team.id as id, team.teamingid as teamingid, team.name as name
from $this->tablename teaming
join $teams->tablename team
on teaming.id=team.teamingid
join $teamMembers->tablename teammember
on team.id = teammember.teamid
where semester=? and section=? and teaming.tag=? and memberid=?
order by name
SQL;

		$stmt = $pdo->prepare($sql);
		$member = $user->member;
		$stmt->execute([$member->semester, $member->sectionId, $teamingTag, $member->id]);

		$row = $stmt->fetch(\PDO::FETCH_ASSOC);
		if($row) {
			$team = new Team($row);
			if($getMembers) {
				$teamMembers->getTeamMembers($team);
			}
			return $team;
		}

		return null;
	}

	/**
	 * Get the team for a given user
	 * @param User $user User we are getting the team for
	 * @param string $teamingId The teaming ID
	 * @param bool $getMembers True if we need to fetch the members as well
	 * @return Team|null
	 */
	public function getTeamByMember2(User $user, $teamingId, $getMembers = false) {
		$teams = new Teams($this->config);
		$teamMembers = new TeamMembers($this->config);

		$pdo = $this->pdo;

		$sql = <<<SQL
select team.id as id, team.teamingid as teamingid, team.name as name
from $this->tablename teaming
join $teams->tablename team
on teaming.id=team.teamingid
join $teamMembers->tablename teammember
on team.id = teammember.teamid
where semester=? and section=? and teaming.id=? and memberid=?
order by name
SQL;

		$stmt = $pdo->prepare($sql);
		$member = $user->member;
		$stmt->execute([$member->semester, $member->sectionId, $teamingId, $member->id]);

		$row = $stmt->fetch(\PDO::FETCH_ASSOC);
		if($row) {
			$team = new Team($row);
			if($getMembers) {
				$teamMembers->getTeamMembers($team);
			}
			return $team;
		}

		return null;
	}

	/**
	 * Get all submissions for a team member.
	 * @param User $user User we are getting for
	 * @param string $teamingTag Teaming name
	 * @param string $assignTag Assignment tag
	 * @param string $submissionTag Submission tag
	 * @return array
	 */
	public function get_submissions(User $user, $teamingTag, $assignTag, $submissionTag) {
		$team = $this->getTeamByMember($user, $teamingTag);
		if($team === null) {
			return [];
		}

		$submissions = new Submission\TeamSubmissions($this->config);
		return $submissions->get_submissions($team->id, $assignTag, $submissionTag);
	}



	/**
	 * Duplicate a teaming
	 * @param int $id ID for the teaming record we are copying
	 * @param Teaming $copy
	 * @return int id if successful, null otherwise
	 */
	public function duplicate($id, Teaming $copy) {
		$teaming = $this->getById($id);
		if($teaming === null) {
			return null;
		}

		// Duplicate the teaming
		$newId = $this->add($copy);
		if($newId === null) {
			return null;
		}

		// Get the teams and their members
		$teamsTable = new Teams($this->config);
		$teamMembersTable = new TeamMembers($this->config);

		$teams = $teamsTable->getTeams($teaming->id);
		foreach($teams as $team) {
			// Create a new team
			$newTeam = $teamsTable->add($copy->id, $team->name);

			// Get and duplicate the team members
			$teamMembersTable->getTeamMembers($team);
			foreach($team->members as $member) {
				$teamMembersTable->add($member->member->id, $newTeam->id);
			}
		}

		return $id;

	}



}
