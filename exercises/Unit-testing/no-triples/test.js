const chai = require("chai");
const assert = chai.assert;
const noTriples = require("./app.js")

describe("Given an array in ints, a triple is a value appearing 3 times in a row in the array. Check to see if the array does not contain any triples", () => {
  it("should return true if the array does not contain any triples", () => {
        assert.equal(noTriples([3, 4, 4, 5, 6, 5]), true)
    })
    it("should return false if the array does not contain any triples", () => {
          assert.equal(noTriples([3, 4, 4, 4, 5, 6, 5]), true)
      })

  })
