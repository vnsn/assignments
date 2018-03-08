var readlineSync = require("readline-sync");

var firstName = readlineSync.question("Hello! My name is Janet. What is your first name? ");
var lastName = readlineSync.question("And what is your last name? ");


console.log("Nice to mee you " + firstName.toUpperCase() + " " + lastName.toUpperCase() + "!");

var age = readlineSync.question("\nI'm 21 years old. How old are you? ");

var bio = readlineSync.question("Sweet! Maybe we can be friends. \n\nTell me a little about yourself and I'll repeat back what I remember. ");

console.log(`Your bio is ${bio.length} characters long!`);

// if bio > 20 chars print the last 1/2
if (bio.length > 20) {
    console.log(`Here is the last half: \n ${bio.slice((Math.floor(bio.length / 2)))}`);
} else console.log(`Here is what you said: ${bio}`);

// let the user choose where to starting repeating bio [0 - bio.length]
var start = readlineSync.questionInt(`\nWould you like me to start from somewhere else in your bio? Choose a number in the range [0 - ${bio.length}]: `);

// print the bio from index given by start to the bio.length - 1

console.log(`\nHere you go:\n${bio.slice(start)}`);


var likeCats = readlineSync.keyInYN("\nThanks for telling me a little about yourself. \nLast question - Do you like cats? ");
if (likeCats) {
    console.log("I like cats too! Let's be friends!\n")
} else {
    var likeAnimals = readlineSync.keyInYN("I'm not sure if we can be friends. Do you like other animals? ");
    if (likeAnimals) {
        console.log("OK, then we can be friends!\n");
    } else {
        console.log("Hmm, I thought only sociopaths don't like animals. We can't be friends. Bye!\n");
    }
}

/* 

var options = ["menu", "tools", "help"];
var index = readlineSync.keyInSelect(options, "What would you like to do next?");
console.log(`You are now in the ${options[index]} section.`);

*/
