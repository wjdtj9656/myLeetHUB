/**
 * @param {number[]} candidates
 * @return {number}
 */
var largestCombination = function(candidates) {
    
    const bitCounts = new Array(25).fill(0); // candidates[i] <= 10^7 이므로

    // candidates의 각 숫자에 대해 반복
    for (const num of candidates) {
        let bitPosition = 0;
        let currentNum = num;

        // 각 비트 위치를 확인
        while (currentNum > 0) {
            // 최하위 비트가 1인지 확인
            if ((currentNum & 1) === 1) {
                bitCounts[bitPosition] += 1;
            }

            // 다음 비트로 이동
            currentNum >>= 1;
            bitPosition += 1;
        }
    }

    // 모든 비트 위치에서 최대 카운트 찾기
    let maxCombinationSize = 0;
    for (const count of bitCounts) {
        if (count > maxCombinationSize) {
            maxCombinationSize = count;
        }
    }

    return maxCombinationSize;    
};