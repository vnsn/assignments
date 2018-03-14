// part 1
function sum(x, y){  
  //check data types first and throw error
  if (typeof x !== "number" || typeof y !== "number") {
    throw "Give two numbers";
  }
  return x + y;
}

try {
    console.log("\nTesting sum with '1' and '2' (strings)......");
    console.log(sum("1", "2"));
} catch(err) {
    console.log(err);
    // err.message works on error objects. but ours is just a string.
}

try {
    console.log("\nTesting sum with 1 and 2 (numbers))......");
    console.log(sum(1, 2));
} catch(err) {
    console.log(err);
    // err.message works on error objects. but ours is just a string.
}

// part 2

var user = {
    username: "sam", 
    password: "123abc"
    };  

function login(name, pass) {
    if ((name === user.username) && (pass === user.password)) {
      console.log("Login successful!");
    } else {
        throw "Email or password don't match.";
    }
}

var testUser1 = "sam";
var testPass1 = "123abc";

var testUser2 = "sma";
var testPass2 = "abc123";

try {
    console.log("\nTesting login w/ correct creds......");
    login(testUser1, testPass1);
} catch(err) {
    console.log(err);
}

try {
    console.log("\nTesting login w/ incorrect creds......");
    login(testUser2, testPass2);
} catch(err) {
    console.log(err);
}
