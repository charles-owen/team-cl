<?php

namespace CL\Team\TeamRater;

use CL\Course\Member;
use CL\Site\Site;
use CL\Site\System\Server;
use CL\Team\Teamings;
use CL\Team\TeamRatings;
use CL\Team\Teams;
use CL\Team\TeamMembers;


/**
 *  View class for team ratings as a CSV file.
 */
class TeamRatingsView extends \CL\Course\View {
    /**
     * SubmissionImageView constructor.
     * @param Site $site The Site object
     * @param Server $server The Server object
     * @param array $vars Parameters passed to route ('id')
     */
    public function __construct(Site $site, Server $server, $vars) {
        parent::__construct($site);

        $this->server = $server;
        $this->teaming = $vars['teaming'];
    }

    /**
     * Present the whole file including header configuration.
     * @return string Downloaded file
     */
    public function whole() {
        $server = $this->server;

        if(!$this->user->atLeast(Member::STAFF)) {
            $server->redirect($this->site->root . '/cl/notauthorized');
            return '';
        }

        //
        // Find the teaming
        //
        $teamings = new Teamings($this->site->db);
        $member = $this->user->member;
        $teaming = $teamings->getByTag($member->semester, $member->sectionId, $this->teaming);
        if($teaming === null) {
            return "<p>Teaming does not exist</p>";
        }

        // Get all of the teams
        $teamsTable = new Teams($this->site->db);
        $teams = $teamsTable->getTeams($teaming->id);

        $teamMembers = new TeamMembers($this->site->db);
        $teamRatings = new TeamRatings($this->site->db);

        $filename = $teaming->tag . "-team-ratings.csv";
        $server->header('Content-Type: text/csv');
        $server->header("Content-Transfer-Encoding: Binary");
        $server->header("Content-disposition: attachment; filename=\"" . $filename . "\"");

        $rows = [];
        $labels = ['Rater ID', "Rater Name", "Ratee ID", "Ratee Name", 'Team'];
        $first = true;

        foreach($teams as $team) {
            $teamMembers->getTeamMembers($team);

            foreach($team->members as $rater) {
                // We have a team member, let's get the rating by this member
                $ratings = $teamRatings->get($team->id, $rater->member->id);

                foreach($ratings as $rating) {
                    $ratee = $team->getMember(+$rating['rateeid']);
                    if($ratee !== null) {
                        $row = [$rater->userId, $rater->name, $ratee->userId, $ratee->name, $team->name];
                        foreach($rating['metadata'] as $tag => $value) {
                            if($first) {
                                $labels[] = $tag;
                            }

                            $row[] = $value;
                        }

                        $rows[] = $row;
                        $first = false;
                    }
                }
            }
        }

        $fp = fopen('php://output', 'w');
        fputcsv($fp, $labels);

        foreach($rows as $row) {
            fputcsv($fp, $row);
        }

      //  $server = $this->server;
      //  $server->header('Content-Type: ' . $file['type']);

        return '';
    }


    protected $server;      // Server object
    private $teaming;
}