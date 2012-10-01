var fs = require('fs');

exports.states = function () {
  return JSON.parse(fs.readFileSync('states.json'));
};

exports.getStateAbbrev = function (stateName) {
  var states = exports.states();
  var statesLength = exports.states().length;
  var i;
  var abbrev;
  
  for (i=0; i<statesLength; i++) {
    if(states[i].name.toLowerCase() === stateName.toLowerCase()) {
      abbrev = states[i].abbr;
      break;
    }
  }

  return abbrev;
};

exports.getStateName = function (stateAbbrev) {
  var states = exports.states();
  var statesLength = exports.states().length;
  var i;
  var name;
  
  for (i=0; i<statesLength; i++) {
    if(states[i].abbr.toLowerCase() === stateAbbrev.toLowerCase()) {
      name = states[i].name;
      break;
    }
  }

  return name;
};
