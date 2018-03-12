var ask = require("readline-sync");

var options = ['pick flowers', 'shoot guns', 'fight bears'];
var option = 'undecided';

while (option != 'fight bears') {

  var index = ask.keyInSelect(options, "What would you like to do today?: ");

  switch (index) {
    case 0:
      console.log("\nYou pick some flowers. You make a bouquet.");
      break;
    case 1:
      console.log("\nYou shoot guns.");
      break;
    case 2:
      console.log("\nYou fought a bear and got beat up!\n");
      option = `fight bears`;
      break;
    default:
      console.log(`\n\nYou need to pick an option`);
  }
}
