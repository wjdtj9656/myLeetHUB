/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
var validWordAbbreviation = function(word, abbr) {
    var i=0, j=0;
    while(i<word.length && j<abbr.length)
    {
        if(word[i] === abbr[j])
        {
            i++;
            j++;
            continue;
        }
        if(isNaN(abbr[j]) || abbr[j] === '0')
        {
            // bug: cannot start with "01"
            return false;
        }
        var k = j;
        while(k<abbr.length && !isNaN(abbr[k]) )
        {
            k++;
        }
        var step = parseInt(abbr.slice(j, k));
        j = k;
        i += step;
    }
    return i === word.length && j === abbr.length;   
};