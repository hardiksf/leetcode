/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const hammingDistance = (x, y) => {
    return (x ^ y) // 5
        .toString(2) // 101
        .split('') // [ '1', '0', '1' ]
        .filter(element => element === '1') // [ '1', '1' ]
        .length; // 2
};

var hammingDistanceWithoutXOR = function (x, y) {

    /*
     * Divide the number by 2.
     * Get the integer quotient for the next iteration.
     * Get the remainder for the binary digit.
     * Repeat the steps until the quotient is equal to 0.
     */
    const numberToBinaryWithoutToString = number => {
        const numberDividedByTwo = [];
        while (number !== 0) {
            numberDividedByTwo.push(number % 2);
            number = Math.floor(number / 2);
        }
        return numberDividedByTwo.reverse();
    };

    const xBinaryArray = numberToBinaryWithoutToString(x);
    const yBinaryArray = numberToBinaryWithoutToString(y);

    const xBinaryArrayLength = xBinaryArray.length;
    const yBinaryArrayLength = yBinaryArray.length;
    const differenceInLength = Math.abs(xBinaryArrayLength - yBinaryArrayLength);

    for (let i = 0; i < differenceInLength; i++) {
        (xBinaryArrayLength > yBinaryArrayLength)
            ? yBinaryArray.unshift(0)
            : xBinaryArray.unshift(0);
    }

    let numberOfDifferentBits = 0;
    for (let i = 0, maxLimit = Math.max(xBinaryArrayLength, yBinaryArrayLength); i < maxLimit; i++) {
        if (xBinaryArray[i] !== yBinaryArray[i]) {
            numberOfDifferentBits++;
        }
    }

    return numberOfDifferentBits;

};

console.log(hammingDistance(1, 4));
