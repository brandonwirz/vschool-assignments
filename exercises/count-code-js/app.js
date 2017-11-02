

function countCode(s) {
  return s.match(/co.e/g).length;
}
countCode("cozexxcopecopzcode");





// de(str) {
//   var count = 0;
//   for(var i = 0; i < str.length; i++) {
//     // console.log(str.indexOf("co"));
//     if(str.slice(i, i + 2) === 'co' && str.slice(i + 3, i + 4) === 'e') {
//       count++;
//     }
//   }
//   // var arr = str.match(/co/g);
//   // console.log(arr.length);
//   return count;
// }
//
// countCode("cozexxcopecopzcode");
//3


// function countCode(str) {
//   var count = 0;
//   for(var i = 0; i < str.length; i++) {
//     // console.log(str.indexOf("co"));
//     if(str[i] === 'c' && str[i + 1] === 'o' && str[i+3]) {
//       count++;
//     }
//   }
//   // var arr = str.match(/co/g);
//   // console.log(arr.length);
//   return count;
// }
//
// countCode("cozexxcopecopzcode");
// 3
