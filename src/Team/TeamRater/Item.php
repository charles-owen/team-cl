<?php

namespace CL\Team\TeamRater;

use CL\Site\PropertyHelper;

/**
 * Base class for member rating items
 */
class Item
{
    public function __construct($tag) {
        $this->tag = $tag;
    }

    /**
     * Property get magic method
     * @param string $property Property name
     * @return mixed
     */
    public function __get($property) {
        switch($property) {
            case 'before':
                return $this->before;

            case 'after':
                return $this->after;

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
            case 'before':
                $this->before = $value;
                break;

            case 'text':
                $this->text = $value;
                break;

            case 'after':
                $this->after = $value;
                break;

            default:
                PropertyHelper::Error($property);
                break;
        }
    }

    /**
     * Return item data
     * @return array
     */
    public function data() {
        return ['tag' => $this->tag,
            'before' => $this->before,
            'text' => $this->text,
            'after' => $this->after];
    }

    private $before = '';
    private $text = '';
    private $after = '';
    private $tag;
}