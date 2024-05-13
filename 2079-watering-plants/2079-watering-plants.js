/**
 * @param {number[]} plants
 * @param {number} capacity
 * @return {number}
 */
var wateringPlants = function(plants, capacity) {
    let steps = 0, water = capacity;

    for(let index = 0; index < plants.length; index++){
        if(plants[index] > water){
            steps += (index)*2;
            water = capacity; // Refill water
        }
        water -= plants[index];
        steps++;
    }

    return steps;
};