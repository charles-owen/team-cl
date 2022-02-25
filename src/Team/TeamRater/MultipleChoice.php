<?php

namespace CL\Team\TeamRater;


/**
 * Multiple-choice item for team ratings
 */
class MultipleChoice extends Item {
    public function __construct($tag) {
        parent::__construct($tag);
    }

    public function AddChoice($code, $text) {
        $this->choices[] = [
            'code' => $code,
            'text' => $text
        ];
    }

    /**
     * Property get magic method
     * @param string $property Property name
     * @return mixed
     */
    public function __get($property) {
        switch($property) {

            default:
                return parent::__get($property);
        }
    }

    /**
     * Property set magic method
     * @param string $property Property name
     * @param mixed $value Value to set
     */
    public function __set($property, $value) {
        switch($property) {

            default:
                parent::__set($property, $value);
                break;
        }
    }

    /**
     * Return item data
     * @return array
     */
    public function data() {
        $data = parent::data();
        $data['type'] = 'multiple-choice';
        $data['choices'] = $this->choices;

        return $data;
    }



    private $choices = [];
}