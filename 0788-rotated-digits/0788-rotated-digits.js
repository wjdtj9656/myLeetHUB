function rotatedDigits(n) {
    let count = 0;
    
    for (let i = 1; i <= n; i++) {
        let str = i.toString();
        if (!/[347]/.test(str) && /[2569]/.test(str)) {
            count++;
        }
    }
    
    return count;
}