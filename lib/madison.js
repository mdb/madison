const states = require('./states.json');
const stateAbbrevs = {};
const stateNames = {};

states.forEach((state, i) => {
  stateAbbrevs[states[i].name.toLowerCase()] = states[i].abbr;
  stateNames[states[i].abbr.toLowerCase()] = states[i].name;
});

// helper
function nameOrAbbrevKey(stateNameOrAbbrev) {
  return typeof stateNameOrAbbrev === 'string' ? stateNameOrAbbrev.toLowerCase() : undefined;
}

module.exports = {
  states: states,

  getStateAbbrev: (stateName, callback) => {
    callback(stateAbbrevs[nameOrAbbrevKey(stateName)]);
  },

  getStateAbbrevSync: (stateName) => {
    return stateAbbrevs[nameOrAbbrevKey(stateName)];
  },

  getStateName: (stateAbbrev, callback) => {
    callback(stateNames[nameOrAbbrevKey(stateAbbrev)]);
  },

  getStateNameSync: (stateAbbrev) => {
    return stateNames[nameOrAbbrevKey(stateAbbrev)];
  }
};
