var twoEditWords = function(queries, dictionary) {
    return queries.filter(query => {
        return dictionary.some(word => {
            let diff = 0;
            for (let i = 0; i < query.length; i++) {
                if (query[i] !== word[i]) {
                    diff++;
                }
                if (diff > 2) return false;
            }
            return true;
        });
    });
};