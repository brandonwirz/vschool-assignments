// var ask = require("readline-sync");
//
// var options = ["Put hand in hole" ,"Find the key"];
// var option;


// while(option !== 0 || option === 2){
// option = ask.keyInSelect(options, "Find the key to open the locked door?: ");
//
// if(option === 0){
//     console.log("You put you hand in the hole, your dead!");
//   } else if (option === 1) {
//     console.log("You found the key, the door is now open!");
//   } else {
//     console.log("Select an option please!");
//     }
// }




var readline = require('readline-sync');
var options = ["Put hand in the hole.", "Find the key.", "Open the door."];
var keyHeld = false;

while (playerInput != 0){
  var playerInput = readline.keyInSelect(options, 'What would you like to do?');
    if(playerInput === 1){
      keyHeld = true;
      console.log("You pick up the key.");
    }else if(playerInput === 2){
      if (keyHeld === true){
          console.log("You opened the door and escaped!");
          break;
      } else{
          console.log('The door is locked, idiot.')
      }
} else {
      console.log('You died.');
  }
}
