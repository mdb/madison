const assert = require('assert');
const madison = require('../lib/madison.js');

describe('madison', () => {
  describe('#getStateAbbrev', () => {
    it('returns a state abbreviation when it is passed a state name', () => {
      madison.getStateAbbrev('virginia', function (abbrev) {
        assert(abbrev === 'VA');
      });

      madison.getStateAbbrev('west virginia', function (abbrev) {
        assert(abbrev === 'WV');
      });

      madison.getStateAbbrev('California', function (abbrev) {
        assert(abbrev === 'CA');
      });
    });

    it('returns a state abbreviation when it is passed a state name, independent of case', () => {
      madison.getStateAbbrev('Virginia', function (abbrev) {
        assert(abbrev === 'VA');
      });

      madison.getStateAbbrev('West virginia', function (abbrev) {
        assert(abbrev === 'WV');
      });

      madison.getStateAbbrev('californIA', function (abbrev) {
        assert(abbrev === 'CA');
      });
    });

    it('returns undefined in the event that it is not passed a valid state name', () => {
      madison.getStateAbbrev('Some Fake State', function (abbrev) {
        assert(abbrev === undefined);
      });

      madison.getStateAbbrev('Another Fake State', function (abbrev) {
        assert(abbrev === undefined);
      });
    });

    it('returns undefined in the event that it is passed a non-string value', () => {
      madison.getStateAbbrev(undefined, function(abbrev) {
        assert(abbrev === undefined);
      });

      madison.getStateAbbrev(false, function (abbrev) {
        assert(abbrev === undefined);
      });

      madison.getStateAbbrev(333, function (abbrev) {
        assert(abbrev === undefined);
      });

      madison.getStateAbbrev({}, function (abbrev) {
        assert(abbrev === undefined);
      });

      madison.getStateAbbrev(null, function (abbrev) {
        assert(abbrev === undefined);
      });

      madison.getStateAbbrev([], function (abbrev) {
        assert (abbrev === undefined);
      });
    });
  });

  describe('#getStateAbbrevSync', () => {
    it('returns a state abbreviation when it is passed a state name', () => {
      assert(madison.getStateAbbrevSync('virginia') === 'VA');
      assert(madison.getStateAbbrevSync('west virginia') === 'WV');
      assert(madison.getStateAbbrevSync('California') === 'CA');
    });

    it('returns a state abbreviation when it is passed a state name, independent of case', () => {
      assert(madison.getStateAbbrevSync('Virginia') === 'VA');
      assert(madison.getStateAbbrevSync('West virginia') === 'WV');
      assert(madison.getStateAbbrevSync('californIA') === 'CA');
    });

    it('returns undefined in the event that it is not passed a valid state name', () => {
      assert(madison.getStateAbbrevSync('Some Fake State') === undefined);
      assert(madison.getStateAbbrevSync('Another Fake State') === undefined);
    });

    it('returns undefined in the event that it is passed a non-string value', () => {
      assert(madison.getStateAbbrevSync(undefined) === undefined);
      assert(madison.getStateAbbrevSync(false) === undefined);
      assert(madison.getStateAbbrevSync(333) === undefined);
      assert(madison.getStateAbbrevSync({}) === undefined);
      assert(madison.getStateAbbrevSync(null) === undefined);
      assert(madison.getStateAbbrevSync([]) === undefined);
    });
  });

  describe('#getStateName', () => {
    it('returns a state name when it is passed a state abbreviation', () => {
      madison.getStateName('va', function (name) {
        assert(name === 'Virginia');
      });

      madison.getStateName('ca', function (name) {
        assert(name === 'California');
      });
    });

    it('returns a state name when it is passed a state abbreviation, independent of case', () => {
      madison.getStateName('VA', function (name) {
        assert(name === 'Virginia');
      });

      madison.getStateName('cA', function (name) {
        assert(name === 'California');
      });
    });

    it('returns undefined in the event that it is not passed a valid state abbreviation', () => {
      madison.getStateName('XX', function (name) {
        assert(name === undefined);
      });

      madison.getStateName('00', function (name) {
        assert(name === undefined);
      });
    });

    it('returns undefined in the event that it is passed a non-string value', () => {
      madison.getStateName(undefined, function (name) {
        assert(name === undefined);
      });

      madison.getStateName(false, function (name) {
        assert(name === undefined);
      });

      madison.getStateName(333, function(name) {
        assert(name === undefined);
      });

      madison.getStateName({}, function (name) {
        assert(name === undefined);
      });

      madison.getStateName(null, function (name) {
        assert(name === undefined);
      });

      madison.getStateName([], function (name) {
        assert(name === undefined);
      });
    });
  });

  describe('#getStateNameSync', () => {
    it('returns a state name when it is passed a state abbreviation', () => {
      assert(madison.getStateNameSync('va') === 'Virginia');
      assert(madison.getStateNameSync('ca') === 'California');
    });

    it('returns a state name when it is passed a state abbreviation, independent of case', () => {
      assert(madison.getStateNameSync('VA') === 'Virginia');
      assert(madison.getStateNameSync('cA') === 'California');
    });

    it('returns undefined in the event that it is not passed a valid state abbreviation', () => {
      assert(madison.getStateNameSync('XX') === undefined);
      assert(madison.getStateNameSync('00') === undefined);
    });

    it('returns undefined in the event that it is passed a non-string value', () => {
      assert(madison.getStateNameSync(undefined) === undefined);
      assert(madison.getStateNameSync(false) === undefined);
      assert(madison.getStateNameSync(333) === undefined);
      assert(madison.getStateNameSync({}) === undefined);
      assert(madison.getStateNameSync(null) === undefined);
      assert(madison.getStateNameSync([]) === undefined);
    });
  });

  describe('#states', () => {
    it('returns a JSON array of objects, each of which contains a `name` and `abbr` key', () => {
      assert(madison.states.length === 66);
      assert(madison.states[0].name === 'Alabama');
      assert(madison.states[0].abbr === 'AL');
    });
  });
});
