

function numberOfSpecialChars(word) {
    let lowerLastIdx = new Array(26).fill(-1);
    let upperFirstIdx = new Array(26).fill(-1);
    let hasLower = new Array(26).fill(false);
    let hasUpper = new Array(26).fill(false);

    for (let i = 0; i < word.length; i++) {
        let char = word[i];
        let code = char.charCodeAt(0);

        if (char >= 'a' && char <= 'z') {
            let idx = code - 97;
            lowerLastIdx[idx] = i;
            hasLower[idx] = true;
        } else if (char >= 'A' && char <= 'Z') {
            let idx = code - 65;
            if (upperFirstIdx[idx] === -1) {
                upperFirstIdx[idx] = i;
            }
            hasUpper[idx] = true;
        }
    }

    let count = 0;
    for (let i = 0; i < 26; i++) {
        if (hasLower[i] && hasUpper[i] && lowerLastIdx[i] < upperFirstIdx[i]) {
            count++;
        }
    }

    return count;
}