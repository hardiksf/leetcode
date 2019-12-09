/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
    const reversedNumberArray = [];
    while (n > 0) {
        reversedNumberArray.push(n % 10);
        n = parseInt(n / 10);
    }
    const product = reversedNumberArray.reduce((a, b) => a * b, 1);
    const sum = reversedNumberArray.reduce((a, b) => a + b, 0);
    return product - sum;
};

console.log(subtractProductAndSum(4421));
