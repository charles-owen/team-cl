<?php
/**
 * @file
 * View class for downloading the content of submissions.
 */

namespace CL\Team\Submission;

use CL\Site\Site;
use CL\Site\System\Server;

/**
 * View class for downloading the content of submissions.
 */
class TeamSubmissionDownloadView extends TeamSubmissionImageView {
	/**
	 * SubmissionDownloadView constructor.
	 * @param Site $site The Site object
	 * @param Server $server The Server object
	 * @param array $vars Parameters passed to route ('id')
	 */
	public function __construct(Site $site, Server $server, $vars) {
		parent::__construct($site, $server, $vars);
	}

	/**
	 * Present the whole file including header configuration.
	 * Only difference from images is adding additional content to the header.
	 * @return string Downloaded file
	 */
	public function whole() {
		$binary = parent::whole();

		$server = $this->server;
		$server->header("Content-Transfer-Encoding: Binary");
		$server->header("Content-disposition: attachment; filename=\"" . $this->file['name'] . "\"");
		return $binary;
	}

}