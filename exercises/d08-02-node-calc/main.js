var rs = require("readline-sync");

// prompts
  // get one num
  // get another num
  // choose operation

var x = rs.questionFloat("Please enter your first number: ");
var y = rs.questionFloat("Please enter your second number: ");

// chooser function

var options = ["add", "subtract", "multiply", "divide"];
var index = rs.keyInSelect(options, "Which operation do you want to perform? ");

var myResult = 0;

switch(index) {
    case 0:
        myResult = add(x, y);
        break;
    case 1:
        myResult = sub(x, y);
        break;
    case 2:
        myResult = mul(x, y);
        break;
    case 3: 
        myResult = div(x, y);
        break;
    default:
        console.log("You're a dummy.");
}

console.log(`The result is ${myResult}.`);

// arithmetic functions
function add(x, y) {
    return x + y;
}

function sub(x, y) {
    return x - y;
}

function mul(x, y) {
    return x * y;
}

function div(x, y) {
    return x / y;
}

