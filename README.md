[![Build Status](https://secure.travis-ci.org/mdb/madison.png)](http://travis-ci.org/mdb/madison)

# madison

A dirt simple Node.js module for working with US state names and abbreviations.

## Installation
  
    npm install madison

## Getting Started

Require madison:
  
    var madison = require('madison');

Get a state's abbreviation asynchronously:

    madison.getStateAbbrev('virginia', function (abbrev) {
      console.log(abbrev); //'VA'
    });

Get a state's abbreviation synchronously:

    madison.getStateAbbrevSync('virginia'); //returns 'VA'

Get a state's name asynchronously:

    madison.getStateName('va', function (name) {
      console.log(name); //'Virginia'
    });

Get a state's name synchronously:

    madison.getStateNameSync('va'); //returns 'Virginia'

Get a JSON array of US states, each containing 'name' and 'abbr' properties:

    madison.states;
