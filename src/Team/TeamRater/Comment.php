<?php

namespace CL\Team\TeamRater;

/**
 * Team rating comment
 */
class Comment extends Item {

    public function __construct($tag) {
        parent::__construct($tag);
    }

    /**
     * Return item data
     * @return array
     */
    public function data() {
        $data = parent::data();
        $data['type'] = 'comment';

        return $data;
    }
}