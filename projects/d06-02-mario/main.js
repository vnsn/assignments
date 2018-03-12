// get number of each pest caught from the page
// calculate total cost based on prices for each pest - defined as constants

// update the Total Price as numbers are typed into each field. 
// don't wait for a form submission

var goombas = document.goomba.num;
var bobs = document.bob.num;
var cheeps = document.cheep.num;


goombas.addEventListener("input", calcCost);
bobs.addEventListener("input", calcCost);
cheeps.addEventListener("input", calcCost);

function calcCost() {
    const GOOMBAFEE = 5;
    const BOBFEE = 7;
    const CHEEPFEE = 11;

    var goombaNum = 0;      // number of goombas entered on page
    var bobNum = 0;         // number of bob-ombs entered on page
    var cheepNum = 0;       // number of cheep-cheeps entered on page
    var sum = 0;

    var outputField = document.getElementById("total");

    if (goombas.value <= 0) {
        goombaNum = 0;
    } else goombaNum = Number.parseInt(goombas.value);

    if (bobs.value <= 0) {
        bobNum = 0;
    } else bobNum = Number.parseInt(bobs.value);

    if (cheeps.value <= 0) {
        cheepNum = 0;
    } else cheepNum = Number.parseInt(cheeps.value);

    sum += (goombaNum * GOOMBAFEE) + (bobNum * BOBFEE) + (cheepNum * CHEEPFEE);
    outputField.innerHTML = sum;

    return sum;
}
