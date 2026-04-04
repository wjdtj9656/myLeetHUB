var decodeCiphertext = function(encodedText, rows) {
    if (encodedText.length === 0) return "";
    
    const cols = encodedText.length / rows;
    let result = [];
    
    for (let i = 0; i < cols; i++) {
        for (let r = 0; r < rows && i + r < cols; r++) {
            result.push(encodedText[r * cols + i + r]);
        }
    }
    
    return result.join('').trimEnd();
};