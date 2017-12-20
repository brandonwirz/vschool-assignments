// Create a function that takes two arrays and returns an
//array of the items that are unique.
//
// Given two arrays (for example array A = [1, 2, 3] and
//array B = [2, 3, 4]), find the set of elements which
//are in one of the two arrays, but not in both.
//
// The function should return an array of all the
//unique items. From the example above, it would return [1, 4], not necessarily in that order. (Order is unimportant).
//
// arrA = [1, 2, 3];
// arrB = [2, 3, 4];
//
// function findTheDifference(arr1, arr2) {
//       const arr1Uniq = arr1.filter(item => !arr2.includes(item));
//       const arr2Uniq = arr2.filter(item => !arr1.includes(item));
//       return [...arr1Uniq, ...arr2Uniq];
// // return Array.from(new Set(arr1Uniques.concat(arr2Uniques)));
// }
//
// console.time("time");
// console.log(findTheDiff(arrA, arrB));
// console.timeEnd("time");



//alternative
function findTheDifference(arr1, ...arrs) {
          const cominedArgs =[].concat.apply([], arrs)
          const cobined = []
          arr1.push(...cominedArgs)
          combined.push(...arr1);
          const unique  = combined.filter(item=>{
              return combined.indexOf(item) === comnined.lastIndexOf(item)
      })
      return unique
}




module.exports = findTheDiff;
