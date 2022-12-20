// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
    switch (name) {
        case 'Pure Strawberry Joy':
            return 0.5;
        case 'Energizer':
        case 'Green Garden':
            return 1.5;
        case 'Tropical Island':
            return 3.0;
        case 'All or Nothing':
            return 5;
        default:
            return 2.5;
    }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
    var index = 0;
    var limeCount = 0;
    var remainingWedges = wedgesNeeded;
    while (remainingWedges > 0 && index < limes.length) {
        switch (limes[index]) {
            case 'small':
                remainingWedges -= 6;
                break;
            case 'medium':
                remainingWedges -= 8;
                break;
            case 'large':
                remainingWedges -= 10;
                break;
        }
        index++;
        limeCount++;
    }
    return limeCount;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
    var remainingDrinks = [];
    var index = 0;
    while (index < orders.length) {
        var drinkPrepareTime = timeToMixJuice(orders[index]);
        if (timeLeft > 0) {
            timeLeft -= drinkPrepareTime;
        } else {
            remainingDrinks.push(orders[index]);
        }
        index++;
    }
    return remainingDrinks;
}
