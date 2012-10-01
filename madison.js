var fs = require('fs');
var stateAbbrevs = {};
var stateNames = {};
var states = JSON.parse(fs.readFileSync('states.json'));

// build map
for (var i=0; i<states.length; i++) {
  stateAbbrevs[states[i].name.toLowerCase()] = states[i].abbr;
  stateNames[states[i].abbr.toLowerCase()] = states[i].name;
}

exports.states = states;

exports.getStateAbbrev = function (stateName) {
  var stateNameLower = stateName.toLowerCase();
  return stateAbbrevs[stateNameLower];
};

exports.getStateName = function (stateAbbrev) {
  var stateAbbr = stateAbbrev.toLowerCase();
  return stateNames[stateAbbr];
};
