var judgePoint24 = function(cards) {
  const EPS = 1e-6;
  const dfs = (nums) => {
    if (nums.length === 1) return Math.abs(nums[0] - 24) < EPS;
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        const a = nums[i], b = nums[j];
        const rest = [];
        for (let k = 0; k < nums.length; k++) if (k !== i && k !== j) rest.push(nums[k]);
        const candidates = [a + b, a - b, b - a, a * b];
        if (Math.abs(b) > EPS) candidates.push(a / b);
        if (Math.abs(a) > EPS) candidates.push(b / a);
        for (const v of candidates) {
          if (dfs([...rest, v])) return true;
        }
      }
    }
    return false;
  };
  return dfs(cards.map(n => n * 1));
};
