var readlineSync = require("readline-sync");
var input1 = 'hello';
console.log(input1.toUpperCase() + ', my name is Brandon. Please answer some of my questions!\n');

var name = readlineSync.question('What is your name, please? ');
console.log('Hello ' + name + " it's nice to meet you!");


//var name = readlineSync.question('What is your name, please? ');

var inputStr1 = "You have";
var inputStr2 = "a lovely name.";
var concat1 = inputStr1.concat(" " + inputStr2);
console.log(concat1);

//
// var inputMsg = "You have a lovely name.";
// //var halfString = msg.substr(11, 18);
// var input3 = inputMsg.slice(inputMsg.length / 2);
// // var input3 = inputMsg.slice(1, 3);
// console.log(input3);
console.log(name);

//
var arr = ["You", "have", "a", "lovely", "name"];
var longMsg = readlineSync.keyInSelect(arr, "What word would you like to start on");
console.log(longMsg);
var msg = longMsg;
console.log(msg);
console.log(concat1.slice(2));



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









//
//
// var readlineSync = require("readline-sync");
// var len = name.length;
// //var noOfChars = readlineSync.question("You have " + len " character's in your name");
// console.log("You have " + len + " character's in your name");
//
// var value1 = Number(readline.question("Hello "));
//
// console.log(input1.toUpperCase());
// ask.question(input1.toUpperCase() + ", what is your name?")
//
// console.log("hello " + "name" + "it’s good to meet you.");
//
// var charLength = "Hello";
// var input2 = charLength.length;
//
// console.log("Hello has " + input2 + " characters.");
//
//
//
// var inputMsg = 'Watch Blade Runner 2049 you must.'
// // var input3 = inputMsg.slice(inputMsg.length/2);
// var input4 = inputMsg.indexOf();
// console.log(input4);
// console.log(inputMsg);
//
// var newArr = inputMsg.split();
//
// //console.log(newArr);
