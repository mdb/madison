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

module.exports = {
  states: states,

  getStateAbbrev: (stateName, callback) => {
    callback(stateAbbrevs[setNameOrAbbrevVar(stateName)]);
  },

  getStateAbbrevSync: (stateName) => {
    return stateAbbrevs[setNameOrAbbrevVar(stateName)];
  },

  getStateName: (stateAbbrev, callback) => {
    callback(stateNames[setNameOrAbbrevVar(stateAbbrev)]);
  },

  getStateNameSync: (stateAbbrev) => {
    return stateNames[setNameOrAbbrevVar(stateAbbrev)];
  }
};
