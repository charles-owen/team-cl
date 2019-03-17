<?php
/**
 * @file
 * Table class for the team submissions table.
 */

namespace CL\Team\Submission;

use CL\Course\Member;
use CL\Course\Members;
use CL\Users\User;
use CL\Course\Submission\SubmissionsBase;

/**
 * Table class for the team submissions table.
 */
class TeamSubmissions  extends SubmissionsBase {

	/**
	 * Constructor
	 * @param \CL\Tables\Config $config The Database configuration object
	 */
	public function __construct(\CL\Tables\Config $config) {
		parent::__construct($config, 'teamsubmission');
	}

	/**
	 * Create an SQL create table command for the team table
	 * @return string SQL
	 */
	public function createSQL() {

		$query = <<<SQL
CREATE TABLE IF NOT EXISTS `$this->tablename` (
  id            int(11) NOT NULL AUTO_INCREMENT, 
  teamid        int(11) NOT NULL, 
  memberid      int(11) NOT NULL, 
  assigntag     varchar(30), 
  submissiontag varchar(30), 
  `date`        datetime NOT NULL, 
  name          varchar(500), 
  `binary`      longblob, 
  text          mediumtext, 
  type          varchar(30), 
  analysis      mediumtext, 
  PRIMARY KEY (id), 
  INDEX (teamid));

SQL;

		return $query;
	}

	/**
	 * Handle a text submission
	 * @param int $teamId The team this is for
	 * @param User $user User the submission is for
	 * @param string $assignTag Assignment tag
	 * @param string $submissionTag Submission tag
	 * @param int $date Submission date as PHP time value
	 * @param string $text The text to submit
	 * @param string $type MIME type for the submission (default: 'text/plain')
	 * @return int ID for the new submission or false if fail
	 */
	public function submit_text($teamId, User $user, $assignTag, $submissionTag,
	                            $date, $text, $type="text/plain") {
		$pdo = $this->pdo;

		$sql = <<<SQL
insert into $this->tablename(teamid, memberid, assigntag, submissiontag, date, text, type)
values(?, ?, ?, ?, ?, ?, ?)
SQL;

		$memberId = $user->member->id;
		$dateStr = $this->timeStr($date);

		$stmt = $pdo->prepare($sql);
		$stmt->bindParam(1, $teamId);
		$stmt->bindParam(2, $memberId);
		$stmt->bindParam(3, $assignTag);
		$stmt->bindParam(4, $submissionTag);
		$stmt->bindParam(5, $dateStr);
		$stmt->bindParam(6, $text);
		$stmt->bindParam(7, $type);

		if(!$stmt->execute()) {
			return false;
		}

		return $pdo->lastInsertId();
	}

	/**
	 * Handle a file submission
	 * @param int $teamId Team this submission is for
	 * @param User $user User the submission is for
	 * @param string $assignTag Assignment tag
	 * @param string $submissionTag Submission tag
	 * @param int $date Submission date as PHP time value
	 * @param string $file The path to the file to submit
	 * @param string $name Name of the file we are submitting
	 * @param string $type The file MIME type
	 * @return mixed ID for the submission or FALSE if failure
	 */
	public function submit_file($teamId, User $user, $assignTag, $submissionTag, $date,
	                            $file, $name, $type) {

		$fp = fopen($file, 'rb');
		if($fp === false) {
			return false;
		}

		$pdo = $this->pdo;

		$sql = <<<SQL
insert into $this->tablename(teamid, memberid, assigntag, submissiontag, date, `binary`, name, type)
values(?, ?, ?, ?, ?, ?, ?, ?)
SQL;

		$memberId = $user->member->id;
		$dateStr = $this->timeStr($date);

		$stmt = $pdo->prepare($sql);
		$stmt->bindParam(1, $teamId);
		$stmt->bindParam(2, $memberId);
		$stmt->bindParam(3, $assignTag);
		$stmt->bindParam(4, $submissionTag);
		$stmt->bindParam(5, $dateStr);
		$stmt->bindParam(6, $fp, \PDO::PARAM_LOB);
		$stmt->bindParam(7, $name);
		$stmt->bindParam(8, $type);

		$result = false;
		try {
			$result = @$stmt->execute();
		} catch(\PDOException $ex) {
			return false;
		}

		fclose($fp);

		if(!$result) {
			return false;
		}

		return $pdo->lastInsertId();
	}



