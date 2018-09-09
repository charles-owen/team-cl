<?php
/**
 * @file
 * Representation of a single Teaming (collection of teams)
 */

namespace CL\Team;

use CL\Site\MetaData;

/**
 * Representation of a single Teaming (collection of teams)
 *
 * @cond
 * @property int $id
 * @property string $semester
 * @property string $sectionId
 * @endcond
 */
class Teaming {

	public function __construct(array $row = null) {
		if($row !== null) {
			$this->id = +$row['id'];
			$this->tag = $row['tag'];
			$this->name = $row['name'];
			$this->semester = $row['semester'];
			$this->sectionId = $row['section'];
			$this->public = $row['public'] == 1;
			$this->metaData = new MetaData(null, $row['metadata']);

		} else {
			$this->metaData = new MetaData();
		}
	}

	/**
	 * Property get magic method
	 *
	 * <b>Properties</b>
	 * Property | Type | Description
	 * -------- | ---- | -----------
	 *
	 * @param string $property Property name
	 * @return mixed
	 */
	public function __get($property) {
		switch($property) {
			case 'id':
				return $this->id;

			case 'tag':
				return $this->tag;

			case 'name':
				return $this->name;

			case 'semester':
				return $this->semester;

			case 'sectionId':
				return $this->sectionId;

			case 'public':
				return $this->public;

			case 'meta':
			case 'metaData':
				return $this->metaData;

			default:
				$trace = debug_backtrace();
				trigger_error(
					'Undefined property ' . $property .
					' in ' . $trace[0]['file'] .
					' on line ' . $trace[0]['line'],
					E_USER_NOTICE);
				return null;
		}
	}

	/**
	 * Property set magic method
	 *
	 * <b>Properties</b>
	 * Property | Type | Description
	 * -------- | ---- | -----------
	 *
	 * @param string $property Property name
	 * @param mixed $value Value to set
	 */
	public function __set($property, $value) {
		switch($property) {
			case 'id':
				$this->id = $value;
				break;

			case 'tag':
				$this->tag = $value;
				break;

			case 'name':
				$this->name = $value;
				break;

			case 'semester':
				$this->semester = $value;
				break;

			case 'sectionId':
				$this->sectionId = $value;
				break;

			case 'public':
				$this->public = $value;
				break;

			default:
				$trace = debug_backtrace();
				trigger_error(
					'Undefined property ' . $property .
					' in ' . $trace[0]['file'] .
					' on line ' . $trace[0]['line'],
					E_USER_NOTICE);
				break;
		}
	}

	public function data() {
		return [
			'id'=>$this->id,
			'tag'=>$this->tag,
			'name'=>$this->name,
			'semester'=>$this->semester,
			'section'=>$this->sectionId,
			'public'=>$this->public,
			'meta'=>$this->metaData->json()];
	}

	private $id=0;    // Internal team ID
	private $tag = '';   // Teaming tag
	private $name = '';  // Teaming name
	private $semester = null;  // Semester, like 'FS18'
	private $sectionId = null; // SectionID, like '003'
	private $public = true;    // Is this team visible to user
	private $metaData;  // Any team meta-data
}