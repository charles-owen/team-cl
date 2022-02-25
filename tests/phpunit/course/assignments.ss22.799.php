<?php
/** @file
 * Course Assigment declarations
 */

use CL\Course\Assignments;

return function(Assignments $assignments) {
	/*
	 * Course grading categories and assignments
	 */

	$designs = $assignments->add_category("designs", "Design Assignments", 15);
	$steps = $assignments->add_category("steps", "Step Assignments", 30);
	$projects = $assignments->add_category("projects", "Projects", 35);
	$exams = $assignments->add_category("exams", "Exams", 20);

	$step1 = $steps->add_assignment('step1', 'Step 1');
	$step1->set_release('8/28/2018 1:00am', '9/6/2018 11:55pm');
	$step1->submissions->add_text('text', 'Text');
	$step1->submissions->add_program('program', 'Program');

	$step2 = $steps->add_assignment('step2', 'Step 2');
	$step2->set_release('8/28/2018 1:00am', '9/15/2018 11:55pm');
	$step2->submissions->add_program('program', 'Program');

	//
	// Project 1
	//
	$project = $projects->add_assignment("project1", "Project 1", 40);
//	$project->set_due('10/21/2017 11:55pm', true);
//	$project->set_release('-30 days');

    $rater = $projects->add_assignment("project1r1", "Project 1 Member Rating #1");
    $rater->hide = true;
    $rater->set_release('2/1/2022', '2/25/2022 11:55pm');
};
