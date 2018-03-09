// 1) Make a function that takes a string and returns that string reversed.

function reverseStr(str) {
    var myStr = "";

    for (var i = str.length - 1; i >= 0; i--) {
        myStr += str[i];
    }
    return myStr;
}

var testStr = "Hello World"
console.log("\ntesting reserveStr");
console.log(`${testStr} ==> ${reverseStr(testStr)}`);


// 2) Make a function that takes a string 
// and returns true if the string could be a number, else return false.

function isNum(str) {
 var test = str / 10;
 if (Number.isNaN(test)) {
     return false;
 } else return true;
}

testNum1 = "3";
testNum2 = "three";
console.log("\ntesting isNum");
console.log(`${testNum1}: ${isNum(testNum1)}`);
console.log(`${testNum2}: ${isNum(testNum2)}`);


// 3) Make a function that takes a number and returns true 
// if the number is even, else return false.

function isEven(num) {
    if (num % 2 === 0) {
        return true;
    } else return false;
}

console.log("\ntesting isEven");
console.log(`3: ${isEven(3)}`);
console.log(`4: ${isEven(4)}`);


function arrAvg(arr) {
    var sum = 0;
    // add up all the elements.
    // divide sum by length
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

testArr = [5, -10, 10, 20];

console.log("\ntesting arrAvg");
console.log(`test array: ${testArr} \naverage: ${arrAvg(testArr)}`);


// 5) Make a function that takes two arrays and returns a single array 
// of the items from the arrays added alternatingly.

function combineArr(arr1, arr2) {
    myArr = [];
    var totalItems = arr1.length + arr2.length;

    for (var i = 0; i < totalItems; i++) {
        if (i < arr1.length) {
            myArr.push(arr1[i]);
        }
        if (i < arr2.length) {
            myArr.push(arr2[i]);
        }
        }
    return myArr;
    }

testArr2 = ["a", "b", "c"];
console.log("\ntesting combineArr");
console.log(`test array 1: ${testArr} \ntest array 2: ${testArr2} \ncombined: ${combineArr(testArr, testArr2)}\n`);
