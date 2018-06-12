'use strict';

// As an air traffic controller
// To get passengers to a destination
// I want to instruct a plane to land at
//   an airport and confirm that it has landed

describe('Feature test:', function() {
  var plane;
  var airport;

  beforeEach(function(){
    plane = new Plane;
    airport = new Airport;
  })

  it('instructs a plane to land at an airport', function() {
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });

// As an air traffic controller
// To get passengers to a destination
// I want to instruct a plane to take off from
//   an airport and confirm that it is no longer in the airport

  it('instructs a plane to take off from an airport', function() {
    plane.land(airport);
    plane.takeOff();
    expect(airport.planes()).not.toContain(plane);
  });

});
