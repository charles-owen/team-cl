<?php
/** @file
 * Table class for the teamsubmission table. 
 */

namespace Team;

/** 
 * Table class for the teamsubmission table. 
 *
 * Handles submissions by a team. */
class TeamSubmissions extends \Assignments\SubmissionsBase {
	/** 
	 * Constructor
	 * @param $course Course this table is for 
	 */
	public function __construct(\Course $course) {
		parent::__construct($course, 'teamsubmission');
	}


	/** Handle a text submission
	 * @param $teamId ID for the team we are submitting for
	 * @param $user User who is submitting
	 * @param $submission The actual submission object
	 * @param $date Submission date as PHP time value
	 * @param $text The text to submit
	 * @return ID for the new submission or false if fail */
	public function submit_text($teamId, \User $user, \Assignments\Submission $submission,
								$date, $text) {

		$assignment = $submission->get_assignment();
		$pdo = $this->pdo();

		$sql = <<<SQL
insert into $this->tablename(teamid, userid, assigntag, submissiontag, date, text, type)
values(?, ?, ?, ?, ?, ?, ?)
SQL;

		$type = "text/html";

		$id = $user->get_id();
		$assignTag = $assignment->get_tag();
		$submissionTag = $submission->get_tag();
		$dateStr = Date("Y-m-d H:i:s", $date);

		$stmt = $pdo->prepare($sql);
		$stmt->bindParam(1, $teamId);
		$stmt->bindParam(2, $id);
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
	 * @param $teamId ID for the team we are submitting for
	 * @param $user User the submission is for
	 * @param $submission The actual submission object
	 * @param $date Submission date as PHP time value
	 * @param $file The path to the file to submit
	 * @param $name Name of the file we are submitting
	 * @param $type The file type
	 * @return ID for the submission or FALSE if failure
	 */
	public function submit_file($teamId, \User $user, \Assignments\Submission $submission,
								$date, $file, $name, $type) {

		$assignment = $submission->get_assignment();

		$fp = fopen($file, 'rb');
		if($fp === false) {
			return false;
		}

		$pdo = pdo_connect();

		$sql = <<<SQL
insert into $this->tablename(teamid, userid, assigntag, submissiontag, date, `binary`, name, type)
values(?, ?, ?, ?, ?, ?, ?, ?)
SQL;

		$stmt = $pdo->prepare($sql);
		$id = $user->get_id();
		$assign = $assignment->get_tag();
		$tag = $submission->get_tag();
		$dt = Date("Y-m-d H:i:s", $date);

		$stmt->bindParam(1, $teamId);
		$stmt->bindParam(2, $id);
		$stmt->bindParam(3, $assign);
		$stmt->bindParam(4, $tag);
		$stmt->bindParam(5, $dt);
		$stmt->bindParam(6, $fp, \PDO::PARAM_LOB);
		$stmt->bindParam(7, $name);
		$stmt->bindParam(8, $type);

		$result = $stmt->execute();

		fclose($fp);

		if(!$result) {
			return false;
		}

		return $pdo->lastInsertId();
	}

	/** Get a submission file
	 * @param $id ID for the submission
	 * @returns An array with these keys:
	 * 		type, binary, submissionuser, assignmenttag, submissiontag, name */
	public function get_file($id) {
		$pdo = pdo_connect();
		$sql = <<<SQL
select `binary`, type, userid, assigntag, submissiontag, name, teamid from $this->tablename
where id=?
SQL;

		$type = '';
		$userId = '';
		$bin = null;
		$assignTag = null;
		$submissionTag = null;
		$name = null;
		$teamId = null;

		$stmt = $pdo->prepare($sql);
		$stmt->execute(array($id));
		$stmt->bindColumn(1, $bin, \PDO::PARAM_LOB);
		$stmt->bindColumn(2, $type, \PDO::PARAM_STR);
		$stmt->bindColumn(3, $userId, \PDO::PARAM_INT);
		$stmt->bindColumn(4, $assignTag, \PDO::PARAM_STR);
		$stmt->bindColumn(5, $submissionTag, \PDO::PARAM_STR);
		$stmt->bindColumn(6, $name, \PDO::PARAM_STR);
		$stmt->bindColumn(7, $teamId, \PDO::PARAM_INT);
		$stmt->fetch(\PDO::FETCH_BOUND);

		return array('type' => $type,
			'binary' => $bin,
			'teamid' => $teamId,
			'userid' => $userId,
			'assigntag' => $assignTag,
			'submissiontag' => $submissionTag,
			'name' => $name);
	}

	/** Get a submission text
	 * @param $id ID for the submission
	 * @returns An array with these keys:
	 * 		text, userid, assigntag, submissiontag */
	public function get_text($id) {
		$pdo = pdo_connect();
		$sql = <<<SQL
select text, userid, assigntag, submissiontag, teamid from $this->tablename
where id=?
SQL;

		$teamId = null;
		$userId = '';
		$text = null;
		$assignTag = null;
		$submissionTag = null;

		$stmt = $pdo->prepare($sql);
		$stmt->execute(array($id));
		$stmt->bindColumn(1, $text, \PDO::PARAM_STR);
		$stmt->bindColumn(2, $userId, \PDO::PARAM_INT);
		$stmt->bindColumn(3, $assignTag, \PDO::PARAM_STR);
		$stmt->bindColumn(4, $submissionTag, \PDO::PARAM_STR);
		$stmt->bindColumn(5, $teamId, \PDO::PARAM_INT);
		$stmt->fetch(\PDO::FETCH_BOUND);

		return array('text' => $text,
			'teamid' => $teamId,
			'userid' => $userId,
			'assigntag' => $assignTag, 'submissiontag' => $submissionTag);
	}


	/**
	 * Get all submissions there are in the database
	 * @param Assignment $assignment Assignment we want the submissions for
	 * @param $submissionTag The tag for a specific submission within an assignment
	 * @param $teamId The id for the team we are getting submissions for
	 * @return array Array of submission records, empty if none. Each record with keys:
	 *     id, date, name, type
	 */
	public function get_submissions(\Assignments\Assignment $assignment,
									$submissionTag, $teamId) {
		$pdo = $this->pdo();

		$sql = <<<SQL
select id, date, name, type, userid from $this->tablename
where teamid=? and assigntag=? and submissiontag=?
order by date DESC
SQL;

		$stmt = $pdo->prepare($sql);
		$stmt->execute(array($teamId, $assignment->get_tag(), $submissionTag));

		$result = array();
		foreach($stmt as $row) {
			$result[] = array(
				'id' => $row['id'],
				'date' => strtotime($row['date']),
				'name' => $row['name'],
				'type' => $row['type'],
				'userid' => $row['userid']);
		}

		return $result;
	}

	/** Determine if a user has submitted at all
	 * @param Assignment $assignment Assignment we want the submissions for
	 * @param $submissionTag The tag for a specific submission
	 * @param $teamId The id for the team we are getting submissions for
	 * @return true if any submission exists
	 */
	public function has_submissions(\Assignments\Assignment $assignment,
									$submissionTag, $teamId) {
		$pdo = $this->pdo();

		$sql = <<<SQL
select id, date, name, type from $this->tablename
where teamid=? and assigntag=? and submissiontag=?
SQL;

		$stmt = $pdo->prepare($sql);
		$stmt->execute(array($teamId, $assignment->get_tag(), $submissionTag));
		$row = $stmt->fetch(\PDO::FETCH_ASSOC);
		$stmt->closeCursor();
		return $row !== false;
	}


	/** Function to create an SQL create table command for the submissions table */
	public function create_sql() {
		$query = <<<SQL
CREATE TABLE IF NOT EXISTS $this->tablename (
  id            int(11) NOT NULL AUTO_INCREMENT, 
  teamid        int(11) NOT NULL, 
  userid        int(10) NOT NULL, 
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
}
