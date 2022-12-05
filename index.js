// Code your solution in this file!
const returnFirstTwoDrivers = function (array) {
    return array.slice(0, 2)
}

const returnLastTwoDrivers = function (array){
    return array.slice(-2)
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

let createFareMultiplier = function (int) {
    return function (value) {
        return(int * value)
    }
}
const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers (arrayOfDrivers, drivers){
    return selectDifferentDrivers(drivers)
}