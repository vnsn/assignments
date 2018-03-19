// the axios.get is a "Promise" (will define later)

var dbURL = 'https://api.vschool.io/jen/todo/';

var myList = document.getElementById("mylist");
var inputForm = document.submit;

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
    delButton.innerText = "X";

   //if DEL is clicked, remove the item from the db and the website
    delButton.addEventListener("click", function(event) {
        event.preventDefault();
        deleteTodo(event.target.parentNode.id);
    });

    var span = document.createElement("span");
    span.innerText = ` ${myObj.title}`;

    li.appendChild(delButton);
    // li.appendChild(checkBox);
    li.appendChild(span);

    // add each to do list item to the DOM
    myList.appendChild(li);
}

axios.get(dbURL).then(function (response) {
    var myDataArr = response.data;
    if (myDataArr.length === 0) {
        var msg = document.createElement("p");
        msg.innerHTML = "Nothing to buy!";
        myList.appendChild(msg);
    } else {
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

    axios.post(dbURL, newTodo).then(function (response) {
        displayTodos(response.data);
        submit.reset();
    });
}

inputForm.addEventListener("submit", addToDo);
