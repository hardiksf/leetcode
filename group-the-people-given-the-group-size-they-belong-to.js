/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function (groupSizes) {
    const object = {};
    groupSizes.forEach((element, index) => {
        object[element] || (object[element] = []);
        object[element].push(index);
    });
    /*
     * object:
     *  {
     *      '1': [5],
     *      '3': [0, 1, 2, 3, 4, 6],
     *  };
     */

    const result = [];
    Object.entries(object).forEach(
        ([key, value]) => {
            const length = value.length;
            result.push(value.slice(0, key));
            key = Number(key);
            let start = 0;
            let end = key;
            let iterationsLimit = length / key;

            while (iterationsLimit > 1) {
                start += key;
                end += key;
                result.push(value.slice(start, end));
                iterationsLimit--;

            }
        });
    return result;
};

console.log(groupThePeople([3, 3, 3, 3, 3, 1, 3]));
