function assertEqual(actual, expected) {
    if (actual !== expected) {
        throw {
            type: "Fail",
            details: {
                actual: actual, 
                expected: expected,
                msg: "expected " + actual + " to equal " + expected, 
            }
        };
    } else {
        console.log("Success!", {
            type: "Succes",
            details: {
                actual: actual,
                expected: expected,
            }
        })
    }
}

function describe(message, testFunc) {
    console.log(`Test being run: ${message}`);
    try {
        testFunc();
    } catch (err) {
        console.log(err)
    }
}

function sum(x, y) {
    return x + y;
}

describe("Sum function", function() {
    assertEqual(sum(6,4), 10);
    assertEqual(sum(7,4), 11);
    assertEqual(sum(8,4), 12);
})




function helperCallbForFilt (strInp) {
    var countC = 0;
    var countO = 0;
    var countE = 0;
    for (var i = 0; i < strInp.length; i++) {
        if (strInp[i] === "c") {
            countC++;
        } else if (strInp[i] === "o") {
            countO++;
        } else if (strInp[i] === "e") {
            countE++;
        }
    }
    if ((countC + countE + countO) % 3 === 0) {
        return (countC + countE + countO) / 3;
    }
 }


 describe("Find code", function() {
    assertEqual(helperCallbForFilt(testCases.case0), 1);
    assertEqual(helperCallbForFilt(testCases.case1), 2);
    assertEqual(helperCallbForFilt(testCases.case2), 2);
    assertEqual(helperCallbForFilt(testCases.case3), 5);
    assertEqual(helperCallbForFilt(testCases.case4), 0);
})

var testCases = {
    case0: "aaacopebbb",
    case1: "codexxcode",
    case2: "cozexxcope",
    case3: "cozexxcope CODE COZE COPE CO1E",
    case4: "co-exxco1e"
}

// in the actual code file, have to put 

module.exports = helperCallbForFilt;
