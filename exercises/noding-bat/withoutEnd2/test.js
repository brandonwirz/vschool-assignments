const chai = require("chai");
const assert = chai.assert;
const withoutEnd2 = require("./app")

    describe("Given a string return both the first and last char of the string. String may be any length even 0", () => {
      it("should return a string w/out first and last char",() =>{
        assert.deepEqual(withoutEnd2("Hello World"),"ello Worl")
      })
    })
