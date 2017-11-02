//Test 1
 var chai = require("chai");
 var assert = chai.assert;
 var newWord = require("./app.js").newWord;//./test/app.js
 var search = require("./app.js").search;

//describe(description, function)
describe("A dictionary should add up to two words", function(){
  it("Should store the word and definition when added in the dictionary when added", function(){
        newWord("apple", "crispy and delicious fruit");
        assert.equal(search("apple"), "crispy and delicious fruit")
  });
  it("Should return null when we lookup a word not present", function(){
      assert.isNull(search("pear"));
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
