function makeLargestSpecial(s) {
    let count = 0;
    let left = 0;
    const result = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '1') {
            count++;
        } else {
            count--;
        }

        if (count === 0) {
            const inner = s.substring(left + 1, i);
            result.push('1' + makeLargestSpecial(inner) + '0');
            left = i + 1;
        }
    }

    result.sort((a, b) => b.localeCompare(a));
    return result.join('');
}