<?php
/**
 * @file
 * View class for view image content of submissions.
 */

namespace CL\Team\Submission;

use CL\Site\Site;
use CL\Course\View;
use CL\Site\System\Server;
use CL\Course\Member;
use CL\Team\TeamMembers;

/**
 * View class for view image content of submissions.
 */
class TeamSubmissionImageView extends View {
	/**
	 * SubmissionImageView constructor.
	 * @param Site $site The Site object
	 * @param Server $server The Server object
	 * @param array $vars Parameters passed to route ('id')
	 */
	public function __construct(Site $site, Server $server, $vars) {
		parent::__construct($site);

		$this->server = $server;
		$this->id = $vars['id'];
	}

	/**
	 * Present the whole file including header configuration.
	 * @return string Downloaded file
	 */
	public function whole() {
		$fs = new TeamSubmissions($this->site->db);
		$file = $fs->get_file($this->id);
		if($file === null) {
			return "<p>No such file</p>";
		}

		$this->file = $file;
		if(!$this->user->atLeast(Member::STAFF)) {
			// If not staff, only allow download of
			// submissions that are for this user's team
			$teamMembers = new TeamMembers($this->site->db);
			if(!$teamMembers->isMember($file['teamid'], $this->user->member->id)) {
				return "<p>Not authorized to download this submission</p>";
			}
		}

		$server = $this->server;
		$server->header('Content-Type: ' . $file['type']);
		return $file['binary'];
	}

	protected $server;      ///< Server object
	private $id;
	protected $file;        ///< File data for the submission
}