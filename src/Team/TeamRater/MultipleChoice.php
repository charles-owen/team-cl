<?php

namespace CL\Team\TeamRater;

use CL\Site\PropertyHelper;

/**
 * Multiple-choice item
 */
class MultipleChoice extends Item {
    public function __construct($tag) {
        $this->tag = $tag;
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
            case 'text':
                return $this->text;

            default:
                return PropertyHelper::Error($property);
        }
    }

    /**
     * Property set magic method
     * @param string $property Property name
     * @param mixed $value Value to set
     */
    public function __set($property, $value) {
        switch($property) {
            case 'text':
                $this->text = $value;
                break;

            default:
                PropertyHelper::Error($property);
                break;
        }
    }

    private $tag;
    private $text = '';
    private $choices = [];
}