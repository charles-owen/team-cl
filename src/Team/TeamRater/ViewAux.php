<?php
/**
 * ViewAux class for rating team members
 */
namespace CL\Team\TeamRater;

use CL\Site\Site;

class ViewAux extends \CL\Site\ViewAux {
    /** Constructor
     * @param Site $site The Site object
     * @param string $teamingTag Optional teaming tag
     */
    public function __construct(Site $site, $teamingTag=null) {
        $this->site = $site;
        $this->user = $site->users->user;
        $this->teamingTag = $teamingTag;
    }


    private $site;
    private $user;
    private $teamingTag;
}