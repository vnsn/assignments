/*
Write a function that accepts two numbers as parameters, 
and returns the sum.
*/
function makeSum(num1, num2) {
    return num1 + num2;
}

console.log(makeSum(3, 4));

/* 
Write a function that accepts three numbers as parameters, 
and returns the largest of those numbers.
*/
function largestNum(num1, num2, num3) {
    var bigNum = num1;
    if (num2 > bigNum) {
        bigNum = num2;
    }
    if (num3 > bigNum) {
        bigNum = num3;
    }
    return bigNum;
}

console.log(largestNum(5, 8, 13));
console.log(largestNum(8, 5, 13));
console.log(largestNum(8, 13, 5));
console.log(largestNum(5, 13, 8));
console.log(largestNum(13, 8, 5));
console.log(largestNum(13, 5, 8));

/* 
Write a function that accepts one number as a parameter, 
and returns whether that number is even or odd. 
(Return the string "even" or "odd");
*/

function evenOdd(num) {
    if (num % 2 === 0) {
        return "even";
    } else return "odd";
}

console.log(evenOdd(11));

/* 
Write a function that accepts a string as a parameter. 
If the length of the string is less than or equal to 
twenty characters long, return the string concatenated with itself 
(string + string). If the string is more than twenty characters long, 
return the first half of the string.
*/
function longString(str) {
    if (str.length <= 20) {
        return str + str;
    } else return str.slice(0, Math.floor(str.length / 2));
}

console.log(longString("Yay!"));
console.log(longString("These functions are so much fun."));

/* 
 * Optional Challenges
 */

/*
Write a function that accepts a number ‘n’ as a parameter. 
Then print the first ‘n’ Fibonacci numbers and return their sum.
*/

function fibonacci(n, prev = 0, curr = 1, total = 0) {
    // assumes "n" is a positive integer
    // f0 = 0, f1 = 1, f2 = 1, f3 = 2, f4 = 3, f5 = 5, f6 = 8
    // start with i = 2
    // if n = 1, it's 1. sum = 1
    // if n = 2, it's 1, 1. sum = 2
    // if n = 3, it's 1, 1, 2. sum = 4
    // if n = 4, it's 1, 1, 2, 3. sum = 7
    // if n = 5, it's 1, 1, 2, 3, 5. sum = 12
    // fn = f(n-1) + f(n-2)
    if (n > 1) {
        console.log(curr);
        return fibonacci(n - 1, curr, curr + prev, curr + total);
    } else {
        console.log(curr)
        return total + curr;
    }
}

console.log("total: " + fibonacci(6));

/* 
Write a function to solve the quadratic equation. 
(It should accept three numbers as parameters, and then 
return an array with the resulting x values.)
QE: For ax2 + bx + c = 0, (x is squared next to the a) the values of x which are the solutions of the equation are given by:
x =  (-b​ +- sqrt((b * b) - (4 * a * c)) / (2 * a)	 

*/

function quadEquation(a, b, c) {
    var solutions = [];
    var rightSide = Math.sqrt((b * b) - (4 * a * c));
    var plus = (-b + rightSide) / (2 * a);
    solutions.push(plus);
    var minus = (-b - rightSide) / (2 * a);
    solutions.push(minus); 
    return solutions;
}
console.log(`Solutions for x are: ${quadEquation(1, 3, -4)} when a = 1, b = 3, and c = -4.`);   
console.log(`Solutions for x are: ${quadEquation(2, -4, -3)} when a = 2, b = -4, and c = -3.`);   
console.log(`Solutions for x are: ${quadEquation(5, 6, 1)} when a = 5, b = 6, and c = 1.`);   

/* 
Write a function that accepts a string as a parameter. 
Return the most frequently occuring letter in that string.
*/
function freqStr(str) {
    var chars = {};
    chars[str.charAt(0)] = 1;
    // first = str.charAt(0);
    // chars[first] = 1;
    var maxChar = str.charAt(0);
    var maxCount = 1;
    for (var i = 1; i < str.length; i++) {
        if (chars[str.charAt(i)]) {
            chars[str.charAt(i)]++;

        } else {
            chars[str.charAt(i)] = 1;
        }
        if (chars[str.charAt(i)] > maxCount) {
            maxCount = chars[str.charAt(i)];
            maxChar = str.charAt(i);

        }
    }
    return maxChar;
}

/*
function freqStr(str) {
    var chars = {};
    chars[str[0]] = 1;
    var maxChar = str[0];
    var maxCount = 1;
    for (var i = 1; i < str.length; i++) {
        if (chars[str[i]]) {

        } else {
            chars[str[i]] = 1;
        }
        if (chars[str[i]] > maxCount) {
            maxCount = chars[str[i]];
            maxChar = str[i];
        }
    }
    return maxChar;
}
*/

console.log(freqStr("abbcccdddd"));
