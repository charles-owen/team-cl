import {Member} from "course-cl";
import TeamingsEditorVue from './TeamingsEditor.vue';

/**
 * @file
 * Team system console components
 */

export let TeamConsole = function() {
}

TeamConsole.setup = function(Console) {
    Console.tables.add({
        title: 'Teams',
        order: 20,
        api: '/api/team/tables'
    });

	const page = {title: 'Main', route: '', order: 1};

	Console.components.addOption({
		atLeast: Member.TA,
		page: page,
		section: {title: 'Course', order: 5},
		title: 'Teams',
		order: 10,
		route: '/teams',
		routes: [
			{route: '/teams', component: TeamingsEditorVue}
		]
	});

}

