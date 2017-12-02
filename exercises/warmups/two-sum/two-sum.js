//Given an array of integers and a target integer, return the
//indices of the two numbers which add up to the target.

// const nums = [2, 8, 12, 16];
// function twoSum(arr, target) {
//     for (let i = 0; i < arr.length; i++) {
//         let num = target - arr[i];
//          // console.log(target -arr[i])//===8
//         let index = arr.indexOf(num);
//         // console.log(num)//===8
//         if (index !== i) {
//           // console.log([i, index])//===0
//             return [i, index];
//       }
//    }
// }
// console.log(twoSum(nums, 10)) // return [0,1]


//alternative
const twoSum =(arr, num)=>{
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if(arr[i] + arr[j] === num) {
          return [i, j]
        }
      }
   }
}
console.log(twoSum([1,2,3], 4));// return [0,1]
