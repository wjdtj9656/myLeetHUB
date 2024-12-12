var maxLength = function(ribbons, k) {
    
    const isValidDiv = (val) => {
        let res = 0
        for (let i = 0; i < ribbons.length; i++) {
            res += Math.floor(ribbons[i]/val)
        }
        if (res >= k) return true
        return false
    }
    
    const sum = ribbons.reduce((acc, cur) => {
        return acc+cur
    }, 0) 
    
    const maxValue = Math.floor(sum / k)
    
    if (maxValue === 0) return 0
    
    let left = 0
    let right = maxValue

    while (left < right) {
        const pV = Math.floor((left+right+1)/2)
        if (isValidDiv(pV)) {
            left = pV
        } else {
            right = pV - 1
        }
    }
    
    return left
};