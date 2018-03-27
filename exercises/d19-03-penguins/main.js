
function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Penguin {
    constructor() {
        this.name = "Penguins"; // string
        this.population = 1000000; // number   
    }
}

class Bear {
    constructor() {
        this.name = "Polar Bears"; // string
        this.population = 1000000; // number   
    }
}

// returns the amount of damage inflicted
function sendNuke(party, onHit = party => {console.log(`The nuke hit!`)}, onMiss = party => console.log(`The nuke missed and landed in the ocean!`)) {
    if (getRandomNum(0, 1)) {
        onHit();
        return getRandomNum(1000, 900000);
    } else  {
        onMiss();
        return 0;
    }
} 

function playPenguins() {
    const pinguino = new Penguin();
    const oso = new Bear();
    const story = "The year is 1950 during the Cold War. The Polar Bears are making plans to invade Antarctica. The Penguins of the south aren't going down without a fight."
    console.log(`\n${story}\n`);

    let firstMove = getRandomNum(1, 2);
    if (firstMove === 0) {
        whosTurn = 0;
    } else {
        whosTurn = 1;
    }

    do {
        switch (whosTurn) {
            case 0:
                // Penguins attacking Polar Bears
                console.log(`The Penguins are attacking the Polar Bears!`);
                damage = sendNuke(oso);
                oso.population -= damage;
                console.log(`${damage} polar bears were killed.\n`);
                whosTurn = 1;
                break;
            case 1:
                // Polar Bears attacking Penguins
                console.log(`The Polar Bears are attacking the Penguins!`);
                damage = sendNuke(pinguino);
                pinguino.population -= damage;
                console.log(`${damage} penguins were killed.\n`);
                whosTurn = 0;
                break;
        }

    } while (pinguino.population > 0 || oso.population > 0);

    console.log("\nGame Over");

    if (pinguino.population <= 0) {
        console.log("The Polar Bears have defeated the Penguins!\n");
    } else if (oso.population <= 0) {
        console.log("The Penguins have defeated the Polar Bears!\n");
    } else console.log("We all lose!\n");
    return;
}

playPenguins();
