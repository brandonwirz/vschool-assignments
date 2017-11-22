// first argument = search term -> e
// second argument = phrases -> hello, hi
//return = hello

var chai = require("chai");
var assert = chai.assert;
var findFunction =require("./app.js")
// var findFunction =require("../app.js")
//("../other-part-of-app/app.js")

describe("It takes a search term and returns the phrases that match", function(){
    it("should take a search term and return any phrases", function(){
      assert.deepEqual(findFunction("e",["hello", "chocolate", "hi"] ), ["hello", "chocolate"]);
      assert.deepEqual(findFunction("dad",["daddy", "mommy", "dadilion"]), ["daddy", "dadilion"]);
    })
    it("should be case sensitive", function(){
        assert.deepEqual(findFunction("dAd",["daddy", "mommy", "dadilion"]), ["daddy", "dadilion"]);
        assert.deepEqual(findFunction("dad",["daddy", "mommy", "dadilion"]), ["daddy", "dadilion"]);

    })
    // it("should not be case sensitive")
    // it("should be able to search through objects")
})
