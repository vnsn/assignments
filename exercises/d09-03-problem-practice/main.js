/*
Write a function that takes an array of numbers and 
returns the largest (without using Math.max())
largest([3, 5, 2, 8, 1]) // => 8  
*/

function large(arr) {
    var big = arr[0];

    if (arr[0] === undefined) {
        console.log("The array was empty.");
    } else {
        for (i = 1; i < arr.length; i++) {
            if (arr[i] > big) {
                big = arr[i];
            }
        }
    }
    return big;
}

var testArr = [3, 5, 2, 8, 1];
// var testArr = [13, 5, 2, 8, 1];
// var testArr = [13, 5, 2, 8, 100];
// var testArr = [3];
// var testArr = [];
console.log(`\nTesting large`);
console.log(large(testArr));

/* 
QUESTION
How can I test to see if an empty array was passed in ? 
Don't want to just return "undefined"...? Or if I did, 
how would the calling function test to see if I returned undefined? 

Tried:
    if (!arr[0]) {
        console.log("arr is undefined");
    }

    arr[0] === undefined  // seems to work. is this the best/ only?

typeof(arr[0]) === undefined   // does NOT get into the if with arr = []
!arr[0]  // got into the if with both an empty array AND an arr = [0]
*/

/*
Write a function that takes an array of words and a character and 
return each word that has that letter present.
lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"]) // => ["C%4!", "Hey!"]  
*/

function lettersWithStrings(arr, char) {
    var resultArr = [];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i].indexOf(char) != -1) {
            resultArr.push((arr[i]));
        }
    }
    return resultArr;
}

testStrArr = ["#3", "$$$", "C%3!", "Hey!$"];
char = "$";
console.log(`\nTesting lettersWithStrings`);
console.log(`Find ${char} in ${testStrArr}`);
console.log(lettersWithStrings(testStrArr, char));



/*
Write a function that takes a num1 and num2 and returns whether num1 is divisible by num2.
isDivisible(4, 2) // => true  
isDivisible(9, 3) // => true  
isDivisible(15, 4) // => false 
*/

function isDivisible(num1, num2) {
    // is num1 divisible by num2? T/F

    if (num1 % num2 === 0) {
        return true;
    } else return false;
}

console.log(`\nTesting isDivisible`);
console.log(isDivisible(4, 2));
console.log(isDivisible(9, 3));
console.log(isDivisible(15, 4));