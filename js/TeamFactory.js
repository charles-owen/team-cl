/**
 * @file
 *
 */

import {Team} from "./Team";

export const TeamFactory = function() {
}

TeamFactory.create = function(site) {

	const quiz = new Team(site);

	// site.start( () => {
	// 	let element = document.querySelector('div.cl-quiz');
	// 	if(element !== null) {
	// 		quiz.start(element);
	// 	}
	// });

}
