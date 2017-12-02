// function antiCaps(str, letter){
//   //return str === str.toUppercase;
// for (var i =0; i < str.length; i++){
//   // if (letter === letter.toUpperCase()){
//   //   letter.reverse();
//     return str
//   }
// }
// //return letter;
//
//
// antiCaps("Hello")
// antiCaps("Goodbye");
// antiCaps("You Say Hello");



// function isCaps(letter) {
//   return letter === letter.toUpperCase();
// }

//sol 1
// function antiCaps(str){
//   var newString = [];
//   var splitWord = str.split('');
//   for (var i = 0; i < str.length; i++){
//     if (splitWord[i] === splitWord[i].toUpperCase()){
//       newString.push(splitWord[i].toLowerCase());
//     } else if (splitWord[i] === splitWord[i].toLowerCase()){
//       newString.push(splitWord[i].toUpperCase());
//     }
//   }return newString.join('')
// }
// antiCaps('kILL mE');

//sol 2


// function isCaps(letter) {
//   return letter === letter.toUpperCase();
// }//test true or false
// function antiCaps(str) {
//   var newString = "";
//   for(var i = 0; i < str.length; i++) {
//     if(isCaps(str[i])) {
//       newString += str[i].toLowerCase();
//     } else {
//       newString += str[i].toUpperCase();
//     }
//   }
//   console.log(newString);
// }





//with less code------
// function isCaps(letter) {
//   return letter === letter.toUpperCase();
// }//test true or false
// function antiCaps(str) {
//   var newString = "";
//   for(var i = 0; i < str.length; i++) {
//     if(str[i] === str[i].toUpperCase();) {
//       newString += str[i].toLowerCase();
//     } else {
//       newString += str[i].toUpperCase();
//     }
//   }
//   console.log(newString);
// }



//ternary
// function isCaps(letter) {
//   return letter === letter.toUpperCase();
// }
//
// function antiCaps(str) {
//   var newString = "";
//   for(var i = 0; i < str.length; i++) {
//     isCaps(str[i]) ? newString += str[i].toLowerCase() :newString += str[i].toUpperCase(); //Ternary
//
//     // if(isCaps(str[i])) {
//     //   newString += str[i].toLowerCase();
//     // } else {
//     //   newString += str[i].toUpperCase();
//     // }
//   }
//   console.log(newString);
// }
//
// antiCaps("Hello");


//
// function isCaps(letter) {
//   return letter === letter.toUpperCase();
// }
//
// function antiCaps(str) {
//   var splitStr = str.split('');
//   console.log(splitStr)
//   return splitStr.map(function(x){
//     console.log(x)
//  //return isCaps(x) ? x.toLowerCase() : x.toUpperCase();
//   });
// }
// antiCaps('aPPles');
// (6) ["A", "p", "p", "L", "E", "S"]
