if (5 > 3) {
    console.log("is greater than");
}

if ("cat".length === 3) {
    console.log("is the length");
}

if ("cat" === "dog") {
    console.log("the same");
} else {
    console.log("not the same");
}

var person = {  
    name: "Bobby",
    age: 12
}

if (person.age > 18) {
    console.log(`${person.name} is allowed to got to the movie`);
} else {
    console.log(`${person.name} is not allowed to got to the movie`);
}

// can also use person.name.charAt(0) instead of person.name[0] 
if (person.name[0] === "B" ) {
    console.log(`${person.name} is allowed to got to the movie`);
} else {
    console.log(`${person.name} is not allowed to got to the movie`);
}

if ((person.age > 18) && (person.name[0] === "B")) {
    console.log(`${person.name} is allowed to got to the movie`);
} else {
    console.log(`${person.name} is not allowed to got to the movie`);
}

if (1 === "1") {
    console.log("strict");
} else if (1 == "1") {
    console.log("loose");
} else {
    console.log("not equal at all");
}

if ((((1 <= 2) && (2 === 4))) || (((3 * 4) > 10) && ((5 + 10) > 10))) {
    console.log("yes");
}

if (typeof "dog" === "string") {
    console.log("dog is a string");
}

if (typeof "true" === "boolean") {
    console.log("'true' is a boolean");
} else {
    console.log("'true' is a not boolean");
}

var fakeVar;
if (typeof fakeVar === "undefined") {
    console.log("variable fakeVar is NOT defined");
} else {
    console.log("variable fakeVar is defined");
}


if ("s" > 12) {
    console.log("s is greater than 12")
} else {
    console.log("s is NOT greater than 12")
}


if ("s" < "z") {
    console.log("s is less than z")
} else {
    console.log("s is NOT less than z")
}

if ("s" > "e") {
    console.log("s is greater than e")
} else {
    console.log("s is NOT greater than e")
}

var myNum = 10;  
(myNum % 2 === 0) ? console.log("number is even") : console.log("number is odd");

/* 
if (myNum % 2 === 0) {
    console.log("number is even");
} else {
    console.log("number is odd");
} 
*/
