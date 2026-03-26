var getHappyString = function(n, k) {
    let count = 0;
    let result = "";

    const dfs = (current) => {
        if (current.length === n) {
            count++;
            if (count === k) {
                result = current;
            }
            return;
        }

        for (const char of ['a', 'b', 'c']) {
            if (current.length === 0 || current[current.length - 1] !== char) {
                if (result === "") {
                    dfs(current + char);
                }
            }
        }
    };

    dfs("");
    return result;
};