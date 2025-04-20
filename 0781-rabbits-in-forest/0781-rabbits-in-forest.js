var numRabbits = function(answers) {
    answers.sort((a, b) => b - a); 
    let arr = [];
    let res = 0;

    while (answers.length > 0) {
        if (arr.length === 0) {
            arr.push(answers.pop());
        } else {
            if (answers[answers.length - 1] === arr[0]) {
                arr.push(answers.pop());
            } else {
                const num = arr[0];
                res += Math.ceil(arr.length / (num + 1)) * (num + 1);
                arr = [];
            }
        }
    }

    if (arr.length > 0) {
        res += Math.ceil(arr.length / (arr[0] + 1)) * (arr[0] + 1);
    }

    return res;
};
