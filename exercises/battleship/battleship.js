var ask = require("readline-sync");

function Location (shipThere, shipHit, location) {
  this.shipThere = shipThere;
  this.isHit = shipHit;
  this.display = location;
}

var grid = [];
var rows = 10;
var columns = 10;


function battle(min, max) {
  for (var i = 0; i < rows; i++) {
    grid.push([]);
    for (var j = 0; j < columns; j++) {
      var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      if (randomNumber > 1){
        var water = new Location (false, false, "W");
        grid[i].push(water);
      }else{
        var ship = new Location (true, false, "S");
        grid[i].push(ship);
      }
    }
  }
}

function displayBattle () {
  for (var i = 0; i < rows; i++) {
    for (var j = 0; j < columns; j++) {
      var loc = "~";
      if (grid[i][j].display === "X") {
        loc = "X";
      }
      if (grid[i][j].display === "M") {
        loc = "M";
      }
      process.stdout.write(loc + " ");
    }
    console.log();
  }
}

function startGame () {
  var coord1 = ask.question('Please select your first coordinate for a row (0-9)?');
  var coord2 = ask.question('Please select your second coordinate for column (0-9)?');
  if (grid[coord1][coord2].display === "S") {
    grid[coord1][coord2].display = "X";
  }
  if (grid[coord1][coord2].display === "W") {
    grid[coord1][coord2].display = "M";
  }
  displayBattle();
}
battle(0, 9);
 while (!false) {
  startGame();
}