	/** Get a submission file
	 * @param int $id ID for the submission
	 * @return array with these keys:
	 * 		type, binary, memberid, assigntag, submissiontag, name
	 */
	public function get_file($id) {
		$pdo = $this->pdo;

		$sql = <<<SQL
select `binary`, type, memberid, assigntag, submissiontag, name, date, teamid from $this->tablename
where id=?
SQL;

		$type = '';
		$submissionMember = '';
		$bin = null;
		$assigntag = null;
		$submissiontag = null;
		$name = null;
		$date = 0;
		$teamId = 0;

		$stmt = $pdo->prepare($sql);
		$stmt->execute(array($id));
		$stmt->bindColumn(1, $bin, \PDO::PARAM_LOB);
		$stmt->bindColumn(2, $type, \PDO::PARAM_STR);
		$stmt->bindColumn(3, $submissionMember, \PDO::PARAM_STR);
		$stmt->bindColumn(4, $assigntag, \PDO::PARAM_STR);
		$stmt->bindColumn(5, $submissiontag, \PDO::PARAM_STR);
		$stmt->bindColumn(6, $name, \PDO::PARAM_STR);
		$stmt->bindColumn(7, $date, \PDO::PARAM_STR);
		$stmt->bindColumn(8, $teamId, \PDO::PARAM_STR);
		$stmt->fetch(\PDO::FETCH_BOUND);

		return array('type' => $type,
			'binary' => $bin,
			'teamid' => +$teamId,
			'memberid' => $submissionMember,
			'assigntag' => $assigntag,
			'submissiontag' => $submissiontag,
			'name' => $name,
			'date'=>strtotime($date));
	}

	/** Get a submission text
	 * @param int $id ID for the submission
	 * @return array with these keys:
	 * 		text, memberid, assigntag, submissiontag */
	public function get_text($id) {
		$pdo = $this->pdo();

		$sql = <<<SQL
select text, memberid, assigntag, submissiontag, type, date, teamid from $this->tablename
where id=?
SQL;

		$submissionuser = '';
		$text = null;
		$assigntag = null;
		$submissiontag = null;
		$type = '';
		$date = 0;
		$teamId = 0;

		$stmt = $pdo->prepare($sql);
		$stmt->execute(array($id));
		$stmt->bindColumn(1, $text, \PDO::PARAM_STR);
		$stmt->bindColumn(2, $submissionuser, \PDO::PARAM_INT);
		$stmt->bindColumn(3, $assigntag, \PDO::PARAM_STR);
		$stmt->bindColumn(4, $submissiontag, \PDO::PARAM_STR);
		$stmt->bindColumn(5, $type, \PDO::PARAM_STR);
		$stmt->bindColumn(6, $date, \PDO::PARAM_STR);
		$stmt->bindColumn(7, $teamId, \PDO::PARAM_INT);
		$stmt->fetch(\PDO::FETCH_BOUND);

		return array('text' => $text,
			'teamid'=>+$teamId,
			'type'=>$type,
			'memberid' => +$submissionuser,
			'assigntag' => $assigntag, 'submissiontag' => $submissiontag, 'date'=>strtotime($date));
	}


	/** Get all submissions there are in the database
	 * @param int $teamId Team ID for the team we want the submissions for
	 * @param string $assignTag Assignment we want the submissions for
	 * @param string $submissionTag The tag for a specific submission within an assignment
	 * @param bool $mostRecentOnly True if we only care about the most recent submission
	 * @return array Array of submission records, empty if none. Each record with keys:
	 *     id, date, name, type
	 */
	public function get_submissions($teamId, $assignTag, $submissionTag, $mostRecentOnly = false) {
		$pdo = $this->pdo;

		$members = new Members($this->config);
		$sql = $members->memberUserJoinSQL(
			'teamsubmission.id as id, teamsubmission.date as date, teamsubmission.name as name, teamsubmission.type as type',
			false, 'user_', 'member_');

		$sql .= <<<SQL
join $this->tablename teamsubmission
on member.id = teamsubmission.memberid
where teamsubmission.teamid=? and teamsubmission.assigntag=? and teamsubmission.submissiontag=?
order by date DESC
SQL;

		if($mostRecentOnly) {
			$sql .= "\nlimit 1";
		}

		$stmt = $pdo->prepare($sql);
		$exec = [$teamId, $assignTag, $submissionTag];
		// echo "<pre>\n" . $this->sub_sql($sql, $exec) . "</pre>";
		$stmt->execute($exec);

		$result = array();
		foreach($stmt as $row) {
			$user = new User($row, 'user_');
			$user->member = new Member($row, 'member_');

			$result[] = array(
				'id' => $row['id'],
				'date' => strtotime($row['date']),
				'name' => $row['name'],
				'type' => $row['type'],
				'by' => $user->displayName
				);
		}

		return $result;
	}

	/** Get all submissions there are in the database
	 * @param int $teamId Team ID for the team we want the submissions for
	 * @param string $assignTag Assignment we want the submissions for
	 * @return array Array of submission records, empty if none. Each record with keys:
	 *     id, date, name, type
	 */
	public function getAssignmentSubmissions($teamId, $assignTag) {
		$pdo = $this->pdo();

		$sql = <<<SQL
select id, date, name, type, submissiontag, memberid from $this->tablename
where teamid=? and assigntag=?
order by submissiontag, date DESC
SQL;


		$stmt = $pdo->prepare($sql);
		$exec = [$teamId, $assignTag];
		// echo "<pre>\n" . $this->sub_sql($sql, $exec) . "</pre>";
		$stmt->execute($exec);

		$result = array();
		foreach($stmt as $row) {
			if(!isset($result[$row['submissiontag']])) {
				$result[$row['submissiontag']] = [];
			}

			$result[$row['submissiontag']][] = array(
				'id' => $row['id'],
				'date' => strtotime($row['date']),
				'name' => $row['name'],
				'type' => $row['type'],
				'memberid'=>$row['memberid']);
		}

		return $result;
	}

}