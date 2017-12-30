var readline = require("readline-sync");

//player//
var player = {
    name: (''),
    hp: 100,
    inventory: []
}

var enemy = {
    hp: 100,
}


function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  ////powers
function weapon(){
    var power = ["Farore's Wind", "Light Arrows", "Magic Spin Attack"];
    var randomPower = randomNum(0,2);
    var newPower = power[randomPower];
    return newPower;
  }
//Zelda enemies
function enemies(){
    var enemy =["Gel", "Moblin", "Tektite", "Ghini"];
    var randomEnemy = randomNum(0,3);
    var namedEnemy = enemy[randomEnemy];
    return namedEnemy;
}
//prizes
function prizes(){
    var prize= ["Gold coin", "Silver coin", "Bronze coin"];
    var randomPrize = randomNum(0,2);
    var newPrize = prize[randomPrize];
    player.inventory.push(newPrize);
    return newPrize;
}

function attackPower(attackPow) {
     attackPow = randomNum(1, 50);
     return attackPow;
}

function playerHealth() {
    player.hp = player.hp - attackPower();
    return player.hp;
}

function enemyHealth() {
    enemy.hp = enemy.hp - attackPower();
    return enemy.hp;
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

var greeting = readline.keyIn("\nHello, are you ready to play! Press any key to begin. ");
    while (!name) {
      var name = readline.question("\nWhat is your name? ");
      player.name = name;
}
  console.log(`\nHello ${name}!`);

//inventory//
function checkInventory() {
    console.log(`\n\n ${player}`);
}


//doesEnemyAppear

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
        console.log("\nSorry, you died. Please try again ")
    } else {
        console.log("\nYour lucky...keep playing!")
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
        console.log("\nYou have died! Play again?")//Press 'w' to try again"
    } else {

        console.log("\nYou choose to attack with " + weapon() + "\n\nthe enemy has " + enemyHealth() + " You have " + playerHealth() + " left and won a " + prizes() + "\n")
        //player.inventory.push(prizes())
    }
}

//while
while (player.hp > 0) {
    var action = readline.question("\nPress 'w' to walk or 'i' to check inventory").toLowerCase();

    if (action === 'i') {
        console.log(player)

    } else if (action === 'w' && doesEnemyAppear()) {
        var attack = readline.question("\nYou have encountered a " + enemies() + " Press 'a' to attack or 'r' to run.")

        if (attack === 'a') {
            fight()
        } else {
            run()
        }

    }
}
