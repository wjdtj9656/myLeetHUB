/**
 * @param {string} customers
 * @return {number}
 */
var bestClosingTime = function(customers) {
    let currentPenalty = 0;
    for (let i = 0; i < customers.length; i++) {
        if (customers[i] === 'Y') {
            currentPenalty++;
        }
    }

    let minPenalty = currentPenalty;
    let bestHour = 0;

    for (let i = 0; i < customers.length; i++) {
        if (customers[i] === 'Y') {
            currentPenalty--;
        } else {
            currentPenalty++;
        }

        if (currentPenalty < minPenalty) {
            minPenalty = currentPenalty;
            bestHour = i + 1;
        }
    }

    return bestHour;
};