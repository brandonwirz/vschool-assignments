
// var ask = require("readline-sync");
//
// var grid = [];
// var column = 10;
// var row = 10;
// for ( var i = 0; i < row; i++) {
//   grid.push([]);
//   for(var j = 0; j < column; j++) {
//       if (Math.random() < .2 ) {
//         var isShip = true;
//       } else {
//         var isShip = false;
//
//       }
//     grid[i].push(new Location(isShip, false, "0"))
//   }
// }
// console.log(grid);
//
// function Location(isShip, hit, display) {
//     this.isShip = isShip;
//     this.hit = hit;
//     this.display = display;
// }
//
// function directHit(){
//   for (var i = 0; i < 5; i++) {
//     var loc = Math.random() >= 0.5;
//     if (loc > 0.5){
//       return true;
//     } else {
//       return false;
//     }
//   }
// }
// console.log(directHit());
//
// var coordinate1 = ask.question('What is your the first coordinate?');
// var coordinate2 = ask.question('What is your the second coordinate?');
//
// console.log(grid[coordinate1][coordinate2]);
