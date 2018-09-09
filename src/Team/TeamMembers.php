<?php
/**
 * @file
 * Table class for storing team members. Rows represent a membership if a user in a team
 */

namespace CL\Team;

use CL\Course\Member;
use CL\Course\Members;
use CL\Users\User;

/**
 * Table class for storing team members. Rows represent a membership if a user in a team
 */
class TeamMembers  extends \CL\Tables\Table {
	/**
	 * Constructor
	 * @param \CL\Tables\Config $config The Database configuration object
	 */
	public function __construct(\CL\Tables\Config $config) {
		parent::__construct($config, 'teammember');
	}

	/**
	 * Create an SQL create table command for the team table
	 * @return string SQL
	 */
	public function createSQL() {

		$query = <<<SQL
CREATE TABLE IF NOT EXISTS `$this->tablename` (
  teamid   int(11) NOT NULL, 
  memberid int(11) NOT NULL, 
  PRIMARY KEY (teamid, 
  memberid), 
  INDEX (memberid));


SQL;

		return $query;
	}

	/**
	 * Delete all uses of a given team.
	 * @param $teamId
	 * @return bool
	 */
	public function delete($teamId) {
		$sql = <<<SQL
delete from $this->tablename
where teamid=?
SQL;

		$stmt = $this->pdo->prepare($sql);
		$exec = [$teamId];
		// echo $this->sub_sql($sql, $exec);
		return $stmt->execute($exec);
	}

	/**
	 * Add a member to a team.
	 * @param int $memberId Member we are moving
	 * @param int $teamId Team we are adding them to
	 * @return true if successful
	 */
	public function add($memberId, $teamId) {
		$sql = <<<SQL
insert into $this->tablename(teamid, memberid)
values(?, ?)
SQL;

		$stmt = $this->pdo->prepare($sql);
		$exec = [$teamId, $memberId];
		// echo $this->sub_sql($sql, $exec);
		return $stmt->execute($exec);
	}

	/**
	 * Get all team members and their team ID for a given teaming.
	 * @param Teaming $teaming Teaming we are loading
	 * @return array Array fo
	 */
	public function getMembers(Teaming $teaming) {
		$teamsTable = new Teams($this->config);

		$members = new Members($this->config);
		$sql = $members->memberUserJoinSQL('team_id', false, 'user_', 'member_');

		$sql .= <<<SQL
left join (
   select team.id as team_id, teammember.memberid as team_memberid
   from $this->tablename teammember
   join $teamsTable->tablename team
   on teammember.teamid=team.id
   where team.teamingid=?
) as validteam
on member.id=team_memberid
where member.role=?
order by user.name, user.id
SQL;

		$stmt = $this->pdo->prepare($sql);
		$exec = [$teaming->id, Member::STUDENT];
		// echo $this->sub_sql($sql, $exec);
		$stmt->execute($exec);

		$teams = [];
		while(($row = $stmt->fetch(\PDO::FETCH_ASSOC))) {
			$teamId = $row['team_id'] !== null ? +$row['team_id'] : 0;
			if(!isset($teams[$teamId])) {
				$teams[$teamId] = [];
			}

			$user = new User($row, 'user_');
			$user->member = new Member($row, 'member_');
			$teams[$teamId][] = $user;

		}

		return $teams;
	}
}
