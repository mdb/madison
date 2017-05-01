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

var getStateAbbrev = exports.getStateAbbrev = function (stateName, callback) {
  var stateNameLower = setNameOrAbbrevVar(stateName);
  if (typeof arguments[1] == 'function') {
    return callback(stateAbbrevs[stateNameLower]);
  }
  return stateAbbrevs[stateNameLower];
};

exports.getStateAbbrevSync = getStateAbbrev;

var getStateName = exports.getStateName = function (stateAbbrev, callback) {
  var stateAbbr = setNameOrAbbrevVar(stateAbbrev);
  if (typeof arguments[1] == 'function') {
    return callback(stateNames[stateAbbr]);
  }
  return stateNames[stateAbbr];
};
exports.getStateNameSync = getStateName;
