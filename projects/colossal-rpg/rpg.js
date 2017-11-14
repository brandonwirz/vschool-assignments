var readline = require("readline-sync");

var player = {
    name: "Brandon",
    hp: 100,
    inventory: [],
    power: [],
}

var enemy = {hp: 100,}


var greeting = readline.keyIn("\nHello, are you ready to play! Press any key to begin. ");
  while (!name) {
    var name = readline.question("\nWhat is your name? ");
    player.name = name;
}
  console.log(`\nHello ${name}!`);

walk();
function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
// //  The console will ask the user to enter a "w" to walk
// // Every time the player walks, a random algorithm will be run
// // that determines if a wild enemy has appeared
// // (A 1/3 or 1/4 chance of being attacked)
// var walking = getRandomInt(0, 3);
//
function walk(){
  var action = readline.keyIn("\npress w to walk. ");
      if (action === "w") {
          var walking = randomNum(0, 3);
          while (walking === 0) {
              var action = readline.keyIn("\nlucky you..., press w to continue walking");
              walking = randomNum(0, 3)
          }
          if (walking > 0) {
               attacked();
          }
      }
  }

function printInventory(){
  console.log("You have: " + player.inventory);
}
//attack power
function attackPower(attackPow) {
  //return getRandomInt(1, 50);
     attackPow = randomNum(1, 50);
     return attackPow;
}
//player health
function playerHealth() {
    player.hp = player.hp - attackPower();
    return player.hp;
}
//enemy health
function enemyHealth() {
    enemy.hp = enemy.hp - attackPower();
    return enemy.hp;
}


function newPlayerHealth() {

}

function playerAttack() {
    while (player.hp > 0) {
        playerAttack();
    }
}

function enemyAttack() {
    while (enemy.hp > 0) {
        enemyAttack();
    }
}


////Zelda enemies
function enemies(){
  var enemy =["Gel","Moblin","Tektite","Ghini"];
  var randomEnemy = randomNum(0,3);
  var namedEnemy = enemy[randomEnemy];
  return namedEnemy;
}

////prizes
function prizes(){
    var prize= ["gold","silver","bronze","copper"];
    var randomPrize = randomNum(0,3);
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
//powers
//old way
// function powers(){
//     var power = ["flaming sword", "super powers", "magic dagger", "telekenesis"];
//     var index = readline.KeyInSelect(power, "What power do you choose?")
//     console.log(index);
// }

//attacked
function attacked(){
    var runFight = readline.keyIn("\nYou are getting attacked by a " + enemies() + " will you run or fight?  Press r to run or f to fight ")
    // conosle.log("will you run or fight?")
    if(runFight === "r"){
        running = randomNum(1,2);
        // var running = randomNum(1,2);
      if(running === 1){
          //console.log(gettingAttacked());
      } else {
        var escape = readline.keyIn("\nYou escaped, press w to walk again")
          walk();
        }
      } else if (runFight === "f"){
        attack();
    }
}

function attack(){
  console.log("\nYou choose to attack with " + powers() + "\nthe enemy has " + enemyHealth() + " You have " + playerHealth() + " left ");
    if (player.hp <= 0) {
        console.log("\nSorry, you died, please try again");

   } else if(enemy.hp <= 0){
            var winnner = console.log("\nYou win a " + prizes() + " and have " + player.hp + " HP left. ");
            var printInventory = readline.question("Please type \"print\" to see your current inventory")
                if (printInventory === "print"){
                  console.log("Hello " + name + " You have " + player.inventory + " and " + player.hp + " HP left.");
                }
                walk();
            }

        while(player.hp > 0){
          attack();
        }
}



function gettingAttacked() {
    console.log("He caught you the enemy attacks, you have " + playerHealth() + " left");
    console.log(" you attack back with the enemy has " + enemyHealth() + " left");
    if (player.hp <= 0) {
        console.log("too bad you died, try again");
    } else if (enemy.hp <= 0) {
        var youWin = console.log("You win a: " + prizes() + " you have: " + player.hp + " HP left ");
        var printInventory = readline.question("type \"print\" to see your inventory ");
    }
    if (printInventory === "print") {
        console.log("Hello " + name + " You have a: " + player.inventory + " and " + player.hp + " HP left.");
    }
    if (player.hp > 0) {
          walk();;
    } else if (enemy.hp <= 0) {
        var action = readline.keyIn("press w to walk");
          walk();
    }
}

if (player.hp > 0 && enemyHealth < 0) {
    var printInventory = readline.question("type \"print\" to see your inventory ");
    if (printInventory === "print") {
        console.log("Hello " + name + " You have a: " + player.inventory + " and " + player.hp + " HP left.");
        var action = readline.keyIn("press w to walk");
          walk();
    }
    while (player.hp > 0) {
        walk();

    }

}

















//The user can decide to attack or run

//If running, you will choose a random number between 1 and 2 - meaning a 50% chance of escaping
// function run(){
//
// }


//If attacking, you will choose a random attack hp between a min and max
//After the player attacks or runs the enemy attacks back for a random damage amount
// function attackEnemy(){
//
// }
// //The enemy is random (can be chosen out of a minimum of 3 different enemy names)
// function enemyAttack(){
//
// }
// //If the enemy kills the player the console prints an cool death message and the game ends
// function die(){
//
// }
// //If the player kills the enemy you can give the Player some hp and a special item that is stored in the inventory
// function enemyDie(){
//
// }
//
// function enemyCreation(){
//
// }
// Inventory
// When the player kills enemies, they are awarded with items
// If the user enters 'Print' in the console, the console will print the players name, hp, and each item in their inventory