// https://coursework.vschool.io/enemy-generator/

function getRandomType () {
    var enemyTypes = ["Ancient Dragon", "Prowler", "Mighty Grunt"];
    var rand = Math.floor(Math.random() * enemyTypes.length);
    return enemyTypes[rand];
}

 Enemy.prototype.genHitPoints = function () {
// random number between x and y: 
// Math.floor(Math.random() * ((y-x)+1) + x);
// random number between 0 and 100: Math.floor(Math.random() * 101)
    switch (this.type) {
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
    this.hitPoints = this.genHitPoints();
    this.defense = this.hitPoints * 3;
}

function printEnemies() {
    for (var i = 0; i < 100; i++) {
        console.log(new Enemy());
    }
}

printEnemies();
