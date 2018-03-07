
function addThem() {
    event.preventDefault();
    console.log(event);
    addForm = document.addition;
    var pTag = document.getElementById("addOutput");
    pTag.innerHTML = "Result: "

    var x = addForm.x.valueAsNumber;
    var y = addForm.y.valueAsNumber;
    var sum = x + y; 
    console.log(sum);

    pTag.innerHTML += sum;
    return sum;
}

document.addition.addEventListener("submit", addThem);


function subtractThem() {
    event.preventDefault();
    console.log(event);
    subtractForm = document.subtract;
    var pTag = document.getElementById("subtractOutput");
    pTag.innerHTML = "Result: "

    var x = subtractForm.x.valueAsNumber;
    var y = subtractForm.y.valueAsNumber;
    var diff = x - y; 
    console.log(diff);

    pTag.innerHTML += diff;
    return diff;
}

document.subtract.addEventListener("submit", subtractThem);



function multiplyThem() {
    event.preventDefault();
    console.log(event);
    multiplyForm = document.multiply;
    var pTag = document.getElementById("multiplyOutput");
    pTag.innerHTML = "Result: "

    var x = multiplyForm.x.valueAsNumber;
    var y = multiplyForm.y.valueAsNumber;
    var product = x * y; 
    console.log(product);

    pTag.innerHTML += product;
    return product;
}

document.multiply.addEventListener("submit", multiplyThem);

