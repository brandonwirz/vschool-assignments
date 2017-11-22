//Test 1
 var chai = require("chai");
 var assert = chai.assert;
 //var ipAddress = require("./app.js")//./test/app.js
  var ipAddress = require("./app.js");

//describe(description, function)
describe("a function that makes a string and determines if valid ip address ", function(){
  it("should return true if each set of numbers is between 0 and 255", function(){

        assert.isTrue(ipAddress("124.23.54.90")
      );
  });
  it("Should return false if it is invalid ip address ", function(){
      assert.isFalse(ipAddress("300.0.89.3"));
  })
});














// var chai = require('chai');
// var assert = chai.assert;
//
// var add = require('./app.js').add;
// var lookUp = require('./app.js').lookUp;
//
// describe("A function to add words and their definitions to a dictionary", function(){
//    it("should return true if the word and its definition was added", function(){
//      add("cow", "vegetarian mamal that loves grass");
//      assert.equal(lookUp("cow"), "vegetarian mamal that loves grass");
//    });
//    it('Should return null if the word is not present', function(){
//      assert.equal(lookUp('cat'), null)
//    })
//
//
// });






 //
 // // //Unit testing
 // var chai = require("chai");
 // var assert = chai.assert;
 //
 // var palindrome = require("./app.js")
 //
 // describe("A function to check if an argument is the same forwards and backwards", function() {
 //   it('Should return true if the argument is a palindrome', function (){
 //     assert.equal(palindrome("star rats"), true);
 //   });
 //   it('Should return false if the argument is not a palindrome', function(){
 //     assert.equal(palindrome("palindrome"), false);
 //   });
 //   it("Should return true if the argument contains punctuation and is a palindrome", function() {
 //     assert.equal(palindrome("taco! cat!"), palindrome("tacocat"));
 //   });
 //   it("Should return true if the argument contains any non-alpha numeric characters and is a palindrome", function() {
 //     assert.equal(palindrome("t@ac0 ( cAt!"), true);
 //   });
 // })
 //
