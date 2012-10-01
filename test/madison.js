var assert = require('assert');
var madison = require('../madison.js');

describe("madison", function() {
  describe("#getStateAbbrev", function () {
    it("returns a state's abbreviation when it's passed a state's name", function () {
      assert(madison.getStateAbbrev('virginia') === 'VA');
      assert(madison.getStateAbbrev('west virginia') === 'WV');
      assert(madison.getStateAbbrev('California') === 'CA');
    });

    it("returns a state's abbreviation when it's passed a state's name, independent of case", function () {
      assert(madison.getStateAbbrev('Virginia') === 'VA');
      assert(madison.getStateAbbrev('West virginia') === 'WV');
      assert(madison.getStateAbbrev('californIA') === 'CA');
    });

    it("returns undefined in the event that it is not passed a valid state name", function () {
      assert(madison.getStateAbbrev('Some Fake State') === undefined);
      assert(madison.getStateAbbrev('Another Fake State') === undefined);
    });
    
    it("returns undefined in the event that it is passed a non-string value", function () {
      assert(madison.getStateAbbrev(undefined) === undefined);
      assert(madison.getStateAbbrev(false) === undefined);
      assert(madison.getStateAbbrev(333) === undefined);
      assert(madison.getStateAbbrev({}) === undefined);
      assert(madison.getStateAbbrev(null) === undefined);
      assert(madison.getStateAbbrev([]) === undefined);
    });
  })

  describe("#getStateName", function () {
    it("returns a state's name when it's passed a state's abbreviation", function () {
      assert(madison.getStateName('va') === 'Virginia');
      assert(madison.getStateName('ca') === 'California');
    });
    
    it("returns a state's name when it's passed a state's abbreviation, independent of case", function () {
      assert(madison.getStateName('VA') === 'Virginia');
      assert(madison.getStateName('cA') === 'California');
    });

    it("returns undefined in the event that it is not passed a valid state abbreviation", function () {
      assert(madison.getStateName('XX') === undefined);
      assert(madison.getStateName('00') === undefined);
    });

    it("returns undefined in the event that it is passed a non-string value", function () {
      assert(madison.getStateName(undefined) === undefined);
      assert(madison.getStateName(false) === undefined);
      assert(madison.getStateName(333) === undefined);
      assert(madison.getStateName({}) === undefined);
      assert(madison.getStateName(null) === undefined);
      assert(madison.getStateName([]) === undefined);
    });
  });
});
