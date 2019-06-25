var toLowerCase = function (str) {
    let result = "";
    const charArray = str.split('');
    const length = str.length;
    for (let i = 0; i < length; i++) {
        const currentCharacter = charArray[i];
        if (currentCharacter <= 'Z' && currentCharacter >= 'A') {
            const asciiCode = currentCharacter.charCodeAt(0) + 32;
            result = result + String.fromCharCode(asciiCode);
        } else {
            result = result + currentCharacter;
        }
    }
    return result;
};

toLowerCase(`Hello`);