/**
 * @param {string} S
 * @return {number}
 */

var minAddToMakeValid = function (S) {
    if (S.length === 0) {
        return 0;
    } else {
        const stack = [];
        for (let i = 0, length = S.length; i < length; i++) {
            if (S[i] === ')' && stack.length > 0 && stack[stack.length - 1] === '(') {
                stack.pop();
            } else {
                stack.push(S[i]);
            }
        }
        return stack.length;
    }
};

console.log(minAddToMakeValid('()()))(('));
console.log(minAddToMakeValid('((())'));
console.log(minAddToMakeValid('()()'));
