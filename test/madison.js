var assert = require('assert');
var madison = require('../lib/madison.js');

describe("madison", function() {
  describe("#getStateAbbrev", function () {
    it("returns a state's abbreviation when it's passed a state's name", function () {
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

    it("returns a state's abbreviation when it's passed a state's name, independent of case", function () {
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

    it("returns undefined in the event that it is not passed a valid state name", function () {
      madison.getStateAbbrev('Some Fake State', function (abbrev) {
        assert(abbrev === undefined);
      });

      madison.getStateAbbrev('Another Fake State', function (abbrev) {
        assert(abbrev === undefined);
      });
    });

    it("returns undefined in the event that it is passed a non-string value", function () {
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

  describe("#getStateAbbrevSync", function () {
    it("returns a state's abbreviation when it's passed a state's name", function () {
      assert(madison.getStateAbbrevSync('virginia') === 'VA');
      assert(madison.getStateAbbrevSync('west virginia') === 'WV');
      assert(madison.getStateAbbrevSync('California') === 'CA');
    });

    it("returns a state's abbreviation when it's passed a state's name, independent of case", function () {
      assert(madison.getStateAbbrevSync('Virginia') === 'VA');
      assert(madison.getStateAbbrevSync('West virginia') === 'WV');
      assert(madison.getStateAbbrevSync('californIA') === 'CA');
    });

    it("returns undefined in the event that it is not passed a valid state name", function () {
      assert(madison.getStateAbbrevSync('Some Fake State') === undefined);
      assert(madison.getStateAbbrevSync('Another Fake State') === undefined);
    });

    it("returns undefined in the event that it is passed a non-string value", function () {
      assert(madison.getStateAbbrevSync(undefined) === undefined);
      assert(madison.getStateAbbrevSync(false) === undefined);
      assert(madison.getStateAbbrevSync(333) === undefined);
      assert(madison.getStateAbbrevSync({}) === undefined);
      assert(madison.getStateAbbrevSync(null) === undefined);
      assert(madison.getStateAbbrevSync([]) === undefined);
    });
  });

  describe("#getStateName", function () {
    it("returns a state's name when it's passed a state's abbreviation", function () {
      madison.getStateName('va', function (name) {
        assert(name === 'Virginia');
      });

      madison.getStateName('ca', function (name) {
        assert(name === 'California');
      });
    });

    it("returns a state's name when it's passed a state's abbreviation, independent of case", function () {
      madison.getStateName('VA', function (name) {
        assert(name === 'Virginia');
      });

      madison.getStateName('cA', function (name) {
        assert(name === 'California');
      });
    });

    it("returns undefined in the event that it is not passed a valid state abbreviation", function () {
      madison.getStateName('XX', function (name) {
        assert(name === undefined);
      });

      madison.getStateName('00', function (name) {
        assert(name === undefined);
      });
    });

    it("returns undefined in the event that it is passed a non-string value", function () {
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

  describe("#getStateNameSync", function () {
    it("returns a state's name when it's passed a state's abbreviation", function () {
      assert(madison.getStateNameSync('va') === 'Virginia');
      assert(madison.getStateNameSync('ca') === 'California');
    });

    it("returns a state's name when it's passed a state's abbreviation, independent of case", function () {
      assert(madison.getStateNameSync('VA') === 'Virginia');
      assert(madison.getStateNameSync('cA') === 'California');
    });

    it("returns undefined in the event that it is not passed a valid state abbreviation", function () {
      assert(madison.getStateNameSync('XX') === undefined);
      assert(madison.getStateNameSync('00') === undefined);
    });

    it("returns undefined in the event that it is passed a non-string value", function () {
      assert(madison.getStateNameSync(undefined) === undefined);
      assert(madison.getStateNameSync(false) === undefined);
      assert(madison.getStateNameSync(333) === undefined);
      assert(madison.getStateNameSync({}) === undefined);
      assert(madison.getStateNameSync(null) === undefined);
      assert(madison.getStateNameSync([]) === undefined);
    });
  });

  describe("#states", function () {
    it("returns a JSON array of objects, each of which contains a 'name' and 'abbr' key", function () {
      assert(madison.states.length === 53);
      assert(madison.states[0].name === "Alabama");
      assert(madison.states[0].abbr === "AL");
    });
  });
});
