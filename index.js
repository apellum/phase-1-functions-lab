function distanceFromHqInBlocks(streetNumber) {
    const numOfBlocks = Math.abs(streetNumber-42)
    return numOfBlocks
}

function distanceFromHqInFeet(streetNumber) {
    const numOfFeet = distanceFromHqInBlocks(streetNumber) * 264
    return numOfFeet
}

function distanceTravelledInFeet(startingPoint, endPoint) {
    const numOfBlocks2 = Math.abs(startingPoint-endPoint);
    const numOfFeet2 = numOfBlocks2 * 264
    return numOfFeet2
}

function calculatesFarePrice(startingPoint, endPoint) {
    if (distanceTravelledInFeet(startingPoint, endPoint) < 401) {
        return 0
    } if ((distanceTravelledInFeet(startingPoint, endPoint) > 400) && (distanceTravelledInFeet(startingPoint, endPoint) < 2000)) {
        const priceCalculation = (distanceTravelledInFeet(startingPoint, endPoint) - 400);
        const farePrice = priceCalculation * .02
        return farePrice
    } if ((distanceTravelledInFeet(startingPoint, endPoint) > 2000) && (distanceTravelledInFeet(startingPoint, endPoint) < 2501)) {
        return 25;
    } else if (distanceTravelledInFeet(startingPoint, endPoint) > 2500) {
        return 'cannot travel that far'
    }
}