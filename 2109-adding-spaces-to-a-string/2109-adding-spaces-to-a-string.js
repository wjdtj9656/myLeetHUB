/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function(s, spaces) {
    let result = '';
    let spaceIndex = 0;
    let sLength = s.length;
    let spacesLength = spaces.length;

    for(let i = 0; i < sLength; i++) {
        if(spaceIndex < spacesLength && i === spaces[spaceIndex]) {
            result += ' ';
            spaceIndex++;
        }
        result += s[i];
    }

    return result;
};
