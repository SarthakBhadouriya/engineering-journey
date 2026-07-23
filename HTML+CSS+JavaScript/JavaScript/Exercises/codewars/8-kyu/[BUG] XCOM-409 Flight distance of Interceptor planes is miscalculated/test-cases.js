const { assert } = require('chai');
const _ = require('lodash');

describe("Test travel distance", function() {
  
  it("Edge case - no departure", function() {
    assert.strictEqual(travelDistance(0, 0), 0);
  });
  
  it("In one hour of sub-sonic flight at 600 knots should travel ~1111.2 km", function() {
    assert.closeTo(travelDistance(600, 60), 1111.2, 1);
  });
  
  it("In one hour of super-sonic flight at 800 knots should travel ~1481.6 km", function() {
    assert.closeTo(travelDistance(800, 60), 1481.6, 1);
  });
  
  it('Random tests', function() {

    function refsol(avgSpeed, travelTime) {
      // speed of aircrafts is given in *knots*
      // travelTime is in *minutes*
      // travel distance should be returned in *kilometers*
      const KM_PER_MILE = 1.852;
      const travelHours = travelTime / 60;
      const travelMiles = avgSpeed * travelHours;
      const travelKms   = travelMiles * KM_PER_MILE;

      return travelKms;
    }    
    
    for(let i=0; i<100; ++i) {
      let speed = _.random(100, 1000);
      let time = _.random(20, 300);
      let expected = refsol(speed, time);
      let actual = travelDistance(speed, time);      
      const msg = `In ${time} minutes of flight at ${speed} knots should travel ~${expected} km`;      
      assert.closeTo(actual, expected, 1, msg);
    }
  });
})