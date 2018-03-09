var rs = require("readline-sync");
var keepPlaying = true;
var keyFound = false;

console.log("\nWelcome! <THUD!> That was the sound of you being locked in this room."); 
console.log("There are no windows and only half a tealight's worth of candlelight left. <DUN> <DUN> <DUN>");
console.log("You need to get out of here before your claustrophobia kicks in!");
console.log("It's dark in here, but you look around and see some furniture and a dark hole in one of the brick walls.");
console.log("\nYou have a few options here:");


function playTheGame() {

    var options = ["Try the door.", "Put your hand in the dark hole in the wall.", "Look around.", "Curl up in a ball and cry."];
    var index = rs.keyInSelect(options, "What do you want to do?  ");

    switch (index) {
        case 0:
            if (keyFound) {
                console.log(`\n\nCongratulations! The key worked, the door opened, and you're free! Come again soon!\n`);  
                keepPlaying = false;  
            } else console.log(`\n\nThe door is locked. Try again.`);
            break;
        case 1:
            console.log(`\n\nA monster grabbed your arm, popped out of the hole and ate you. Better luck in your next life.\n\n`);
            keepPlaying = false;
            break;
        case 2:
            if (keyFound) {
                console.log(`You already found the key! Maybe try using it?`);
            } else console.log(`\n\nYou see a ${getRandStr()}`);
            // console.log(`\n\nYour choice was ${options[index]}. You'll get some results here soon.`);
            // choose a "random" result with another menu. 
            break;
        case 3:
            if (keyFound) {
                console.log(`You already found the key! Maybe try using it?`);
            }  else console.log(`\n\nCrying won't get you out of here and your tears will feed the monsters. Stop it! Try something else.`);
            break;
        default:
            console.log(`\n\nWhy are you being a quitter!?!`);
            console.log(`Come back and try again when you're not being a baby.\n\n`);
            keepPlaying = false;
    }
}

function getRandStr() {
    var item = Math.floor(Math.random() * 3) + 1;

    switch (item) {
        case 1:
            keyFound = true;
            return "key and pick it up.";
            break;
        case 2:
            return "rope. Thinking about hanging yourself? ";
            break;
        default:
            return "cactus and prick your finger. Ouch!";
        }
}

while (keepPlaying) {
    playTheGame();
}

