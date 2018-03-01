
for (var i = 0; i <= 9; i++) {
    console.log(i);
}

for (var i = 9; i >= 0; i--) {
    console.log(i);
}

var fruit = ["banana", "orange", "apple", "kiwi"];
for (var i = 0; i < fruit.length; i++) {
    console.log(fruit[i]);
}

myArray = [];
for (var i = 0; i <= 9; i++) {
    myArray.push(i);
}

for (var i = 0; i <= 100; i += 2) {
    console.log(i);
}

var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"];
for (var i = 0; i < fruit.length; i += 2) {
    console.log(fruit[i]);
}

var peopleArray = [  
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
]

for (var i = 0; i < peopleArray.length; i++) {
    console.log(peopleArray[i].name);
}

var names = [];
var occupations = [];

for (var i = 0; i < peopleArray.length; i++) {
    names.push(peopleArray[i].name);
    occupations.push(peopleArray[i].occupation);
}

console.log(names);
console.log(occupations);

var otherNames = [];
var otherOccupations = [];

for (var i = 0; i < peopleArray.length; i += 2) {
    otherNames.push(peopleArray[i].name);
    otherOccupations.push(peopleArray[i + 1].occupation);
    
}

console.log(otherNames);
console.log(otherOccupations);

var grid1Arr = [];
for (var i = 0; i < 3; i++) {
    grid1Arr.push([]);
    for (var j = 0; j < 3; j++) {
        grid1Arr[i][j] = 0;
    }
}
console.log(grid1Arr);

var grid2Arr = [];
for (var i = 0; i < 3; i++) {
    grid2Arr.push([]);
    for (var j = 0; j < 3; j++) {
        grid2Arr[i][j] = i;
    }
}
console.log(grid2Arr);


var grid3Arr = [];
for (var i = 0; i < 3; i++) {
    grid3Arr.push([]);
    for (var j = 0; j < 3; j++) {
        grid3Arr[i][j] = j;
    }
}
console.log(grid3Arr);

var grid = [[0, 1, 2], 
[0, 1, 2], 
[0, 1, 2]]
for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid[i].length; j++) {
        grid[i][j] = ("X");
    }
}
console.log(grid);
