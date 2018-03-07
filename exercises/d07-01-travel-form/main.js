
var loginForm = document.login;
var nameInput = loginForm.firstName;

var data = {
    firstName: "",
    lastName: "",
    age: 0,
    gender: "",
    location: "",
    dietary: []
};

var titleCaseIt = function(str) {
    return str.split(" ").map(function(item) {
        return item[0].toUpperCase() + item.slice(1);
    }).join(" ");
}

function setDiet(event){
    if (event.target.checked) {
        data.dietary.push(titleCaseIt(event.target.name));
    } else {
        // remove from array if not checked
        var index = data.dietary.indexOf(event.target.name);
        data.dietary.splice(index, 1);
    }
}


loginForm.vegetarian.addEventListener("change", setDiet);
loginForm.vegan.addEventListener("change", setDiet);
loginForm.kosher.addEventListener("change", setDiet);
loginForm["lactose-free"].addEventListener("change", setDiet);
loginForm["gluten-free"].addEventListener("change", setDiet);
loginForm["grain-free"].addEventListener("change", setDiet);

loginForm.addEventListener("submit", function() {
    event.preventDefault();
    data.firstName = loginForm.firstName.value;
    data.lastName = loginForm.lastName.value;
    data.age = loginForm.age.valueAsNumber;
    data.gender = titleCaseIt(loginForm.gender.value);
    data.location = titleCaseIt(loginForm.location.value);


    console.log(data);
    console.log(event);

    alert(` First Name: ${data.firstName} \n Last name: ${data.lastName} \n Age: ${data.age} \n Gender: ${data.gender} \n Location: ${data.location} \n Dietary restrictions: ${data.dietary.join(", ")} \n `);

} )