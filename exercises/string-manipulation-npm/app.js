
var readline = require("readline-sync");

var name = readline.question("\nPlease let me know your name? ");
console.log("\nIt is nice to meet you, " + name.toUpperCase() + ".");

var age = parseInt(readline.questionInt(" \nHow old are you? "));
// console.log("\nYou're " + age + " years old!");

console.log("\nYou are " + age + " and your name is " + name.toUpperCase() + ".")

var color = readline.question("\nWhat is your favorite color? ");
console.log("\n" + color.toUpperCase() + " is a lovely color.");


var phraseLength = readline.question("\nPlease type a phrase and I will tell you the length of it! ");
console.log("\nYour phrase is " + phraseLength.length + " letters long!");


var myMessage = readline.question("\nPlease, pick a word or write something about yourself?");
console.log("\nAwesome! You typed: " + myMessage );
//console.log("");

console.log("   " + myMessage.slice(15));

var messLength = readline.questionInt("Choose a number between, 0 and " + myMessage.length + " to start index there .");
console.log("\n" + myMessage.slice(messLength));
console.log("\nThanks and have a nice day!\n");













// var readlineSync = require("readline-sync");
// var input1 = 'hello';
// console.log(input1.toUpperCase() + ', my name is Brandon. Please answer some of my questions!\n');
//
// var name = readlineSync.question('What is your name, please? ');
// console.log('Hello ' + name + " it's nice to meet you!");
//
//
//
// var inputStr1 = "You have";
// var inputStr2 = "a lovely name.";
// var concat1 = inputStr1.concat(" " + inputStr2);
// console.log(concat1);
//
//
// console.log(name);
//
//
// var arr = ["You", "have", "a", "lovely", "name"];
// var longMsg = readlineSync.keyInSelect(arr, "What word would you like to start on");
// console.log(longMsg);
// var msg = longMsg;
// console.log(msg);
// console.log(concat1.slice(2));



// var inputMsg = "You have a lovely name.";
// //console.log(inputMsg);
// var input4 = inputMsg.indexOf();
// console.log(input4);



 //var operation = readlineSync.keyInSelect(operations, "What operation would you like to have preformed? ");
//
// switch (operation){
//     case 0:
//       console.log(add(value1, value2));
//       break;
//     case 1:
//       console.log(sub(value1, value2));
//       break;
//     case 2:
//       console.log(mul(value1, value2));
//       break;
//     case 3:
//       console.log(div(value1, value2))
//       break;
//     default:
//        console.log("you have canceled everything")
//   }
