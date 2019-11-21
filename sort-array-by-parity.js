/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function (A) {
    const evenArray = [];
    const oddArray = [];
    A.forEach(element => {
        element % 2 === 0 ? evenArray.push(element) : oddArray.push(element);
    });
    return [...evenArray, ...oddArray];
};

console.log(sortArrayByParity([3, 1, 2, 4]));