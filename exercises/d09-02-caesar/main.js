/**
 * Encrypt w/Caesar cipher.
 * Prompts user for phrase to encode and how many letters to shift.
 * Returns 1 if empty string given as input
 * 
 * Caesar Cipher algorithms
 * E(char) = (char + shift) mod 26 
 * D(char) = (char - shift) mod 26
*/

var readline = require('readline-sync');

function isAlpha(char) {
    return /^[A-Z]$/i.test(char);
}

function caesarCipher() {
    var input = readline.question('What phrase would you like to encrypt? ');
    var shift = parseInt(readline.question('How many letters would you like to shift? '));

    var cipher = "";
    var currCode;
    var currChar;

    console.log(`input: ${input}`);

    if (input !== "") {
        for (var i = 0; i < input.length; i++) {
            currChar = input[i];
            currCode = input.charCodeAt(i);

            // console.log(`currChar: ${currChar}`);

            if (isAlpha(currChar)) {
                if (currChar === currChar.toUpperCase()) {
                    // console.log(`I am upper case.`);
                    cipher += String.fromCharCode(((currCode - 65 + shift) % 26) + 65);
                } else {
                    // console.log(`I am lower case.`);
                    cipher += String.fromCharCode(((currCode - 97 + shift) % 26) + 97);
                }
            } else {
                // console.log(`I am not alpha.`);
                cipher += currChar;
            }
            // console.log(``);
        }
        console.log(`cipher: ${cipher}`);
        return cipher;

    } else {
        console.log("You didn't give me a phrase.");
        return 1;
    }
}

caesarCipher();
