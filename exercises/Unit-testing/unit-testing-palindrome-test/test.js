// //Unit testing
const chai = require("chai");
const assert = chai.assert;
const palindrome = require("./app")



describe("A function that contains an array of every repeated word in a string", ()=> {
  it("Should retun an array of each repeated word", () =>{
    assert.equal(actual, expected);
  });
  it("", function(){
    assert.equal(palindrome("palindrome"), false);
  });
  it("", function() {
    assert.equal(palindrome("taco! cat!"), palindrome("tacocat"));
  });
  it("", function() {
    assert.equal(palindrome("t@ac0 ( cAt!"), true);
  });
})

















// var chai = require("chai");
// var assert = chai.assert;
// //Test 2
//
// var palindrome = require("./app.js").palindrome;
//
// describe("A function to test if a argument is the same forward and backwards", function(){
//   it("Should return true if argument is a palindrome", function(){
//     assert.equal(palindrome("star rats"), true)
//   });
//
//     it("Should return false if argument is not a palindrome", function(){
//       assert.equal(palindrome('palindrome'), false);
//   });
//
//     it("Should return true if argument contains punctuation and is a palindrome", function(){
//       assert.equal(palindrome('tAco! cAt!'),palindrome("tacocat"));
//     });
//  });
//
//



//Test 1
// var chai = require("chai");
// var assert = chai.assert;
// var add = require("./app.js");//./test/app.js
//
// describe("A function to check if two arguments add up to 4", function(){
//     it("Should return true if the arguments add up to 4", function(){
//       add(2, 2);
//       assert.equal(add(2,2), true);
//     });
//
//       it("Should return false if the arguments don't add up to 4", function(){
//           add(4,1);
//           assert.equal(add(4,1), false);
//       });
// });
