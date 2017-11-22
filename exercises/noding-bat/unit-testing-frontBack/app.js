
// Given a string, return a new string where the first and last chars
// have been exchanged.
var frontBack=function(str) {
    var newString = str.split();
    console.log(newString)
    var lastChar = newString.pop();
    console.log(lastChar)
    var firstChar = newString.shift();
    console.log(firstChar)
    var result = lastChar.toString() + newString.toString() + firstChar.toString();
    return result.toString()

}
frontBack('code');

module.exports = frontBack;


// var frontBack = function(str) {
//   var strLength = str.length;
//   var strLast = str.substring(strLength-1, strLength);
//   var strFirst = str.substring(0,1);
//   if (strLength > 1) {
//     return strLast + str.substring(1, strLength-1) + strFirst;
//   } else {
//   	return str;
//   }
// }
//
// frontBack('code');
