/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function (A) {
    A.forEach(element => {
        element.reverse();
    });

    A.forEach(element => {
        const length = element.length;
        for (let i = 0; i < length; i++) {
            element[i] = element[i] === 0 ? 1 : 0;
        }
    });
    return A;
};

console.log(flipAndInvertImage([[1, 1, 0], [1, 0, 1], [0, 0, 0]]));