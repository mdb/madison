[![Build Status](https://travis-ci.org/mdb/madison.svg?branch=master)](https://travis-ci.org/mdb/madison)

# madison

A dirt simple Node.js module for working with US state names and abbreviations.

## Installation

    npm install madison

## Getting Started

Require madison:

```js
var madison = require('madison');
```

Get a state's abbreviation via callback:

```js
madison.getStateAbbrev('virginia', function (abbrev) {
  console.log(abbrev); //'VA'
});
```

Get a state's abbreviation via return value:

```js
madison.getStateAbbrev('virginia'); //returns 'VA'
```

Get a state's name via callback:

```js
madison.getStateName('va', function (name) {
  console.log(name); //'Virginia'
});
```

Get a state's name via return value:

```js
madison.getStateName('va'); //returns 'Virginia'
```

Get a JSON array of US states, each containing 'name' and 'abbr' properties:

```js
madison.states;
```
