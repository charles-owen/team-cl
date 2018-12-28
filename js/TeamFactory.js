import {Team} from "./Team";

export const TeamFactory = function() {
}

TeamFactory.create = function(site) {

	new Team(site);
}
