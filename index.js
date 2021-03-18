// Code your solution in this file!
const returnFirstTwoDrivers = (array) => {
    return [array[0], array[1]]
} 
const returnLastTwoDrivers = (array) => {
    return [array[array.length - 2], array[array.length - 1]]
} 
const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
]
function createFareMultiplier(multiplier) {
    return function(fare) {
        return fare * multiplier
    }
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(array, fn) {
    return fn(array)
}