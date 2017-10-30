const returnFirstTwoDrivers = function(drivers){
  return drivers.slice(0, 2)
}

const returnLastTwoDrivers = function(drivers){
  return drivers.slice(drivers.length - 2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(){
  return function(fare){
    return fare * fare
  }
}

function fareDoubler(fare){
  return fare + fare
}

function fareTripler(fare){
  return fare + fare + fare
}

const selectDifferentDrivers = function(arrayOfDrivers, func){
  return func(arrayOfDrivers)
}
