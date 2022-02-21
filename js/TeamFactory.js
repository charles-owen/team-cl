import {TeamRater} from './TeamRater/TeamRater';

export const TeamFactory = function() {
}

TeamFactory.create = function(site) {

	site.ready(() => {

		let element;
		if( (element = document.getElementById('cl-team-rater')) !== null) {
			new TeamRater(site, element);
		}
	})
}
