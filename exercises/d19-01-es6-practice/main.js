/* Replace all the vars with let and const
John is the pet owner, and his name should be stored differently than the other names. */

const name = 'John'  
let age = 101  
let pets = ["cat", "dog"]
let petObjects = []

for (let i = 0; i < pets.length; i++){  
  let pet = {type: pets[i]}
  if (pets[i] === "cat"){
    let name = "fluffy"
  } else {
    let name = "spot"
  }
  pet.name = name
  petObjects.push(pet)
}



/* 
ES6 Functions
Fat arrow functions.
Re-write this .map() using a fat arrow function:
Be aware that if JavaScript sees a { directly after the => it will think it's starting a function, and not starting an object, so the : will be an unexpected symbol.
 */

// var carrots = [];
// const vegetables = carrots.map(carrot => ({
//     type: "carrot", 
//     name: carrot
// }))


/* re-write this .filter() using a fat arrow function: */
// var people = [];
// friends = people.filter(person => !!person.friendly);


/* re-write the following functions to be fat arrow functions: */
// function doMathSum(a, b){  
//     return a + b
// }

// console.log(doMathSum(1, 2));

// const doMathSum2 = (a, b) => a + b;
// console.log(doMathSum2(3, 4));


// var produceProduct = function(a, b){  
//     return a * b
// }
// console.log(produceProduct(2, 2));

// const produceProduct2 = (a, b) => a * b;
// console.log(produceProduct2(3, 3));


/* 
write a functions that takes a firstName, a lastName, an age and returns a string like the following: 
Hi Kat Stark, how does it feel to be 40?

firstName should default to "Jane" 
lastName should default to "Doe" 
age should default to 100
*/

// const youOld = (firstName = "Jane", lastName = "Doe", age = 100) => `Hi ${firstName} ${lastName}, how does it feel to be ${age}?`;

// console.log(youOld());
// console.log(youOld("Kat", "Stark", 40));


/*
Use the shorthand syntax to make the following code block take up one line.
 */
// var animals = [{name: "Fido", type: "dog"}, {name: "Fluffy", type: "cat"}];

// const dogs = animals.filter((animal)=>{  
//   if (animal.type === "dog"){
//     return true
//   } else {
//     return false
//   }
// })

// console.log(dogs);

// const dogs2 = animals.filter(animal => animal.type === "dog");
// console.log(dogs2);



/* With Template Literals...
Write a function that will take location and name and output this if location="Hawaii" and name="Janice": */
function welcomeHawaii(location, name) {
    if (location === "Hawaii" && name === "Janice") {
        console.log(`Hi ${name}! \n\nWelcome to ${location}. \n\nI hope you enjoy your stay. Please ask the president of Hawaii if you need anything.\n\n`);
    } else {
        console.log(`Hi ${name}. You aren't special enough for a special message. Have fun in ${location}.\n`);
    }
    return;
}

// welcomeHawaii("Hawaii", "Janice");
// welcomeHawaii("Hawaii", "Jane");
// welcomeHawaii("Nebraska", "Janice");
// welcomeHawaii("Nebraska", "Jane");

