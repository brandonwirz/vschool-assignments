// Given a string, return a new string made of 3 copies of the last 2 chars
// of the original string. The string length will be at least 2.

var extraEnd=function(str) {
      str.slice(1, 2);
  		var newStr = str.slice(1);
      var timesThree = newStr.repeat(3);
      return timesThree;
}

console.log(extraEnd("red"));
// function repeatStringNumTimes(str, num) {
//   return str +
// }
// console.log(repeatStringNumTimes("red", 3));
