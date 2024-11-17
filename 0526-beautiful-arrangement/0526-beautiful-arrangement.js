function countArrangement(n) {
    let count = 0; 
    const visited = new Array(n + 1).fill(false); 
    
    function backtrack(index) {
        if (index > n) { 
            count++;
            return;
        }
        for (let num = 1; num <= n; num++) {
            if (!visited[num] && (num % index === 0 || index % num === 0)) {
                visited[num] = true; 
                backtrack(index + 1); 
                visited[num] = false; 
            }
        }
    }

    backtrack(1);
    return count;
}
