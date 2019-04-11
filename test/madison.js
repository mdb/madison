const assert = require('assert');
const madison = require('../lib/madison.js');

describe('madison', () => {
  describe('#getStateAbbrev', () => {
    it('returns a state abbreviation when it is passed a state name', () => {
      assert(madison.getStateAbbrev('virginia') === 'VA');
      assert(madison.getStateAbbrev('west virginia') === 'WV');
      assert(madison.getStateAbbrev('California') === 'CA');
    });

    it('returns a state abbreviation when it is passed a state name, independent of case', () => {
      assert(madison.getStateAbbrev('Virginia') === 'VA');
      assert(madison.getStateAbbrev('West virginia') === 'WV');
      assert(madison.getStateAbbrev('californIA') === 'CA');
    });

    it('returns undefined in the event that it is not passed a valid state name', () => {
      assert(madison.getStateAbbrev('Some Fake State') === undefined);
      assert(madison.getStateAbbrev('Another Fake State') === undefined);
    });

    it('returns undefined in the event that it is passed a non-string value', () => {
      assert(madison.getStateAbbrev(undefined) === undefined);
      assert(madison.getStateAbbrev(false) === undefined);
      assert(madison.getStateAbbrev(333) === undefined);
      assert(madison.getStateAbbrev({}) === undefined);
      assert(madison.getStateAbbrev(null) === undefined);
      assert(madison.getStateAbbrev([]) === undefined);
    });
  });

  describe('#getStateName', () => {
    it('returns a state name when it is passed a state abbreviation', () => {
      assert(madison.getStateName('va') === 'Virginia');
      assert(madison.getStateName('ca') === 'California');
    });

    it('returns a state name when it is passed a state abbreviation, independent of case', () => {
      assert(madison.getStateName('VA') === 'Virginia');
      assert(madison.getStateName('cA') === 'California');
    });

    it('returns undefined in the event that it is not passed a valid state abbreviation', () => {
      assert(madison.getStateName('XX') === undefined);
      assert(madison.getStateName('00') === undefined);
    });

    it('returns undefined in the event that it is passed a non-string value', () => {
      assert(madison.getStateName(undefined) === undefined);
      assert(madison.getStateName(false) === undefined);
      assert(madison.getStateName(333) === undefined);
      assert(madison.getStateName({}) === undefined);
      assert(madison.getStateName(null) === undefined);
      assert(madison.getStateName([]) === undefined);
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
