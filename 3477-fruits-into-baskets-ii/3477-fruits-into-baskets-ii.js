function numOfUnplacedFruits(fruits, baskets) {
    const n = fruits.length;
    const used = Array(n).fill(false);
    let unplaced = 0;

    for (let i = 0; i < n; i++) {
        let placed = false;

        for (let j = 0; j < n; j++) {
            if (!used[j] && baskets[j] >= fruits[i]) {
                used[j] = true;
                placed = true;
                break;
            }
        }

        if (!placed) {
            unplaced++;
        }
    }

    return unplaced;
}
