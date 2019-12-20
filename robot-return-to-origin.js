/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
    const map = new Map();
    for (let i = 0, length = moves.length; i < length; i++) {
        const currentMove = moves[i];
        map.has(currentMove)
            ? map.set(currentMove, map.get(currentMove) + 1)
            : map.set(currentMove, 1);
    }

    if (map.has("U") || map.has("D")) {
        if (map.get("U") !== map.get("D")) {
            return false;
        }
    }

    if (map.has("L") || map.has("R")) {
        if (map.get("L") !== map.get("R")) {
            return false;
        }
    }

    return true;

};

console.log(judgeCircle("RRDD"));