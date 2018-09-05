/**
 * @file
 * The main Team entry point
 */

import {TeamFactory} from "./js/TeamFactory";
import {TeamConsole} from './js/Console/TeamConsole';

//
// Create the team runtime component
//
TeamFactory.create(Site.Site);

//
// Install the console components
//

if(Site.Site.console !== undefined) {
	TeamConsole.setup(Site.Site.console);
}
