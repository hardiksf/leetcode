const checkPerfectNumber = num => {
    if (num < 0) return false;
    else {
        const divisors = [];
        for (let i = 0; i < num; i++) {
            if (num % i === 0) {
                divisors.push(i);
            }
        }
        const sum = divisors.reduce((reducer, currentValue) => reducer + currentValue, 0);
        const result = (sum === num) ? true : false;
        return result;
    }
};

const result = checkPerfectNumber(28);
console.log(result);