/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function (points) {
    let count = 0;
    length = points.length;
    for (let i = 0; i < length - 1; i++) {
        //For [[1, 1], [3, 4], [-1, 0]], take the max difference between either 1 and 3 OR between 1 and 4. Add that to count and keep doing that
        count += Math.max(Math.abs(points[i][0] - points[i + 1][0]), Math.abs(points[i][1] - points[i + 1][1]));
    }
    return count;
};

console.log(minTimeToVisitAllPoints([[1, 1], [3, 4], [-1, 0]]));
