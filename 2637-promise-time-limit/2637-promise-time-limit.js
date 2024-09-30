function timeLimit(fn, t) {
    return async function(...args) {
        return new Promise((resolve, reject) => {
            const timer = setTimeout(() => {
                reject("Time Limit Exceeded");
            }, t);

            fn(...args)
                .then((result) => {
                    clearTimeout(timer); // 타이머 해제
                    resolve(result);     // 결과 반환
                })
                .catch((error) => {
                    clearTimeout(timer); // 타이머 해제
                    reject(error);       // 에러 반환
                });
        });
    };
}