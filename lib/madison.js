var states = require('./states.json');
var stateAbbrevs = {};
var stateNames = {};

// helper
function setNameOrAbbrevVar(stateNameOrAbbrev) {
  var nameOrAbbrev = typeof stateNameOrAbbrev === 'string' ? stateNameOrAbbrev.toLowerCase() : undefined;
  return nameOrAbbrev;
}

// build map
for (var i=0; i<states.length; i++) {
  stateAbbrevs[states[i].name.toLowerCase()] = states[i].abbr;
  stateNames[states[i].abbr.toLowerCase()] = states[i].name;
}

// exports
exports.states = states;

exports.getStateAbbrev = function (stateName, callback) {
  var stateNameLower = setNameOrAbbrevVar(stateName);
  callback(stateAbbrevs[stateNameLower]);
};

exports.getStateAbbrevSync = function (stateName) {
  var stateNameLower = setNameOrAbbrevVar(stateName);
  return stateAbbrevs[stateNameLower];
};

exports.getStateName = function (stateAbbrev, callback) {
  var stateAbbr = setNameOrAbbrevVar(stateAbbrev);
  callback(stateNames[stateAbbr]);
};

exports.getStateNameSync = function (stateAbbrev) {
  var stateAbbr = setNameOrAbbrevVar(stateAbbrev);
  return stateNames[stateAbbr];
};
