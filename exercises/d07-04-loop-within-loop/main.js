var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];  
var alphabet = "abcdefghijklmnopqrstuvwxyz";  
var myArr = [];

for (var i = 0; i < people.length; i++) {
    myArr.push(`${people[i]}:`);
    for (var j = 0; j < alphabet.length; j++) {
        myArr.push(alphabet[j].toUpperCase());
    }
}

console.log(myArr);

