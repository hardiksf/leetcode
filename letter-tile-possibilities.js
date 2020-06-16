const numTilePossibilities = (myString, currentString = '', permutations = []) => {
    if (permutations) {
        permutations.push(currentString);  // Add currentString to permutations

    }
    if (!myString) {
        return;
    }

    const length = myString.length;
    for (let i = 0; i < length; i++) {
        currentString += myString[i]; // Add current letter to currentString

        numTilePossibilities(myString.slice(0, i) + myString.slice(i + 1), currentString, permutations); // Remove up to current letter from currentString since it is already added to currentString and recursively call the function

        const permutationsLength = currentString.length;
        currentString = currentString.slice(0, permutationsLength - 1); // Remove last letter from the currentString
    }

    const unique = [...new Set(permutations)];
    return unique.length - 1;
};

console.log(numTilePossibilities(`AAB`));
