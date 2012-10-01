[![Build Status](https://secure.travis-ci.org/mdb/madison.png)](http://travis-ci.org/mdb/madison)

# madison

A dirt simple Node.js module for working with US state names and abbreviations.

## Installation
  
    npm install madison

## Getting Started

Require madison:
  
    var madison = require('madison');

Get a state's abbreviation:

    madison.getStateAbbrev('virginia');

Get a state's name:

    madison.getStateName('va');

Get a JSON array of US states, each containing 'name' and 'abbr' properties:

    madison.states;
