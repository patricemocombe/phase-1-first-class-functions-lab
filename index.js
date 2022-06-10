// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = function(array) {return [...array.slice(0,2)]};
const returnLastTwoDrivers = function(array) {return [...array.slice(2,4)]};
let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fareMultiplier) {
    return function (fare) {
        return fareMultiplier * fare;
    }
};
const fareMultiplier = createFareMultiplier(4);
const fareQuintupler = createFareMultiplier(5);

const fareDoubler = function(fare) {
    return fare * 2 
};

const fareTripler = function(fare) {
    return fare * 3
};

const selectDifferentDrivers = (arrayOfDrivers, returnFirstTwoDrivers) => {
        return returnFirstTwoDrivers(arrayOfDrivers)
};