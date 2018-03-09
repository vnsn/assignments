function printChar(str) {
    for (var i = 0; i < str.length; i++) {
        console.log(str[i]);
    }
    return str;
}

var testStr = "California"
printChar(testStr);

function firstTime(str, char) {
    for (var i = 0; i < str.length; i++) {
        if (str[i] === char) {
            console.log(i);
            return i;
        }
    }
    console.log("That character wasn't found.");
    return -1;
}

var testChar = "f";
firstTime(testStr, testChar);


function find42(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        if (arr[i] === 42) {
            return;
        }
    }
    console.log("Forty-two wasn't found.");
}

var testArr = [77, 9, 8, 12, 27, 33, 55, 13, 10, 22];
// var testArr = [7, 9, 8, 12, 42, 3, 5, 13, 10, 27];
find42(testArr);


function findSmall(arr) {
    smallest = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    console.log(smallest);
}

findSmall(testArr);

