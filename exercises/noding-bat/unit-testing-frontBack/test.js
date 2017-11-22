const chai = require("chai");
const assert = chai.assert;
const frontBack = require("./app")


describe("It should return a new string where the first and last characters have been exchanged", ()=>{
  it("Should return true if the first and last characters have been switched", () =>{
    assert.deepEqual(frontBack("cat"), "tac");
    }
  )
})
describe("dkmfKDAFNDJSAN;FNDA/", () => {
  it("jfdafhjdhajf",()=.{
    assert.equal(frontBack("cat"),"dog" )

  })
})
