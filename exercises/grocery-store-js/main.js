var shopper = {
    name: "Jen",
    budget: 100,
    isExcited: false,
    groceryCart: ["beef", "cabbage", "almonds", "zucchini", "lettuce", "coconut oil", "ghee"],
    summary: function() {
        console.log(`${this.name}'s budget is $${this.budget}.`);
        if (this.isExcited) {
            console.log(`${this.name} is excited to go shopping!`);
        } else {
            console.log(`${this.name} is NOT excited to go shopping!`);
        }

    }
};

shopper.summary();
