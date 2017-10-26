// .concat()
// .indexOf()
// .lastIndexOf()
// .match()
// .replace()
// .slice()
 //.split()
// .toLowerCase()
// .toUpperCase()
// .substr()
//---toLowerCase()---////
// function lowerCase(string){
//   console.log(string.toLowerCase())
// }
// lowerCase("DOG")



// alt replace///////////
// function replace(){
//   var str = "Dog, black!";
//   var newstr = str.replace(/black/i,'tan');
//   console.log(newstr);
// }
//   replace();


////---substr()---////
// function subString(dog){
//   return dog.substr(1,3);
// }
// subString("Rotty");
// //ott


////---match()---////
// var str = "The dog is running wildly!";
// function match(){
//   var returned = str.match('dog');
//   return returned;
// }
// console.log(match(str));

////---lastIndexOf()---////
// var arr = ["dog", 8, "cat", "pup", 2];
// function lastIndex(){
//   var returned = arr.lastIndexOf(2);
//   return returned;
// }
// console.log(lastIndex());
// //4


// // ////---indexOf()---////
// var arr = ["dog", 8, "cat", "pup", 2];
// function indexOf(){
//   var returned = arr.indexOf('cat');
//   return returned;
// }
// console.log(indexOf());
// //2



// ////---slice()---////
// var arr = ["gun", 20, "three", "pug", 15];
// function slice(){
//   var returned = arr.slice(2, 4)
//   return returned;
// }
// console.log(slice());


////---concat()---////
// var str1 = 'hey';
// var str2 = 'ho';
// function concatString(){
//   var returned = str1.concat(str2);
//   return returned;
// }
// console.log(concatString());


////---slice()---////
// var arr = ["gun", 20, "three", "pug", 15];
// function slice(){
//   var returned = arr.slice(2, 4)
//   return returned;
// }
// console.log(slice());


////---split()---////
// var str = 'Hi,How,are,you?';
//
// function splitString(){
//   var returned = str.split(" ");
//   return returned;
// }
// //splitString('HiHowareyou?');
// console.log(str);


function splitString(){
  var str = 'Hi How are you?';
  var splitted = str.split(', ');
  return splitted.join();
}
//str.split(returned);
//splitString()
console.log(splitString());
//console.log(returned);

// function splitString(){
// var str = "The year was 2011.";
// var splitted = str.split(" ",2);
//
//   console.log(splitted.toString());
// }
// console.log(splitString());

//---replace()---////
// var str = "Dog, black!";
// function replace(){
//   var returned = str.replace("Cat", "tan")
//   return returned;
// }
// //console.log(replace());
// replace(str);


var withoutEnd=function(str) {

  var str1 = str.split("");
  str1.shift();
  str1.pop();
  var newString = str.join();
  return newString;
}
