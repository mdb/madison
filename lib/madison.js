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
  callback(stateAbbrevs[setNameOrAbbrevVar(stateName)]);
};

exports.getStateAbbrevSync = function (stateName) {
  return stateAbbrevs[setNameOrAbbrevVar(stateName)];
};

exports.getStateName = function (stateAbbrev, callback) {
  callback(stateNames[setNameOrAbbrevVar(stateAbbrev)]);
};

exports.getStateNameSync = function (stateAbbrev) {
  return stateNames[setNameOrAbbrevVar(stateAbbrev)];
};
