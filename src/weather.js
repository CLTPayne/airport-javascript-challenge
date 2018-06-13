'use strict';

function Weather() {

Weather.prototype.isStormy = function () {
  let chanceOfStormy = 0.1;
  if (Math.random() < chanceOfStormy) {
    return true;
  }
  return false;
};

}
