/**
 * @file
 * The main Team entry point
 */

import {TeamFactory} from "./js/TeamFactory";
import {TeamConsole} from './js/Console/TeamConsole';

//
// Create the team runtime component
//
TeamFactory.create(Site.site);

//
// Install the console components
//

if(Site.site.console !== undefined) {
	TeamConsole.setup(Site.site.console);
}
