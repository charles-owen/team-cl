<?php
/**
 * @file
 * View class for downloading submissions in bulk.
 */

namespace CL\Team\Submission;

use CL\Course\Submission\SubmissionText;
use CL\Site\Site;
use CL\Course\View;
use CL\Site\System\Server;
use CL\Course\Member;
use CL\Course\Members;
use CL\Team\Teamings;
use CL\Team\Teams;

/**
 * View class for downloading submissions in bulk.
 */
class TeamSubmissionsDownloadView extends View {
	/**
	 * SubmissionImageView constructor.
	 * @param Site $site The Site object
	 * @param Server $server The Server object
	 * @param array $properties Parameters passed to route ('id')
	 */
	public function __construct(Site $site, Server $server, $properties) {
		parent::__construct($site, ['at-least'=>Member::STAFF]);

        $this->server = $server;

        $this->setTitle('Bulk Download');

		// Get the assignment
		$assignTag = $properties['assign'];
		$this->assignment = $this->section->get_assignment($assignTag);
		if($this->assignment === null) {
			$server->redirect($site->root . '/cl/invalid');
			return;
		}

		$this->assignment->load();

		// Get the submission
		$submissionTag = $properties['submission'];
		$this->submission = $this->assignment->submissions->get($submissionTag);
		if($this->submission === null) {
			$server->redirect($site->root . '/cl/invalid');
			return;
		}

		// Deal with team submissions
		if($this->submission->teaming === null) {
			$server->redirect($site->root . '/cl/course/submissions/' . $this->assignment->tag . '/' . $this->submission->tag);
			return;
		}

		$teamings = new Teamings($site->db);
		$this->teaming = $teamings->getByTag($this->user->member->semester, $this->user->member->sectionId, $this->submission->teaming);

		$this->setTitle('Bulk download for ' . $this->assignment->name . '/' . $this->submission->name);
	}

	/**
	 * Present the whole file including header configuration.
	 * @return string Downloaded file
	 */
	public function whole() {
		$this->flush();

		$teamsTable = new Teams($this->site->db);
		$teams = $teamsTable->getTeams($this->teaming->id);

		/**
		 * Pull the submissions
		 */
        $from = null;
        $to = null;

        $get = $this->server->get;
        if(isset($get['fm'])) {
            $from = strip_tags(strtolower($get['fm']));
        }

        if(isset($get['to'])) {
            $to = strip_tags(strtolower($get['to']));
        }

		$submissions = new TeamSubmissions($this->site->db);

		$temp_dir = $this->get_temp_dir();
		$submissions_dir = $temp_dir . "/submissions";
		mkdir($submissions_dir);

		$cnt = 0;
		foreach ($teams as $team) {
            if(($from !== null && strtolower($team->name) < $from) || ($to !== null && strtolower($team->name) > $to)) {
                continue;
            }

           // echo "<p>" . $team->name . "</p>";

			$submits = $submissions->get_submissions($team->id, $this->assignment->tag, $this->submission->tag, true);
			if (count($submits) > 0) {
				$submit = $submits[0];
				if($this->submission instanceof SubmissionText) {
					$bin = $submissions->get_text($submit['id']);
					$name = 'submit.txt';
				} else {
					$file = $submissions->get_file($submit['id']);
					$name = $file['name'];
					$bin = $file['binary'];
				}

				$ext = pathinfo($name, PATHINFO_EXTENSION);
				$name = $team->name . '.' . $ext;
				file_put_contents($submissions_dir . "/" . $name, $bin);

				$cnt++;

				if($this->limit > 0 && $cnt >= $this->limit) {
					break;
				}
			}

		}

		error_reporting(E_ERROR | E_PARSE);
		if (strtoupper(substr(PHP_OS, 0, 3)) === 'WIN') {
			$cmd = "cd $temp_dir & zip -r submissions submissions";
		} else {
			$cmd = "cd $temp_dir; zip -r submissions submissions";
		}

		exec($cmd);

		$fp = fopen($temp_dir . "/submissions.zip", 'rb');

		header( "Content-Type: application/zip" );
		header( "Content-Disposition: attachment;filename=submissions.zip");
		fpassthru($fp);

		$this->rrmdir($temp_dir);
		return '';
	}

	/**
	 * Get a temporary directory that we can use to create the .zip file we are downloading
	 *
	 * This will create a temp directory the first time it is called
	 * and return that subsequently.
	 * @return string Path to temporary directory
	 */
	public function get_temp_dir($name="bulk") {
		$tmp = sys_get_temp_dir();
		$tmp .= DIRECTORY_SEPARATOR;

		do {
			$path = $tmp . $name . mt_rand(0, 999999999);
		} while(!mkdir($path, 0700));

		return $path;
	}

	/**
	 * Safely remove a directory, with recursion.
	 * @param string $src Directory to remove
	 */
	private function rrmdir($src) {
		$dir = opendir($src);
		while(false !== ( $file = readdir($dir)) ) {
			if (( $file != '.' ) && ( $file != '..' )) {
				$full = $src . '/' . $file;
				if ( is_dir($full) ) {
					$this->rrmdir($full);
				}
				else {
					unlink($full);
				}
			}
		}
		closedir($dir);
		@rmdir($src);
	}

	private $assignment;
	private $submission;
	private $teaming;
    private $server;

	// Optional limit on how number of students to download
	// If set to zero, there is no limit
	private $limit = 0;
}