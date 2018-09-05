<?php
/** @file
 * View class for the teams page
 */
 
namespace Team;

/** View class for the teams page
*/
class TeamsView extends \Manage\ManageView {
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

		// Determine the teaming
		$teamingid = trim(strip_tags($request['teaming']));
		$teamings = new \Team\Teamings($course);
		$this->teaming = $teamings->get_by_id($teamingid);
		
		$this->semester = $this->teaming['semester'];
		$this->section = $course->get_section($this->semester, $this->teaming['section']);

		$this->set_title($this->teaming['name'] . ": Teams");

		$this->js = <<<JS
$(function() {
	// Create the dialog box and add the constraints
	dialog = new DialogBox("#dialog", "Add Team", "#message");
	dialog.add_constraint(new DialogConstraintLength("#name", "name", 1, 100));

	// New item button handler
	$( "#create-team" ).button().on( "click", function(event) {
		event.preventDefault();
		dialog.submitText = "Add Team";
		dialog.title = "Add Team";
		dialog.open();
    });

	// New item button handler
	$( "#distribute" ).button().on( "click", function(event) {
		//event.preventDefault();
    });

    	// New item button handler
	$( "#distribute-existing" ).button().on( "click", function(event) {
		//event.preventDefault();
    });

	$('html').on('click', function(){
		$('div.dropmenu ul').slideUp(100);
	});
});

// Open a menu item
function menuOpen(id) {
	$('#' + id).stop(true,true).slideToggle(100);
}

// Edit an item handler
function edit_team(event, id, name) {
	event.preventDefault();
	dialog.submitText = "Rename Team";
	dialog.title = "Rename Team";

	$("#name").val(name).select();
	$("#id").val(id);

	dialog.open();
	return false;
}

// Delete a team handler
function delete_team(event, id) {
	event.preventDefault();
	
	if(!window.confirm('Are you sure you want to delete this team?')) {
		return false;
	}
		
	$("#delete").val(id);
	$("#deleteform").submit();
	return false;
}


function submit_move(userid, teamid, toteam) {
	$("#move").val(userid);
	$("#from").val(teamid);
	$("#to").val(toteam);
	$("#moveform").submit();
}

JS;

		$css = <<<CSS
div.dropmenu {
	position: relative;
}

div.dropmenu ul {
	padding-top: 0;
	margin-top: 0;
	background-color: #e8e8e8;
	border: 1pt solid #cdcdcd;
	display: none;
	list-style: none;
	float: left;
	height: auto;
	background: white;
	padding-left: 0;
	position: absolute;
	left: 0;
	top: 100%;
	z-index: 100;
}
div.dropmenu li{
	display: block;
	width: 100%;
	height: auto;
}
div.dropmenu li a{
	display: block;
	float: left;
	width: 100%;
}
div.dropmenu li a:link {
	text-decoration: none;
}
div.dropmenu li a:visited {

}
div.dropmenu li a:hover {
	text-decoration: underline;
	background-color: #aaFFaa;
}

.ui-button .ui-button-text
{
   padding: 0.1em 0.5em !important;
   font-size: 1em !important;
}

button {
 	width: 15em;
}

table {
	margin-top: 0.5em;
}
CSS;

