/**
 * @file
 * The main Team entry point
 */

import {TeamFactory} from "./js/TeamFactory";
import {TeamConsole} from './js/Console/TeamConsole';

if(!Site.Team) {
	//
	// Create the team runtime component
	//
	Site.Team = TeamFactory.create(Site.site);

	//
	// Install the console components
	//
	if(Site.Console !== undefined) {
		TeamConsole.setup(Site.Console);
	}
}

