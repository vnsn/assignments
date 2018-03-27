class Player {
    constructor(name, coins = 0, status = "Powered Up", star = true, active = true) {
        this.name = name; // string
        this.totalCoins = coins; // number
        this.status = status; // string: "Powered Up", "Big", "Small", "Dead"
        this.star = star; // bool
        this.gameActive = active; // bool, true by default, false when status is "Dead"
    }

    // setName of type function - sets name to "Mario" or "Luigi". Has a parameter called namePicked where you pass in "Mario" or "Luigi"
    setName(namePicked) {
        return this.name = namePicked;
    }

    gotHit() {
        // This is called whenever the player is hit by an enemy. gotHit() will set the status property accordingly. (Statuses go from "Powered Up" to "Big" to "Small" to "Dead".)
        switch(this.status) {
            case "Powered Up":
                this.status = "Big";
                break;
            case "Big":
                this.status = "Small";
                break;
            case "Small":
                this.status = "Dead";
                this.gameActive = false;
        }
        return;
    }

    gotPowerup() {
        // Called when a powerup is received and sets the status accordingly
        return this.status = "Powered Up";
    }

    addCoin() {
        // Adds a coin to totalCoins
        this.totalCoins++;
    }

    print() {
        console.log(`Name: ${this.name}`);
        console.log(`Total coins: ${this.totalCoins}`);
        console.log(`Status: ${this.status}`);
        console.log(`Star: ${this.star}\n`);
    }
}

function randomThing(max) {
    return Math.floor(Math.random() * max);
}

function playPrincess() {
    const hero = new Player();

    let nameChoice = randomThing(2);
    if (nameChoice === 0) {
        hero.setName("Mario");
    } else hero.setName("Luigi");

    console.log("\nWelcome to the Princess' Game of Chance!\n");
    console.log(`New player created: ${hero.name}\n`);

    do {
        let choice = randomThing(3);
        switch (choice) {
            case 0:
                hero.gotHit();
                console.log(`${hero.name} got hit!`);
                break;
            case 1:
                hero.gotPowerup();
                console.log(`${hero.name} got a power up!`);
                break;
            case 2:
                hero.addCoin();
                console.log(`${hero.name} got a coin!`);
                break;
        }
        hero.print();

    } while (hero.gameActive);

    console.log("Game Over\n\n");
    return;
}

playPrincess();
playPrincess();
playPrincess();
