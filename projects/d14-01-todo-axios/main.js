// the axios.get is a "Promise" (will define later)

var dbURL = 'https://api.vschool.io/jen/todo/';

var myList = document.getElementById("mylist");
var inputForm = document.submit;

function checkUncheck(itemId, isComplete) {
    // console.log("checkUncheck got called!");    
    // console.log(itemId);

    var itemLabel = document.getElementById(itemId);
    axios.put(dbURL + itemId, { completed: isComplete }).then(function (response) {
        if (isComplete) {
            console.log("in the if - i should be checked");
            itemLabel.style.textDecoration = "line-through";
        } else {
            console.log("in the else - i should be unchecked");
            itemLabel.style.textDecoration = "none";
        }
    });
}

function deleteTodo(itemId) {
    itemLi = document.getElementById(itemId);
    axios.delete(dbURL + itemId).then(function(response){
        console.log(itemId);
        myList.removeChild(itemLi);
    })
};

function displayTodos(myObj) {
    var li = document.createElement("li");
    li.id = myObj._id;

    var delButton = document.createElement("button");
    delButton.innerText = "DEL";

   //if DEL is clicked, remove the item from the db and the website
    delButton.addEventListener("click", function(event) {
        event.preventDefault();
        // console.log(event);
        deleteTodo(event.target.parentNode.id);
    });

    var checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    // checkBox.id = myObj._id;
    checkBox.name = myObj.title;  // not REALLY needed?

    var checkLabel = document.createElement("label");
    // checkLabel.htmlFor = checkBox.id;
    checkLabel.innerText = ` ${myObj.title}: ${myObj.description || ""} (price: ${myObj.price || ""})`;
    checkBox.checked = myObj.completed;

    if (myObj.completed) {
        console.log("in the if - i should be checked");
        checkLabel.style.textDecoration = "line-through";
    } else {
        console.log("in the else - i should be unchecked");
        checkLabel.style.textDecoration = "none";
    }

    li.appendChild(delButton);
    li.appendChild(checkBox);
    li.appendChild(checkLabel);

    if (myObj.imgUrl) {
        var image = document.createElement("img");
        image.src = myObj.imgUrl;
        image.alt = myObj.title;
        // image.id = myObj._id + pic;
        // image.style.opacity = 0.7;
        li.appendChild(image);
    }


    // event listener for checking / unchecking items off
    checkBox.addEventListener("change", function(event) {
        event.preventDefault();
        checkUncheck(event.target.parentNode.id, event.target.checked);
    })

    // add each to do list item to the DOM
    myList.appendChild(li);
}

axios.get(dbURL).then(function (response) {
    var myDataArr = response.data;
    if (myDataArr.length === 0) {
        var msg = document.createElement("p");
        msg.innerHTML = "You have nothing to do!";
        myList.appendChild(msg);
    } else {
        // console.log(response.data);
        myDataArr.forEach(function (myObj) {
            displayTodos(myObj)
        });
    }
});

function addToDo(event) {
    event.preventDefault();
    var newTodo = {
        title: ""
    };
    newTodo.title = inputForm.todo.value;

    if (inputForm.description.value !== "") {
        newTodo.description = inputForm.description.value;
    };
    if (inputForm.price.value !== "") {
        newTodo.price = inputForm.price.value;
    };
    if (inputForm.imgURL.value !== "") {
        newTodo.imgUrl = inputForm.imgURL.value;
    };

    axios.post(dbURL, newTodo).then(function (response) {
        displayTodos(response.data);
        submit.reset();
    });
}

inputForm.addEventListener("submit", addToDo);



/* 
axios.post('https://api.vschool.io/jen/todo', {title: "Steal Ben's hat"}).then(function(response) {
    console.log(response.data);
});


axios.post('https://api.vschool.io/jen/todo', newTodo).then(function(response) {
    console.log(response.data);
 });
 */



/*
// the axios.get is a "Promise" (will define later)
axios.get('https://swapi.co/api/people/1').then(function(response) {
    // below is what will happen when the promise is done
    console.log(response.data.results[0].hair_color);  // Luke Skywalker's hair color
    var people = response.data;

    // reminder: ANYTHING you want to happen AFTER the promise or with the promise response needs to be inside the .then.
});

To use axios in node, need this at top of page:
// var axios = require("axios"); 


To include axios stuff on a web page (https://github.com/axios/axios):
In the HTML file, include 
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
Then JS file doesn't need the "require" statement. And it parses the JSON for us.
And you'll need to stuff results into an HTML element on the page.

To see the JSON version of the data: 
console.log(JSON.stringify(response.data)); 

*/