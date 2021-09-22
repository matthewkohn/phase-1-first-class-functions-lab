// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(drivers.length - 2);
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
  return function createFare(fare) {
    return fare * multiplier;
  }
}

const fareDoubler = function(fare) {
  return createFareMultiplier(2)(fare);
}

const fareTripler = function(fare) {
  return createFareMultiplier(3)(fare);
}

function selectDifferentDrivers(arrayOfDrivers, returnFirstTwoDrivers) {
  return returnFirstTwoDrivers(arrayOfDrivers);
}