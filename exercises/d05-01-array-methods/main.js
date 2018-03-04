/* 
After every command, console.log() your arrays.
If you've done everything correctly, the last step should print the following to the console:
3,pepper,1,watermelon,orange,apple 
*/

var fruit = ["banana", "apple", "orange", "watermelon"];  
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];  

console.log("=== initialize ===");
console.log("fruit: ", fruit);  
console.log("vegetables: ", vegetables); 
console.log(" ");


// 1
// .pop()
// modifies the array by removing the last item. returns the element popped.
console.log("=== 1. Remove the last item from the vegetable array. ===");
vegetables.pop();
console.log("fruit: ", fruit);  
console.log("vegetables: ", vegetables); 
console.log(" ");

// 2
// .shift()
// modifies the array by removing the FIRST item. returns the element shifted out.
// conversely, .unshift() modifies the array by adding one or more items to the FRONT of the array and returns the new length.
console.log("=== 2. Remove the first item from the fruit array. ===");
fruit.shift();
console.log("fruit: ", fruit);  
console.log("vegetables: ", vegetables);
console.log(" ");

// 3
// .indexOf(item)  
// Doesn't modify the array.
// Returns the first index at which a given element can be found in the array, 
// or -1 if it is not present.
console.log("=== 3. Find the index of 'orange.' ===");
console.log(`index of orange: ${fruit.indexOf("orange")}`);
console.log("fruit: ", fruit);  
console.log("vegetables: ", vegetables);
console.log(" ");

/* 
.lastIndexOf(item[, fromIndex])
Returns the last index at which a given element can be found in the array, 
or -1 if it is not present. 
The array is searched backwards, starting at fromIndex 
(or the end of the array if fromIndex is omitted).
*/

// 4
// .push(item[s])
// modifies the array by adding one or more elements and returns the new length of the array.
console.log("=== 4. Add that number to the end of the fruit array. ===");
fruit.push(fruit.indexOf("orange"));
console.log("fruit: ", fruit);  
console.log("vegetables: ", vegetables);
console.log(" ");

// 5 
console.log("=== 5. Use the length property to find the length of the vegetable array. Log that to the console. ===");
console.log(vegetables.length);
console.log("fruit: ", fruit);  
console.log("vegetables: ", vegetables);
console.log(" ");

// 6
console.log("=== 6. Add that number to the end of the vegetable array. ===");
vegetables.push(vegetables.length);
console.log("fruit: ", fruit);  
console.log("vegetables: ", vegetables);
console.log(" ");

// 7
// .concat(array[s])
// does not modify the existing arrays. returns a new array.
var food = fruit.concat(vegetables);
console.log("=== 7. Put the two arrays together into one array. Fruit first. Call the new Array 'food'. ===");
console.log("food: ", food);
console.log("fruit: ", fruit);  
console.log("vegetables: ", vegetables);
console.log(" ");


// 8
// .splice(startingIndex, numberToRemove[, itemsToInsert])
// changes the contents of an array by removing existing elements and/or adding new elements.
food.splice(4, 2);
console.log("=== 8. Remove 2 elements from your new array starting at index 4 with one method. ===");
console.log("food: ", food);
console.log(" ");

/* 
not used in this exercise, but need to remember:
.slice(startIndex [, endIndex])
Returns a shallow (non-destructive) copy of a portion of an array into 
a new array object selected from begin to end (end not included). 
The original array will not be modified.

The second parameter is optional. If omitted, endIndex defaults through the end of the array. 
If provided, it specifies the non-inclusive ending point of the slice. 
(The item at the index of endIndex will NOT be included in the new array).
*/

// 9 
// .reverse()
// works in place, modifying the original array
food.reverse();
console.log("=== 9. Reverse your array. ===");
console.log("food: ", food);
console.log(" ");

// 10
// .join(separator)
// joins all elements of array into string and returns the string
// separates by commas if separator is omitted
console.log("=== 10. Log your array as a string to the console. ===");
console.log(food.join());
console.log(" ");


/* 
Examples of .splice(startingIndex, numberToRemove[, itemsToInsert])

var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];

// remove 1 element from index 2
var removed = myFish.splice(2, 1);  
// myFish is ['angel', 'clown', 'sturgeon']
// removed is ['mandarin']

// remove 0 elements from index 2, and insert 'drum'
var removed2 = myFish.splice(2, 0, 'drum');  
// myFish is ['angel', 'clown', 'drum', 'sturgeon']
// removed is [], no elements removed

// remove 1 element from index 2, and insert 'trumpet'
var removed3 = myFish.splice(2, 1, 'trumpet');  
// myFish is ['angel', 'clown', 'trumpet', 'sturgeon']
// removed is ['drum']

// removes 2 elements starting from index 0, and inserts 'parrot', 'anemone' and 'blue'
var removed4 = myFish.splice(0, 2, 'parrot', 'anemone', 'blue');  
// myFish is ['parrot', 'anemone', 'blue', 'trumpet', 'sturgeon']
// removed is ['angel', 'clown']

*/