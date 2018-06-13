'use strict';

describe('Airport', function() {
  var airport;
  var plane;
  var weather;

  beforeEach(function() {
    plane = jasmine.createSpy('plane');
    weather = jasmine.createSpyObj('weather', ['isStormy']);
    airport = new Airport(weather);
  });

  it('contains no planes as default', function() {
    expect(airport.planes()).toEqual([]);
  });

  describe('under normal conditions', function() {

    beforeEach(function() {
      weather.isStormy.and.returnValue(false);
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

  });

  describe('under stormy conditions', function() {

    beforeEach(function() {
      weather.isStormy.and.returnValue(true);
    });

    it('does not clear planes for take off', function() {
      expect(function() {airport.clearForTakeOff(plane); }).toThrowError('Not safe to take off!');
    });

    it('does not clear planes for landing', function() {
      expect(function() {airport.clearForLanding(plane); }).toThrowError('Not safe to land!');
    });

  });

});
