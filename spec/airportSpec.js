'use strict';

describe('Airport', function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport;
    plane = jasmine.createSpy('plane', ['land']);
  });

  it('contains no planes as default', function() {
    expect(airport.planes()).toEqual([]);
  });

  it('can clear planes for landing', function() {
    airport.clearForLanding(plane);
    expect(airport.planes()).toEqual([plane]);
  });

  it('can clear planes for take off', function() {
    airport.clearForLanding(plane);
    airport.clearForTakeOff(plane);
    expect(airport.planes()).toEqual([]);
  });

  it('can check if it has a stormy variable', function() {
    expect(airport.isStormy()).toBeFalsy();
  });

  describe('under stormy conditions', function() {

    it('does not clear planes for take off', function() {
      airport.clearForLanding(plane);
      spyOn(airport, 'isStormy').and.returnValue(true);
      expect(function() { airport.clearForTakeOff(plane); }).toThrowError('Not safe to take off!');
    });

    it('does not clear planes for landing', function() {
      spyOn(airport, 'isStormy').and.returnValue(true);
      expect(function() {airport.clearForLanding(plane); }).toThrowError('Not safe to land!');
    });

  });

});
