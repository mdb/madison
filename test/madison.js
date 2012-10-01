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
      assert(madison.getStateName('Some Fake State') === undefined);
      assert(madison.getStateName('Another Fake State') === undefined);
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
  });
});
