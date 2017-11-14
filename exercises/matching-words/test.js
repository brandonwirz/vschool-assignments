// //Unit testing
const chai = require("chai");
const assert = chai.assert;
const matching = require("./app")


describe("A function that contains an array of every repeated word in a string", () => {
  it("Should retun an array of each repeated word", () =>{
    assert.deepEqual(matching("hello hello, I don't want to say goodbye I say hello"),
    ['hello','i','say'])
  });
});
