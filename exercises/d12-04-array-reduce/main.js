// 1) Turn an array of numbers into a total of all the numbers
function total(arr) {
    return arr.reduce(function(sum, val) {
        return sum + val;
    })
}

console.log(total([1,2,3]));
 // 6  


// 2) Turn an array of numbers into a long string of all those numbers.
function stringConcat(arr) {
    return arr.reduce(function(str, item) {
        item = item.toString();
        return str + item;
    })
}

console.log(stringConcat([1,2,3])); 
// "123" 

//3) Turn an array of voter objects into a count of how many people voted
function totalVotes(arr) {
    return arr.reduce(function(count, item) {
        if (item.voted) {
            count++;
        }
        return count;
    }, 0);
}

var voters = [  
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

console.log(totalVotes(voters)); 
// 7  

// 4) Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once
function shoppingSpree(arr) {
    return arr.reduce(function(total, val) {
        return total + val.price;
    }, 0);
}

var wishlist = [  
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

console.log(shoppingSpree(wishlist)); 
// 227005  

// 5) Given an array of arrays, flatten them into a single array
function flatten(arr) {
    return arr.reduce(function(bigArr, item) {
        return bigArr.concat(item);
    })
}

var arrays = [  
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

console.log(flatten(arrays)); 
// ["1", "2", "3", true, 4, 5, 6];  


// 6) Given an array of potential voters, return an object representing the results of the vote
/* 
Include how many of the potential voters were in the ages 18-25, how many from 26-35, how many from 36-55, and how many of each of those age ranges actually voted. The resulting object containing this data should have 6 properties. See the example output at the bottom.
 */

var voters = [  
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

function voterResults(arr) {
    output = {
        youthVotes: 0,
        youth: 0,
        midVotes: 0,
        mids: 0,
        wiseVotes: 0,
        wise: 0
    };

    // count potential voters
    output.youth = arr.reduce(function(count, item) {
        if (item.age >= 18 && item.age <= 25) {
            count++;
        }
        return count;
    }, 0);

    output.mids = arr.reduce(function(count, item) {
        if (item.age >= 26 && item.age <= 35) {
            count++;
        }
        return count;
    }, 0);

    output.wise = arr.reduce(function(count, item) {
        if (item.age >= 36) {
            count++;
        }
        return count;
    }, 0);

    // count the votes per age group
    output.youthVotes = arr.reduce(function(count, item) {
        if ((item.age >= 18 && item.age <= 25) && item.voted) {
            count++;
        }
        return count;
    }, 0);

    output.midVotes = arr.reduce(function(count, item) {
        if ((item.age >= 26 && item.age <= 35) && item.voted) {
            count++;
        }
        return count;
    }, 0);

    output.wiseVotes = arr.reduce(function(count, item) {
        if ((item.age >= 36) && item.voted) {
            count++;
        }
        return count;
    }, 0);

    return output;
}

console.log(voterResults(voters));
// Returned value shown below:  
/*
{ youngVotes: 1,
  youth: 4,
  midVotes: 3,
  mids: 4,
  oldVotes: 3,
  olds: 4 
}
*/


// Extra Credit
/*
Using AJAX, do a GET request to your own Github repositories endpoint. The URL will be https://api.github.com/users/<YOUR GITHUB USERNAME HERE>/repos.

Once you get the data, use .reduce() to figure out how many watchers you have across all of your repositories. Don't be too disappointed if the number is 0. You're still new at this :)

Note: If you've learned how to use the axios library, you can do this in node. 
*/

/* 
Doesn't work yet. Haven't learned the right access method yet.

 request("https://api.github.com/users/vnsn/repos", function(err, response, body) {
        var data = JSON.parse(body);
        console.log(data);
    }
)

*/