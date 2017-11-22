const chai = require("chai");
const assert = chai.assert;
const makeAbba = require("./app");


describe("Given two strings, a and b return the result of putting them together in the order, abba", () =>{
  it("Should return HiByeByeHi",()=>{
    assert.equal(makeAbba("Hi", "Bye"),"HiByeByeHi");
  });
  it ("Should return and remove any whitespaces from string", () => {
    assert.equal(makeAbba("H i", "B y e"), "HiByeByeHi")
  });
})






// describe("Given two strings, a and b return the result of putting them together in the order, abba", () =>{
//   it("Should return HiByeByeHi",()=>{
//     assert.equal(makeAbba("Hi", "Bye"),"HiByeByeHi");
//   })
// })
