// //Test 2
var palindrome = function(str){
  var forward = str.toLowerCase().replace(/\W/g, '')
  var reverse = forward.split('').reverse().join('');
  return forward === reverse
}
module.exports = palindrome;









































//
// //Test 1
// var add = function add(a,b){
//   return a + b === 4;
//
// }
//
// module.exports = add;

//Test 2
// var palindrome = function(str){
//     var unwantedStuff = /\W/g;
//     var lowerCaseNoSpace = str.toLowerCase().replace(unwantedStuff, '');
//     var arrReverseRejoin = lowerCaseNoSpace.split('').reverse().join('');
//     return arrReverseRejoin === lowerCaseNoSpace;
// }
// module.exports = palindrome;




// var palindrome = function (str) {
//   var lowerCaseNoSpace = str.toLowerCase().replace(/\W/g, '');
//   var arrReverseRejoin = lowerCaseNoSpace.split('').reverse().join('');
//   return arrReverseRejoin === lowerCaseNoSpace;
// }
//
// module.exports = palindrome;
