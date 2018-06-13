'use strict';

describe('Weather', function() {
  let weather;

    beforeEach(function() {
      weather = new Weather;
    });

  describe('isStormy', function() {

    it('returns false when weather is not stormy', function() {
      spyOn(Math, 'random').and.returnValue(1);
      expect(weather.isStormy()).toBe(false);
    });

    it('returns true when the weather is stormy', function () {
      spyOn(Math, 'random').and.returnValue(0);
      expect(weather.isStormy()).toBe(true)
    });
  });


});
