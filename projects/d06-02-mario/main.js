// update the Total Price as numbers are typed into each field. 
// don't wait for a form submission

document.goomba.num.addEventListener("input", calcCost);
document.bob.num.addEventListener("input", calcCost);
document.cheep.num.addEventListener("input", calcCost);

function calcCost() {
    const GFEE = 5;
    const BFEE = 7;
    const CFEE = 11;

    var gNum = 0;
    var bNum = 0;
    var cNum = 0;    
    var sum = 0;

    var outputField = document.getElementById("total");

    if (document.goomba.num.value <= 0) {
        gNum = 0;
    } else gNum = Number.parseInt(document.goomba.num.value);

    if (document.bob.num.value <= 0) {
        bNum = 0;
    } else bNum = Number.parseInt(document.bob.num.value);

    if (document.cheep.num.value <= 0) {
        cNum = 0;
    } else cNum = Number.parseInt(document.cheep.num.value);

    sum += (gNum * GFEE) + (bNum * BFEE) + (cNum * CFEE);
    outputField.innerHTML = sum;

    return sum;
}
