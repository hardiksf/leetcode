const selfDividingNumbers = (left, right) => {
    const output = [];
    for (let i = left; i <= right; i++) {
        const digitsString = [...i + ''];
        if (!(digitsString.indexOf('0') > -1)) {
            const digits = digitsString.map(digit => + digit); // + returns the number representation of the object,
            const numberOfDigits = digits.length;
            for (let j = 0; j < numberOfDigits; j++) {
                const currentDigit = digits[j];
                if (i % currentDigit === 0) {
                    if (j === numberOfDigits - 1) {
                        output.push(i);
                    }
                } else {
                    break;
                }
            }
        }
    } return output;
};

const result = selfDividingNumbers(232, 708);
console.log(result);