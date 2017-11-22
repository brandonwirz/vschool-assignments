var readline = require("readline-sync");

//user//
// var user = {
//     name: (''),
//     life: 10,
//     inventory: ["potato"]
// }
//
// var monster = {
//     life: 10,
// }
var player = {
    name: "Brandon",
    hp: 100,
    inventory: [],
    power: [],
}

var enemy = {hp: 100,}



var weapon = ["shotgun", "sword", "baton", "pistol"];
var enemyNames = ["zombie", "vampire", "werewolf"];

////Zelda enemies
function enemies(){
  var enemy =["Gel", "Moblin", "Tektite", "Ghini"];
  var randomEnemy = randomNum(0,3);
  var namedEnemy = enemy[randomEnemy];
  return namedEnemy;
}

////prizes
function prizes(){
    var prize= ["Gold coin", "Silver coin", "Bronze coin"];
    var randomPrize = randomNum(0,2);
    var newPrize = prize[randomPrize];
    player.inventory.push(newPrize);
    return newPrize;
}

////powers
function powers(){
    var power = ["Farore's Wind", "Light Arrows", "Magic Spin Attack"];
    var randomPower = randomNum(0,2);
    var newPower = power[randomPower];
    return newPower;
}

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
var greeting = readline.keyIn("\nHello, are you ready to play! Press any key to begin. ");
    while (!name) {
      var name = readline.question("\nWhat is your name? ");
      player.name = name;
}
  console.log(`\nHello ${name}!`);






function checkInventory() {
    console.log(player);
}




function doesEnemyAppear() {
    var randomNumber = Math.floor((Math.random() * 3) + 1);
    if (randomNumber === 2) {
        return true;
    } else {
        return false;
    }

}


//run

function run() {
    runOrDie = Math.floor((Math.random() * 2) + 1)
    if (runOrDie === 1) {
        console.log("\nSorry, you died, please try again")
    } else {
        console.log("Your lucky..., press 'w' to continue walking or press 'i' to view inventory.")
    }
}


//attack

var charPower = Math.floor((Math.random() * 10) + 1)

var enemyPower = Math.floor((Math.random() * 10) + 1)


//fight

function fight() {
    enemyPower = Math.floor((Math.random() * 10) + 1)
    charPower = Math.floor((Math.random() * 10) + 1)
    if (charPower < enemyPower) {
        console.log("You died! Press 'w' to try again")
    } else {

        console.log("You killed the enemy and been awarded a new weapon!! Press 'i' for inventory or 'w' to continue playing.")
        player.inventory.push(weapon[Math.floor(Math.random() * 3)])
    }
}

//while
while (player.hp > 0) {
    var action = readline.question("Push 'w' to walk or 'i' to check inventory").toLowerCase();

    if (action === 'i') {
        console.log(player.inventory)

    } else if (action === 'w' && doesEnemyAppear()) {
        var attack = readline.question("You are getting attacked by a " + enemies() + " will you run or fight?  Press 'r' to Run or 'f' to Fight ")

        if (attack === 'a') {
            fight()
        } else {
            run()
        }

    }
}


// var readline = require("readline-sync");
//
// //user//
// var user = {
//     name: (''),
//     life: 10,
//     inventory: ["potato"]
// }
//
// var monster = {
//     life: 10,
// }
//
//
// //global variables
// var weapon = ["shotgun", "sword", "baton", "pistol"];
// var enemyNames = ["zombie", "vampire", "werewolf"];
//
//
// /////////////////////INTRO/////////////////////////////
// var name = readline.question("Excuse me, I believe I know you. What is your name?");
// user.name = name
//
//
// console.log("I'm so glad to finally find you. Be careful, there are zombies everywhere! Press 'w' to walk to avoid attracting attenton or 'i' for your inventory.")
//
// /////////////////Actions///////////////////
//
// //inventory//
//
// function checkInventory() {
//     console.log(user);
// }
//
//
// //doesEnemyAppear
//
// function doesEnemyAppear() {
//     var randomNumber = Math.floor((Math.random() * 3) + 1);
//     if (randomNumber === 2) {
//         return true;
//     } else {
//         return false;
//     }
//
// }
//
//
// //run
//
// function run() {
//     runOrDie = Math.floor((Math.random() * 2) + 1)
//     if (runOrDie === 1) {
//         console.log("Sorry, you have been caught and eaten alive. Try again")
//     } else {
//         console.log("You have escaped the monster! Press 'w' to walk or press 'i' to view inventory.")
//     }
// }
//
//
// //attack
//
// var charPower = Math.floor((Math.random() * 10) + 1)
//
// var enemyPower = Math.floor((Math.random() * 10) + 1)
//
//
// //fight
//
// function fight() {
//     enemyPower = Math.floor((Math.random() * 10) + 1)
//     charPower = Math.floor((Math.random() * 10) + 1)
//     if (charPower < enemyPower) {
//         console.log("You have died!  Press 'w' to try again")
//     } else {
//
//         console.log("You killed the enemy and been awarded a new weapon!! Press 'i' for inventory or 'w' to continue playing.")
//         user.inventory.push(weapon[Math.floor(Math.random() * 3)])
//     }
// }
//
// //while
// while (user.life > 0) {
//     var action = readline.question("Push 'w' to walk or 'i' to check inventory").toLowerCase();
//
//     if (action === 'i') {
//         console.log(user)
//
//     } else if (action === 'w' && doesEnemyAppear()) {
//         var attack = readline.question("You have encountered a monster. Press 'a' to attack or 'r' to run. The monster is a " + enemyNames[Math.floor(Math.random() * 3)]).toLowerCase();
//
//         if (attack === 'a') {
//             fight()
//         } else {
//             run()
//         }
//
//     }
// }
