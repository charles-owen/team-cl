<?php
/**
 * Created by PhpStorm.
 * User: cbowen
 * Date: 9/21/2016
 * Time: 7:09 PM
 */

namespace Team;


class TeamBulkNamesController extends \Controller {

	public function __construct(\Course $course, \User $user) {
		parent::__construct($course, $user);
	}
	
	public function post($post, $files) {


		/*
		 * Ensure the file exists
		 */
		if ($files["file"]["error"] > 0 || $files["file"]["tmp_name"] == "") {
			// Error return
			return $this->error("Error during upload<br/>No bulk data file submitted!");
		}

		$fileName = $files["file"]["tmp_name"];

		if(!isset($post['teaming'])){
			unlink($fileName);
			return $this->error("Invalid!");
		}

		$teamingId = trim(strip_tags($post['teaming']));

		$teamings = new \Team\Teamings($this->course);
		$this->teaming = $teamings->get_by_id($teamingId);
		if($this->teaming === null) {
			unlink($fileName);
			return $this->error("Invalid teaming");
		}

		$teamsTable = new \Team\Teams($this->course);
		$teams = $teamsTable->get($this->teaming['id']);
		$numTeams = count($teams);

		$ndx = 0;
		$handle = fopen($fileName, "r");
		if ($handle) {
			while (($line = fgets($handle)) !== false && $ndx < $numTeams) {
				$line = trim($line);
				if(strlen($line) == 0) {
					continue;
				}

				$team = $teams[$ndx];
				$teamsTable->update($team['id'], $line);
				$ndx++;
			}

			fclose($handle);
		} else {
			unlink($fileName);
			return $this->error("Unable to open team names file");
		}

		unlink($fileName);
		header("location: ../teams.php?teaming=" . $this->teaming['id']);
		return '';
	}

	private function error($msg) {
		return <<<HTML
<p>$msg</p>
HTML;
	}


	private $teaming;
}