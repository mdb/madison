const states = require('./states.json');
const stateAbbrevs = {};
const stateNames = {};

states.forEach((state, i) => {
  stateAbbrevs[states[i].name.toLowerCase()] = states[i].abbr;
  stateNames[states[i].abbr.toLowerCase()] = states[i].name;
});

// helper
function setNameOrAbbrevVar(stateNameOrAbbrev) {
  return typeof stateNameOrAbbrev === 'string' ? stateNameOrAbbrev.toLowerCase() : undefined;
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
