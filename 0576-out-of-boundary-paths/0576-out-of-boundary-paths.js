var findPaths = function(m, n, N, i, j, memo = new Map()) {
    const key = `${N} ${i} ${j}`;
    const isOut = i === -1 || i === m || j === -1 || j === n;
    if(memo.has(key)) return memo.get(key);
    if(N===0 || isOut) return isOut;
    memo.set(key,(
        findPaths(m,n,N-1,i-1,j,memo)+
        findPaths(m,n,N-1,i,j-1,memo)+
        findPaths(m,n,N-1,i+1,j,memo)+
        findPaths(m,n,N-1,i,j+1,memo)
    )%1000000007)
    return memo.get(key);
};

