[![Build Status](https://travis-ci.org/mdb/madison.svg?branch=master)](https://travis-ci.org/mdb/madison)

# madison

A dirt simple Node.js module for working with US state names and abbreviations.

## Usage

```javascript
const madison = require('madison');

// Get a state's abbreviation
console.log(madison.getStateAbbrev('virginia')); // 'VA'
console.log(madison.getStateAbbrev('vIrgiNia')); // 'VA'
console.log(madison.getStateAbbrev('foo')); // undefined

// Get a state's name
console.log(madison.getStateName('va')); // 'Virginia'
console.log(madison.getStateName('vA')); // 'Virginia'
console.log(madison.getStateName('foo')); // undefined

// Get a JSON array of US states, each containing 'name' and 'abbr' properties:
madison.states;
```
