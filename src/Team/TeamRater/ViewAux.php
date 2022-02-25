<?php
/**
 * @file
 * ViewAux class for rating team members
 */
namespace CL\Team\TeamRater;

use CL\Site\Site;
use CL\Site\View;
use CL\Team\Team;
use CL\Team\Teamings;
use CL\Team\TeamMembers;
use CL\Team\TeamRatings;
use CL\Course\Member;

/**
 * ViewAux class for rating team members
 */
class ViewAux extends \CL\Site\ViewAux {
    /** Constructor
     * @param Site $site The Site object
     * @param string $assignTag Assignment tag
     * @param string $teamingTag Teaming tag
     */
    public function __construct(Site $site, $assignTag, $teamingTag) {
        $this->site = $site;
        $this->assignTag = $assignTag;
        $this->teamingTag = $teamingTag;
    }

    protected function install(View $view)
    {
        parent::install($view);
        $view->addJS('team');
    }


    /**
     * @param Item $item Add a team rating item
     */
    public function add(Item $item) {
        $this->items[] = $item;
    }

    /**
     * Get the teams this user is a member of.
     * @param Boolean $public Optional boolean - if true display public teams only
     * @return array of team items.
     */
    public function get_teams($public = true) {
        /*
         * Get the teams this user is a member of
         */
        $teamings = new Teamings($this->site->db);
        if($this->teamingTag !== null) {
            $team = $teamings->getTeamByMember($this->view->user, $this->teamingTag, true);
            if($team !== null) {
                return [$team];
            }

            return [];
        }

        return [];
    }

    /**
     * Get the team this user is a member of.
     *
     * If the user is in more than one team (unlikely, only the first is returned.
     * @return Team object.
     */
    public function get_team() {
        $teams = $this->get_teams();
        if(count($teams) == 0) {
            return null;
        }

        return $teams[0];
    }

    /**
     * Present the rater API
     * @return string HTML
     */
    public function present() {
        $data = [
            'teaming' => $this->teamingTag,
            'assignment' => $this->assignTag,
            'staff' => $this->view->user->atLeast(Member::STAFF)
        ];

        $team = null;

        /*
         * Get the team this user is a member of
         */
        $teamings = new Teamings($this->site->db);
        if($this->teamingTag !== null) {
            $team = $teamings->getTeamByMember($this->view->user, $this->teamingTag, true);
            if($team !== null) {
                $teamMembers = new TeamMembers($this->site->db);
                $teamMembers->getTeamMembers($team);
            }
        }



        /**
         * Add to the data to send to JavaScript
         */
        if($team !== null) {
            $data['team'] = $team->data();

            /*
             * Get all ratings by this rater
             */
            $teamRatings = new TeamRatings($this->site->db);
            $ratings = $teamRatings->get($team->id, $this->view->user->member->id);
            $data['ratings'] = $ratings;
        }

        /**
         * Add the survey items
         */
        $items = [];

        foreach($this->items as $item) {
            $items[] = $item->data();
        }

        $data['items'] = $items;

        $json = htmlspecialchars(json_encode($data), ENT_NOQUOTES);
        // style="display:none"
        $html = '<div id="cl-team-rater" style="display:none">' . $json . '</div>';

        return $html;
    }

    private $site;
    private $assignTag;
    private $teamingTag;

    private $items = [];
}