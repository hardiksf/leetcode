const grid = [
    [3, 0, 8, 4],
    [2, 4, 5, 7],
    [9, 2, 6, 3],
    [0, 3, 1, 0],
];
const maxIncreaseKeepingSkyline = grid => {
    const maxInEachColumn = [];
    const totalColumns = grid[0].length;
    for (let j = 0; j < totalColumns; j++) {
        const columnValuesForEachRow = [];
        for (let i = 0; i < grid.length; i++) {
            columnValuesForEachRow.push(grid[i][j]);
        }
        maxInEachColumn.push(Math.max(...columnValuesForEachRow));
    }

    const maxInEachRow = [];
    for (let i = 0; i < grid.length; i++) {
        maxInEachRow.push(Math.max(...grid[i]));
    }

    let sum = 0;
    for (let i = 0; i < grid[0].length; i++) {
        for (let j = 0; j < grid.length - 1; j++) {
            const currentElement = grid[i][j];
            const maxThatCurrentElementBe = Math.min(maxInEachColumn[j], maxInEachRow[i]);
            sum = sum + (maxThatCurrentElementBe - currentElement);
        }
    }
    return sum;

};

maxIncreaseKeepingSkyline(grid);