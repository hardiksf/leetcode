/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function (A) {
    const map = new Map();

    for (let i = 0, length = A.length; i < length; i++) {
        currentElement = A[i];
        if (map.has(currentElement)) {
            return currentElement;
        } else {
            map.set(currentElement, 'this number exists');
        }
    }
};

console.log(repeatedNTimes([1, 2, 2, 3]));
