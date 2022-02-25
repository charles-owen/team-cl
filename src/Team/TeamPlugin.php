<?php
/**
 * @file
 * Plugin class for the Team Subsystem
 */

namespace CL\Team;

use CL\Console\ConsoleView;
use CL\Site\Site;
use CL\Site\Router;
use CL\Site\System\Server;

/**
 * Plugin class for the Team Subsystem
 */
class TeamPlugin extends \CL\Site\Plugin {
	/**
	 * A tag that represents this plugin
	 * @return string A tag like 'course', 'users', etc.
	 */
	public function tag() {return 'team';}

	/**
	 * Return an array of tags indicating what plugins this one is dependent on.
	 * @return array of tags this plugin is dependent on
	 */
	public function depends() {return ['course'];}

	/**
	 * Install the plugin
	 * @param Site $site The Site configuration object
	 */
	public function install(Site $site) {
		$site->install('team', $this);
		$this->site = $site;
	}


	/**
	 * AssignmentCategory and Assignment are extended with
	 * the grading components.
	 * @param Site $site The site configuration component
	 */
	public function ensureTables(Site $site) {
		$maker = new TeamTables($site->db);
		$maker->create(false);
	}

	/**
	 * Amend existing object
	 * The Router is amended with routes for the login page
	 * and for the user API.
	 * @param $object Object to amend.
	 */
	public function amend($object) {
		if($object instanceof Router) {
			$router = $object;

			$router->addRoute(['team', 'submission', 'download', ':id'], function(Site $site, Server $server, array $params, array $properties, $time) {
				$view = new Submission\TeamSubmissionDownloadView($site, $server, $properties);
				return $view->whole();
			});

			$router->addRoute(['team', 'submission', 'view', ':id'], function(Site $site, Server $server, array $params, array $properties, $time) {
				$view = new Submission\TeamSubmissionImageView($site, $server, $properties);
				return $view->whole();
			});

			$router->addRoute(['team', 'submissions', ':assign', ':submission'], function(Site $site, Server $server, array $params, array $properties, $time) {
				$view = new Submission\TeamSubmissionsDownloadView($site, $server, $properties);
				return $view->whole();
			});

            $router->addRoute(['team', 'ratings', ':teaming'], function(Site $site, Server $server, array $params, array $properties, $time) {
                $view = new TeamRater\TeamRatingsView($site, $server, $properties);
                return $view->whole();
            });

			$router->addRoute(['api', 'team', '*'], function(Site $site, Server $server, array $params, array $properties, $time) {
				$resource = new TeamApi();
				return $resource->apiDispatch($site, $server, $params, $properties, $time);
			});

		} else if($object instanceof ConsoleView) {
			$object->addJS('team');
		}
	}

	private $site;
}