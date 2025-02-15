/**
 * @param {number} n
 * @return {number}
 */
var punishmentNumber = function(n) {
    // Helper function: 백트래킹을 이용하여 numStr을 분할해서 target을 만들 수 있는지 확인
    function canPartition(numStr, target, index = 0, currentSum = 0) {
        // 모든 문자를 사용했다면 현재까지의 합이 target과 동일한지 확인
        if (index === numStr.length) {
            return currentSum === target;
        }
        
        let temp = 0;
        // numStr의 index부터 끝까지 연속된 부분 문자열을 만들어 봅니다.
        for (let i = index; i < numStr.length; i++) {
            temp = temp * 10 + Number(numStr[i]);
            // currentSum과 temp의 합이 target을 넘지 않을 때만 재귀 호출
            if (currentSum + temp <= target) {
                if (canPartition(numStr, target, i + 1, currentSum + temp)) {
                    return true;
                }
            }
        }
        return false;
    }
    
    let totalSum = 0;
    // 1부터 n까지 모든 정수 i에 대해 처리
    for (let i = 1; i <= n; i++) {
        const squareStr = (i * i).toString();
        // i의 제곱 문자열이 조건을 만족하면 제곱 값을 totalSum에 누적
        if (canPartition(squareStr, i)) {
            totalSum += i * i;
        }
    }
    
    return totalSum;
};
