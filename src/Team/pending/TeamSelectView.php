<?php
/** @file
 * View class for selecting teams from a teaming.
 */
 
namespace Team;

/**
 * View class for selecting teams from a teaming.
 *
 * Useful for creating a simple page that lists all teams and members
 * with a link to some page for each team.
 */
class TeamSelectView extends \Manage\ManageView {
    /** Constructor
     *
     * Obtains the current status from the session
     * or selects the default if none indicated
     * @param \Course|Course $course Course object
     * @param \User $user Current User object
     * @param $request The $_REQUEST supervariable
     * @param $session The $_SESSION supervariable
     */
    public function __construct(\Course $course, \User $user, &$request, &$session) {
        parent::__construct($course, $user, $request, $session);
	}

	public function set_teaming($teamingTag) {
		// Determine the teaming
		$teamings = new \Team\Teamings($this->course);
		$this->teaming = $teamings->get_by_tag($this->get_section()->get_id(), $teamingTag);

		$this->set_title($this->teaming['name'] . ": Teams");
	}


	/** The id for the teaming we are viewing */
	public function teaming_id() {
		return $this->teaming['id'];
	}
	
	/** The name of the teaming we are viewing */
	public function teaming_name() {
		return $this->teaming['name'];
	}

	/**
	 * Get all of the teams.
	 * @return Array Array of arrays, one per team
	 */
	public function all_teams() {
		$teams = new \Team\Teams($this->course);
		return $teams->get($this->teaming_id());
	}

	public function all_teams_js() {
		$teams = $this->all_teams();
		$js = "[\n";
		$n = count($teams);
		for($i=0; $i<$n; $i++) {
			$team = $teams[$i];
			$name = $team['name'];
			$js .= '"' . $team['name'] . '"';
			if($i < $n-1) {
				$js .= ",\n";
			} else {
				$js .= "\n";
			}
		}
		$js .= "]";
		return $js;
	}

	/**
	 * Present the page
	 * @return string HTML
	 */
	public function present() {
		$id = $this->teaming_id();

		$html = <<<HTML
<div class="left">
<table class="small">
HTML;

		/*
		 * Get the users and convert them to an array indexed by ID
		 */
		$users = new \Users($this->course);
		$allusers = array();
		foreach($users->get_users($this->get_section(), "name") as $user) {
			// Students only!
			if($user->get_role() != \User::STUDENT) {
				continue;
			}

			$allusers[$user->get_id()] = $user;
		}

		$teams = new \Team\Teams($this->course);
		$teammembers = new \Team\TeamMembers($this->course);

		$allteams = $teams->get($this->teaming_id());

		/*
		 * Loop over all of the teams
		 */
		foreach($allteams as $team) {
			$teamid = $team['id'];
			$name = $team['name'];
			$teamingid = $this->teaming_id();

			$members = $teammembers->get_members($teamid);
			$email = $teammembers->email_link($name, $members, "small");

			$linkHTML = '';
			foreach($this->links as $link) {
				if($linkHTML !== '') {
					$linkHTML .= " ";
				}

				if($link['type'] == 'id') {
					$linkHTML .= '&nbsp;&nbsp;<a class="small" href="' . $link['link'] . '?team=' . $teamid . '">' . $link['name'] . '</a>';
				} else {
					$linkHTML .= '&nbsp;&nbsp;<a class="small" href="' . $link['link'] . '?team=' . $name . '">' . $link['name'] . '</a>';
				}

			}

			$html .= <<<HTML
<tr><th colspan="2">$name&nbsp;&nbsp;$email $linkHTML</th></tr>
HTML;

			/*
			 * Loop over team members (if any)
			 */
			if(count($members) == 0) {
				$html .= <<<HTML
<tr><td colspan="2">empty</td></tr>
HTML;
			} else {
				foreach($members as $user) {
					$id = $user->get_id();
					unset($allusers[$id]);
					$userid = $user->get_userid();
					$name = $user->get_name();
					$html .= <<<HTML
<tr><td>$userid</td><td>$name</td></tr>
</form>
HTML;
				}

			}

			// Gap between teams
			$html .= <<<HTML
<tr class="skip"><td colspan="2">&nbsp;</td></tr>
HTML;
		}

		$html .= '<tr><th colspan="3">Unassigned</th></tr>';

		foreach($allusers as $user) {
			$id = $user->get_id();
			$userid = $user->get_userid();
			$name = $user->get_name();
			$html .= <<<HTML
<tr><td>$userid</td><td>$name</td></tr>
</form>
HTML;
		}

		$html .= <<<HTML
</table></div>
HTML;

		return $html;
	}

	/**
	 * Construct an email link for the team
	 * @param $name Name of the team
	 * @param $members Members of the team (array)
	 * @return string HTML link
	 */
	private function email_link($name, $members) {
		$email = '';
		if(count($members) > 0) {
			foreach($members as $user) {
				if ($email !== '') {
					$email .= ";";
				}

				$email .= $user->get_email();
			}

			$subject = $this->course->get_name() . ' Team ' . $name;
			$email = '&nbsp;&nbsp;<a class="small" href="mailto:' . $email .
				'&subject=' . rawurlencode($subject) . '">email</a>';
		}

		return $email;
	}

	/**
	 * Add a link for the title bar
	 *
	 * Whatever is set here will have ?team=id set to the team ID appended to it.
	 * @param $linkName Name to display
	 * @param $link URL
	 */
	public function add_link($linkName, $link, $type="id") {
		$this->links[] = array("name" => $linkName, "link" => $link, "type" => $type);
	}

//	public function get_link() {
//		return $this->link;
//	}

	private $teaming;
	private $links = array();
	private $linkName = null;
	private $link = null;
}
