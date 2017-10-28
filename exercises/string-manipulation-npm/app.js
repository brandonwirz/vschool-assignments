var ask = require("readline-sync");
var input1 = 'hello'

//var value1 = Number(readline.question("Hello "));

console.log(input1.toUpperCase());

var charLength = "Hello";
var input2 = charLength.length;

console.log("Hello has " + input2 + " characters.");


var inputStr1 = "I'm Playing";
var inputStr2 = "hard.";

console.log(inputStr1.concat(" " + inputStr2));



var inputMsg = "Taking the dogs for a stroll.";
//var halfString = msg.substr(11, 18);
var input3 = inputMsg.slice(inputMsg.length / 2);
console.log(input3);


console.log(inputMsg);

var newArr = inputMsg.split();

//console.log(newArr);
