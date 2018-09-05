<?php
/** @file
 * @brief View class for teamings. 
 */
 
namespace Team;

/** @brief View class for teamings.
 *
 * Used by:
 * team/teamsing.php
 * Management functionality
 */
class TeamingsView extends \Manage\ManageView {
	/** @brief Constructor
	 *
	 * Obtains the current status from the session
	 * or selects the default if none indicated
	 * @param \Course $course The Course object
	 * @param \User $user The User object
	 * @param $request The $_REQUEST supervariable
	 * @param $session The $_SESSION supervariable
	 */
    public function __construct(\Course $course, \User $user, &$request, &$session) {
		parent::__construct($course, $user, $request, $session);

		$this->set_title("Teamings");
		$this->add_js("/team/team.js");

		$js = <<<JS
$(function() {
	// Create the dialog box and add the constraints
	dialog = new DialogBox("#dialog", "Add Teaming", "#message", 500, 400);
	dialog.add_constraint(new DialogConstraintLength("#tag", "tag", 1, 30));
	dialog.add_constraint(new DialogConstraintLength("#name", "name", 1, 100));

	// New item button handler
	$( "#create-teaming" ).button().on( "click", function() {
		dialog.submitText = "Add Teaming";
		dialog.title = "Add Teaming";
		dialog.open();
    });
});
JS;

		$this->add_js_content($js);
	}

	/** @brief Present all of the teamings as a table
	 * @returns HTML for the teamings */
	public function present() {
		$html = '';

		$sectionId = $this->section_id();

		$html .= <<<HTML
<div id="dialog" title="New Teaming">
<p id="message">All form fields are required.</p>
<form action="post/teamings-post.php" method="post">
<p>
  <input type="hidden" name="section" value="$sectionId">
  <input type="hidden" name="id" id="id" value="0">
</p>
<fieldset>
  <p><label for="tag">Tag</label><br>
  <input type="text" name="tag" id="tag" value=""></p>
  <p><label for="name">Name</label><br>
  <input type="text" name="name" id="name" value=""></p>
  <p><input type="checkbox" name="public" id="public" checked> <label for="name">Public</label></p>
  <!-- Allow form submission with keyboard without duplicating the dialog button -->
  <p><input type="submit" tabindex="-1" style="position:absolute; top:-1000px"></p>
</fieldset>
</form>
</div>
HTML;

		$teamings = new \Team\Teamings($this->course);
		$all = $teamings->get_by_section($this->section_id());
		if(count($all) > 0) {
			/*
             * Case were we do have teamings
             */
			$html .= <<<HTML
<table>
<tr><th>Tag</th></th><th>Teaming</th><th>&nbsp;</th><th>options</th></tr>
HTML;

			foreach ($all as $teaming) {
				$id = $teaming['id'];
				$tag = $teaming['tag'];
				$name = $teaming['name'];
				$pub = $teaming['public'] ? "true" : "false";
				$public = $teaming['public'] ?
					'<span class="smallgrn">public</span>' :
					'<span class="smallred">private</span>';
				$delUrl = "post/teamings-post.php?delete=$id";
				$dupUrl = "post/teamings-post.php?duplicate=$id";
				$teamsUrl = "teams.php?teaming=$id";
				$html .= <<<HTML
<tr id="t$id"><td><a href="$teamsUrl">$tag</a></td>
<td><a href="$teamsUrl">$name</a></td>
<td>$public</td>
<td><a href="javascript:;" onClick="return teamings.edit(event, $id, '$tag', '$name', $pub)">edit</a>
<a href="javascript:;"  onClick="return teamings.duplicate(event, $id)">duplicate</a>
<a href="javascript:;" onClick="return teamings.delete(event, $id)">delete</a>
</td></tr>

HTML;
			}

			$html .=  <<<HTML
</table>
<p class="center">Click on tag or teaming name to manage the teams for a teaming.</p>
HTML;
		} else {
	/*
	 * Case where no teamings exist
	 */
			$html .=  <<<HTML
<p class="center">There are currently no defined teamings</p>
HTML;
		}

		$ajaxroot = $this->course->get_ajaxroot();
		$html .= <<<HTML
<p><button id="create-teaming">New Teaming</button></p>

<script>
var teamings;
$(document).ready(function() {
	teamings = new Teamings('$ajaxroot');
});
</script>
HTML;

		return $html;
	}


}

?>
