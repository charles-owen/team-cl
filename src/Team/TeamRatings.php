<?php
/**
 * @file TeamRatings.php
 *
 * @author Charles B. Owen
 *
 * Table teamrating - stores ratings of team members by other team members
 */
namespace CL\Team;

/**
 * Table teamrating - stores ratings of team members by other team members
 */
class TeamRatings extends \CL\Tables\Table {
    /**
     * Constructor
     * @param \CL\Tables\Config $config The Database configuration object
     */
    public function __construct(\CL\Tables\Config $config) {
        parent::__construct($config, 'teamrating');
    }

    /**
     * Create an SQL create table command for the team table
     * @return string SQL
     */
    public function createSQL() {

        $query = <<<SQL
CREATE TABLE IF NOT EXISTS `$this->tablename` (
  teamid   int(11) NOT NULL,
  raterid  int(11) NOT NULL, 
  rateeid  int(11) NOT NULL, 
  metadata mediumtext NOT NULL, 
  PRIMARY KEY (raterid, 
  rateeid, 
  teamid));
SQL;

        return $query;
    }

    /**
     * Add a rating by a team member of another team member
     * @param int $teamId Team ID (from the team table)
     * @param int $raterId Rater member ID
     * @param int $rateeId Ratee member ID
     * @param array $metaData Meta data to store for this rating
     * @return void
     */
    public function add($teamId, $raterId, $rateeId, $metaData) {
        $sql = <<<SQL
replace into $this->tablename(teamid, raterid, rateeid, metadata)
values(?, ?, ?, ?)
SQL;

        $stmt = $this->pdo->prepare($sql);
        $exec = [$teamId, $raterId, $rateeId, json_encode($metaData)];
        $stmt->execute($exec);
    }

    /**
     * Get any ratings by a team member for a team
     * @param int $teamId Team ID (from the team table)
     * @param int $raterId Rater member ID
     * @return array
     */
    public function get($teamId, $raterId) {
        $sql = <<<SQL
select rateeid, metadata from $this->tablename
where teamid=? and raterid=?
SQL;

        $stmt = $this->pdo->prepare($sql);
        $exec = [$teamId, $raterId];
        //echo $this->sub_sql($sql, $exec);
        $stmt->execute($exec);

        $result = [];
        while(($row = $stmt->fetch(\PDO::FETCH_ASSOC))) {
            $result[] = [
                'rateeid'=>$row['rateeid'],
                'metadata'=>json_decode($row['metadata'], true)
            ];
        }

        return $result;
    }
}