const MOD = 10**9 + 7;

function colorTheGrid(m, n) {
    // 가능한 패턴들을 미리 구합니다.
    const validPatterns = getValidPatterns(m);
    const adjPatterns = getAdjPatterns(validPatterns, m);

    // dp 배열을 초기화합니다.
    let dp = new Array(validPatterns.length).fill(1);

    // n 열까지 계산합니다.
    for (let col = 1; col < n; col++) {
        const newDp = new Array(validPatterns.length).fill(0);

        for (let i = 0; i < validPatterns.length; i++) {
            for (let j of adjPatterns[i]) {
                newDp[i] = (newDp[i] + dp[j]) % MOD;
            }
        }

        dp = newDp;
    }

    return dp.reduce((sum, val) => (sum + val) % MOD, 0);
}

// m 크기에 따라 유효한 색칠 패턴을 구합니다.
function getValidPatterns(m) {
    const patterns = [];
    const colors = [0, 1, 2]; // 0: 빨강, 1: 초록, 2: 파랑

    function dfs(pattern) {
        if (pattern.length === m) {
            patterns.push([...pattern]);
            return;
        }
        for (const color of colors) {
            if (pattern.length === 0 || pattern[pattern.length - 1] !== color) {
                pattern.push(color);
                dfs(pattern);
                pattern.pop();
            }
        }
    }

    dfs([]);
    return patterns;
}

// 인접한 패턴 간의 관계를 구합니다.
function getAdjPatterns(validPatterns, m) {
    const adjPatterns = new Array(validPatterns.length).fill(0).map(() => []);

    for (let i = 0; i < validPatterns.length; i++) {
        for (let j = 0; j < validPatterns.length; j++) {
            if (isValidAdj(validPatterns[i], validPatterns[j], m)) {
                adjPatterns[i].push(j);
            }
        }
    }

    return adjPatterns;
}

// 두 패턴이 인접 가능한지 확인합니다.
function isValidAdj(pattern1, pattern2, m) {
    for (let i = 0; i < m; i++) {
        if (pattern1[i] === pattern2[i]) return false;
    }
    return true;
}