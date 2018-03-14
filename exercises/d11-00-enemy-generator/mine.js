// https://coursework.vschool.io/enemy-generator/

function getRandomType () {
    var enemyTypes = ["Ancient Dragon", "Prowler", "Mighty Grunt"];
    var rand = Math.floor(Math.random() * enemyTypes.length);
    return enemyTypes[rand];
}


// The following is not a good way to do this because
// object properties aren't ordered. Can't rely on 
// type always getting set before hitPoints.


function genHitPoints (str) {
// random number between x and y: 
// Math.floor(Math.random() * ((y-x)+1) + x);
// random number between 0 and 100: Math.floor(Math.random() * 101)
    switch (str) {
        case "Ancient Dragon":
            return Math.floor((Math.random() * 21) + 80);
        case "Prowler":
            return Math.floor((Math.random() * 30) + 50);
        case "Mighty Grunt":
            return Math.floor((Math.random() *30) + 20);
    }
}

function Enemy() {
    this.type = getRandomType();
    this.hitPoints = genHitPoints(this.type);
    this.defense = this.hitPoints * 3;
}

function printEnemies() {
    for (var i = 0; i < 100; i++) {
        console.log(new Enemy());
    }
}

printEnemies();
