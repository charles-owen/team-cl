<?php
/**
 * @file
 * API Resource for /api/team
 */
namespace CL\Team;

use CL\Site\Site;
use CL\Site\System\Server;
use CL\Site\Api\JsonAPI;
use CL\Site\Api\APIException;
use CL\Users\User;
use CL\Course\Members;
use CL\Course\Member;

/**
 * API Resource for /api/team
 */
class TeamApi extends \CL\Users\Api\Resource {

	/**
	 * QuizApi constructor.
	 */
	public function __construct() {
		parent::__construct();
	}

	/**
	 * Dispatch API calls.
	 * @param Site $site Site object
	 * @param Server $server Server object
	 * @param array $params Parameters passed by the router (after /api/quiz)
	 * @param array $properties Properties passed by the router (:id values)
	 * @param int $time Current time
	 * @return JsonAPI with response filled in
	 * @throws APIException
	 */
	public function dispatch(Site $site, Server $server, array $params, array $properties, $time) {
		$user = $this->isUser($site, User::USER);

		switch($params[0]) {
			// /api/team/teaming
			case 'teamings':
				return $this->teamings($site, $user, $server, $params, $time);

			case 'tables':
				return $this->tables($site, $server, new TeamTables($site->db));
		}

		throw new APIException("Invalid API Path", APIException::INVALID_API_PATH);
	}

	private function teamings(Site $site, User $user, Server $server, array $params, $time) {
		$teamings = new Teamings($site->db);

		if($server->requestMethod === 'POST') {
			$user = $this->isUser($site, Member::TA);

			$teaming = new Teaming();
			$post = $server->post;
			$this->ensure($post, ['tag', 'name', 'public']);
			$teaming->tag = strip_tags($post['tag']);
			$teaming->name = strip_tags($post['name']);
			$teaming->public = $post['public'] === true;
			$teaming->semester = $user->member->semester;
			$teaming->sectionId = $user->member->sectionId;

			$teamings->add($teaming);
		}

		$all = $teamings->getBySection($user->member->semester, $user->member->sectionId);
		$data = [];
		foreach($all as $teaming) {
			$data[] = $teaming->data();
		}

		$json = new JsonAPI();
		$json->addData('teamings', 0, $data);
		return $json;
	}
}