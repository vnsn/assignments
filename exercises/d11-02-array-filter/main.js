function fiveAndGreater(numbers) {
    return numbers.filter(function(num) {
        return num >= 5;
    })
}

console.log(fiveAndGreater([3, 6, 8, 2, 11, 1, 5])); 
/// [6, 8, 11, 5]  


// #2
function evensOnly(arr) {
    return arr.filter(function(num) {
        if (num % 2 === 0) {
            return num;
        }
    })
}

console.log(evensOnly([3, 6, 8, 5, 2, 7])); /// [6, 8, 2]  


// #3
function fiveCharactersOrFewerOnly(arr) {
    return arr.filter(function(str) {
        if (str.length <= 5) {
            return str;
        }
    })
}

var fiveCharTest = ["dog", "wolf", "by", "family", "eaten", "camping"];

console.log(fiveCharactersOrFewerOnly(fiveCharTest));
// ["by", "dog", "wolf", "eaten"]  


// #4
function peopleWhoBelongToTheIlluminati(arr){
    return arr.filter(function(obj) {
        if (obj.member) {
            return obj.name;
        }
    })
}

var clubTest = [  
    {
        name: "Angelina Jolie",
        member: true
    },
    {
        name: "Eric Jones",
        member: false
    },
    {
        name: "Paris Hilton",
        member: true
    },
    {
        name: "Kayne West",
        member: false
    },
    {
        name: "Bob Ziroll",
        member: true
    }
];

console.log(peopleWhoBelongToTheIlluminati(clubTest));


// #5
function ofAge(arr){
    return arr.filter(function(obj) {
        if (obj.age > 17) {
            return obj.name;
        }
    })
}


var ageTest = [  
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]

console.log(ofAge(ageTest));

// reduce
// compact an array down to 1 value.
// under the hood
function myReduce(arr, callback, initialVal) {
    var total = initialVal || arr[0];  // if not given, starts at arr[0]
    for (var i = initialVal ? 0 : 1; i < arr.length; i++) {
        total = callback(total, arr[i]);
    }
    return total;
}

function addTogether(total, val) {
    return total + val;
}

var reduceTest = [1, 2, 3, 4, 5];
console.log(myReduce(reduceTest, addTogether));