		$this->css = $css;
	}
	
	/** The id for the teaming we are viewing */
	public function teaming_id() {
		return $this->teaming['id'];
	}
	
	/** The name of the teaming we are viewing */
	public function teaming_name() {
		return $this->teaming['name'];
	}
	
	/** The semester for the teamings we are viewing */
	public function get_semester() {return $this->semester;}

	/**
	 * Present the page
	 * @return string HTML
	 */
	public function present() {
		$id = $this->teaming_id();

		$html = <<<HTML
<div id="dialog" title="New Team">
<p id="message">All form fields are required.</p>
<form action="post/teams-post.php" method="post">
<p>
  <input type="hidden" name="teamingid" value="$id">
  <input type="hidden" name="id" id="id" value="0">
    <fieldset>
      <label for="name">Name</label><br>
      <input type="text" name="name" id="name" value="">

      <!-- Allow form submission with keyboard without duplicating the dialog button -->
      <input type="submit" tabindex="-1" style="position:absolute; top:-1000px">
    </fieldset>
</p>
</form>
</div>

<form id="distribute-form" action="post/teams-post.php" method="post">
<fieldset>
<input type="hidden" name="teamingid" value="$id">
<p><button id="create-team">New Team</button>
<br>
<button id="distribute" name="distribute">Distribute Unassigned</button> to new teams size:
<select name="size">
<option value="2">2</option>
<option value="3" selected>3</option>
<option value="4">4</option>
<option value="5">5</option>
<option value="6">6</option>
<option value="7">7</option>
<option value="8">8</option>
<option value="9">9</option>
<option value="10">10</option>
</select><br>
<button id="distribute-existing" name="distribute-existing">Distribute to Existing Teams</button>
</p>
<p><a href="#bulk">Bulk upload of names</a></p>
</fieldset>
</form>

<form id="moveform" action="post/teams-post.php" method="post">
<input type="hidden" name="teamingid" value="$id">
<input type="hidden" name="move" id="move" value="">
<input type="hidden" name="from" id="from" value="">
<input type="hidden" name="to" id="to" value="">
</form>

<form id="deleteform" action="post/teams-post.php" method="post">
<input type="hidden" name="teamingid" value="$id">
<input type="hidden" name="delete" id="delete" value="">
</form>

<form>
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
			$delurl = "post/teams-post.php?delete=$teamid&teamingid=$teamingid";

			$members = $teammembers->get_members($teamid);
			$email = $this->email_link($name, $members);

			$html .= <<<HTML
<tr><th colspan="2">$name $email</th>
<th><a class="small" href="" onclick="return edit_team(event, $teamid, '$name')">rename</a>
<a class="small" href="" onclick="return delete_team(event, $teamid)">delete</a></th></tr>
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
					$movetohtml = $this->moveto($allteams, $id, $teamid);
					$html .= <<<HTML
<tr><td>$userid</td><td>$name</td><td>$movetohtml</td></tr>
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
			$movetohtml = $this->moveto($allteams, $id, 0, null);
			$html .= <<<HTML
<tr><td>$userid</td><td>$name</td><td>$movetohtml</td></tr>
</form>
HTML;
		}

		$html .= <<<HTML
</table></form>
HTML;

		$html .= $this->bulk_upload_form();
		return $html;
	}

	private function moveto($allteams, $userid, $fromid) {
		$id = "move-$userid";

		$html = <<<HTML
<div class="dropmenu">
<a href="javascript:menuOpen('$id');">move</a>
<ul id="$id">
HTML;

		foreach($allteams as $team) {
			$id = $team['id'];
			$name = $team['name'];
			$html .= "<li><a href=\"javascript:submit_move('$userid', $fromid, $id);\">$name</a></li>";
		}

		$html .= <<<HTML
<li><a href="javascript:submit_move('$userid', $fromid, 0);">Unassigned</a></li>
</ul></div>
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

	private function bulk_upload_form() {
		$teamingId = $this->teaming['id'];

		return <<<HTML
<h2 id="bulk">Bulk team name uploading</h2>
<p>This option accepts with one team name per line. </p>
<form class="full" id="fileform" name="fileform" method="post" action="post/bulk-upload-names.php" enctype="multipart/form-data">
<fieldset>
<input type="hidden" name="teaming" value="$teamingId">
<legend>Bulk Upload File</legend>

  File to upload: <input type="file" name="file"><br/>
  <br/>
  <input type="submit" value="Press"> to upload the file!
  </fieldset>
</form>
HTML;
	}

	private $teaming;	
	private $semester;
}
