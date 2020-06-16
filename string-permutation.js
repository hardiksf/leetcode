// string permutation
const getPermutation = (myString, currentString = '', permutations = []) => {
    if (!myString) {
        permutations.push(currentString);  // Add currentString to permutations
        return;
    }

    const length = myString.length;
    for (let i = 0; i < length; i++) {
        currentString += myString[i]; // Add current letter to currentString

        getPermutation(myString.slice(0, i) + myString.slice(i + 1), currentString, permutations); // Remove up to current letter from currentString since it is already added to currentString and recursively call the function

        const permutationsLength = currentString.length;
        currentString = currentString.slice(0, permutationsLength - 1); // Remove last letter from the currentString
    }

    return permutations;
};
console.log(getPermutation('ABC'));

// without duplicates
const getPermutationWithoutDuplicates = (myString, currentString = '', permutations = []) => {
    if (!myString) {
        permutations.push(currentString);  // Add currentString to permutations
        return;
    }

    const length = myString.length;
    for (let i = 0; i < length; i++) {
        currentString += myString[i]; // Add current letter to currentString

        getPermutationWithoutDuplicates(myString.slice(0, i) + myString.slice(i + 1), currentString, permutations); // Remove up to current letter from currentString since it is already added to currentString and recursively call the function

        const permutationsLength = currentString.length;
        currentString = currentString.slice(0, permutationsLength - 1); // Remove last letter from the currentString
    }

    return permutations;
};

console.log(getPermutationWithoutDuplicates('ABCA'));
