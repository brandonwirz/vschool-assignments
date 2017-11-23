// Given an array of ints, we'll say that a triple is a value appearing
// 3 times in a row in the array. Return true if the array does not contain
// any triples.

let noTriples = function(nums) {
    const final = nums.map((num, i) => (num === nums[i + 1] && num === nums[i + 2]) ? false: true)
    return !final.includes(false);
  }
}

module.exports = noTriples;


// let noTriples = function(nums) {
//
// const isTrue = nums.filter((num, index) => (num === nums[index + 1] && num === nums[index + 2]));
// return isTrue.length === 0;
// }
