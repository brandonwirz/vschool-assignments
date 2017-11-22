// given a string, return a version without both first and last char of the string.
//the string may be any length, inlcuding 0

var withoutEnd2 = function(str){
    return str.slice(1, -1);
  // str = str.split("");
  // str.pop();
  // // console.log(str)
  // str.shift();

  // return str.join("")

}
// console.log(withoutEnd2())
withoutEnd2("test")


module.exports = withoutEnd2;
