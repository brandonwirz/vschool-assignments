
////---concat()---////
var str1 = 'hey';
var str2 = 'ho';
function concatString(){
  var returned = str1.concat(str2);
  return returned;
}
console.log(concatString());


////---indexOf()---////
var arr = ["dog", 8, "cat", "pup", 2];
function indexOf(){
  var returned = arr.indexOf("cat");
  return returned;
}
console.log(indexOf());


////---lastIndexOf()---////
var arr = ["dog", 8, "cat", "pup", 2];
function lastIndex(){
  var returned = arr.lastIndexOf(2);
  return returned;
}
console.log(lastIndex());


////---match()---////
var str = "Rain, train and disdain";
function match(){
  var returned = str.match(/ain/g);
  return returned
}
console.log(match());


////----replace()----////
var str = "Dog, black!";
function replace(){
  var newstr = str.replace('black', 'tan');
  console.log(newstr);
}
  replace();


////---slice()---////
var str = "They ran all night long!";
function slice(){
  var returned = str.slice(1, 20)
  return returned;
}
console.log(slice());


////---match()---////
var str = "The dog is running wildly!";
function match(){
  var returned = str.match('dog');
  return returned;
}
console.log(match(str));

////---split()---////
function splitString(){
var str = "The year was 2011.";
var splitted = str.split(" ",2);

  console.log(splitted.toString());
}
console.log(splitString());


var str = 'Hi,How,are,you?';

function splitString(){
  var returned = str.split(" ");
  return returned;
}
console.log(str);


function splitString(){
  var str = 'Hi How are you?';
  var splitted = str.split(', ');
  return splitted.join();
}
str.split(returned);
splitString()
console.log(splitString());
console.log(returned);


////---toLowerCase()---////
function lowerCase(string){
  console.log(string.toLowerCase())
}
lowerCase("DOG")

////---toUpperCase()---////
function upperCase(string){
  console.log(string.toUpperCase())
}
upperCase("cat");


////---substr()---////
function subString(dog){
  return dog.substr(1,3);
}
subString("Rotty");


function subString(dog){
  return dog.substr(dog.length / 2);
}
subString("Rottytotty");
