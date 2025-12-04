function countCollisions(directions) {
    let left = 0;
    let right = directions.length - 1;

    while (left <= right && directions[left] === 'L') left++;
    while (right >= left && directions[right] === 'R') right--;

    let collisions = 0;
    for (let i = left; i <= right; i++) {
        if (directions[i] !== 'S') collisions++;
    }

    return collisions;
}
