const BLUE = 66;
const RED = 82;
const YELLOW = 89;
const GREEN = 71;
const ORANGE = 79;
const PINK = 80;

mySquare = document.getElementsByClassName("big-square")[0];

// blue when the mouse hovers over the square
mySquare.addEventListener("mouseover", function () {
    mySquare.style.backgroundColor = "blue";
});


// go back to black when the mouse is no longer hovering
mySquare.addEventListener("mouseout", function () {
    mySquare.style.backgroundColor = "pink";
});


// red when the mouse button is held down over the square
mySquare.addEventListener("mousedown", function () {
    mySquare.style.backgroundColor = "red";
});


// yellow when the mouse button is let go over the square
mySquare.addEventListener("mouseup", function () {
    mySquare.style.backgroundColor = "yellow";
});


// green when the mouse is double clicked in the square
mySquare.addEventListener("dblclick", function () {
    mySquare.style.backgroundColor = "green";
});


// orange when the mouse scroll is used somewhere in the window (not just over the square)
window.addEventListener("scroll", function () {
    mySquare.style.backgroundColor = "orange";
});


// you should also be able to press the first letter of the above colors 
// and have the box change to that color
document.addEventListener("keydown", changeColor);

function changeColor(event) {
    console.log(event.which);
    switch (event.which) {
        case BLUE:
            mySquare.style.backgroundColor = "blue";
            break;
        case RED:
            mySquare.style.backgroundColor = "red";
            break;
        case YELLOW:
            mySquare.style.backgroundColor = "yellow";
            break;
        case GREEN:
            mySquare.style.backgroundColor = "green";
            break;
        case ORANGE:
            mySquare.style.backgroundColor = "orange";
            break;
        case PINK:
            mySquare.style.backgroundColor = "pink";
    }
}