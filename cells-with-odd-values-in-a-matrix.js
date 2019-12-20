/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function (n, m, indices) {
    // create multi-dimensional array and initialize each element with 0
    const matrix = Array.from(Array(n), () => new Array(m).fill(0));

    // for (let i = 0; i < arrayLength; i++) {// going through each row in matrix
    indices.forEach(element => { // going through each indices
        matrix[element[0]].forEach((_element, index) => matrix[element[0]][index] = matrix[element[0]][index] + 1); // incrementing each element in row by 1 at indices[0] of matrix

        matrix.forEach(eachRow => eachRow[element[1]] = eachRow[element[1]] + 1); // incrementing each element at index equal to indices[1] of column by one
    });
    let counter = 0;
    matrix.forEach(eachRow => {
        eachRow.forEach(element => {
            if (element % 2 !== 0) {
                counter++;
            }
        });
    });
    return counter;
};

const indices = [[1, 1], [0, 0]];
console.log(oddCells(2, 2, indices));