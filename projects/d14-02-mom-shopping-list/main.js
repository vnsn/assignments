var myList = document.getElementById("mylist");
var inputForm = document.submit;

if (typeof (Storage) !== "undefined") {
    var myDataArr = JSON.parse(localStorage.getItem("Mom")) || [];
    // console.log("i just GOT this:");
    // console.log(myDataArr);
    if (myDataArr !== null) {
        if (myDataArr.length !== 0) {
            myDataArr.forEach(function (item) {
                displayTodos(item);
            })
        }
    }
} else {
    console.log("no storage support");
}

function setLocal() {
    localStorage.setItem("Mom", JSON.stringify(myDataArr));
    // console.log("i just SET this:");
    // console.log(JSON.parse(localStorage.getItem("Mom")));
}

function deleteTodo(itemId) {
    itemLi = document.getElementById(itemId);
    myList.removeChild(itemLi);
    myDataArr.splice(myDataArr.indexOf(itemId), 1);
    setLocal();
};

function displayTodos(str) {
    var li = document.createElement("li");
    li.id = str;
    var delButton = document.createElement("button");
    delButton.innerText = "X";

    //if DEL is clicked, remove the item from the db and the website
    delButton.addEventListener("click", function (event) {
        event.preventDefault();
        deleteTodo(event.target.parentNode.id);
    });

    var span = document.createElement("span");
    span.innerText = str;

    li.appendChild(delButton);
    li.appendChild(span);

    // add each to do list item to the DOM
    myList.appendChild(li);
}

function addToDo(event) {
    event.preventDefault();
    newTodo = inputForm.todo.value;
    myDataArr.push(newTodo);
    displayTodos(newTodo);
    setLocal();
    inputForm.reset();
}

inputForm.addEventListener("submit", addToDo);
