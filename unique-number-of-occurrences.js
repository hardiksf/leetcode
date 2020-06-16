/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
    const map = new Map();
    for (let i = 0, length = arr.length; i < length; i++) {
        const currentElement = arr[i];
        if (map.has(currentElement)) {
            map.set(currentElement, map.get(currentElement) + 1);
        } else {
            map.set(currentElement, 1);
        }
    }
    /*
     *  map: { 1 => 3, 2 => 2, 3 => 1 }
     * { 1 => 3, 2 => 3, 3 => 1 }
     */

    const array = [];
    for (const value of map.values()) {
        array.push(value);
    }
    /*
     *  array: [ 3, 2, 1 ]
     * [ 3, 3, 1 ]
     */

    const set = [...new Set(array)];
    /*
     * set: [ 3, 2, 1 ]
     * [ 3, 1 ]
     */

    if (array.length === set.length) {
        return true;
    } else {
        return false;
    }

};

console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3]));
console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3, 2]));
