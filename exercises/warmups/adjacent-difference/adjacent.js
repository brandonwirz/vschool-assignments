// Given an array of strings, find the 3 adjacent elements with the
// longest combined length. Return them in the form of an array.

// function adjDiff(arr){
//    let longestCombinedThree = []
//     for(let i = 0; i < arr.length - 3; i++) {
//         if (arr[i].length + arr[i+1].length + arr[i+2].length >
//             arr[i+1].length + arr[i+2].length + arr[i+3].length) {
//             longestCombinedThree = [arr[i], arr[i+1], arr[i+2]];
//         } else {
//             longestCombinedThree = [arr[i+1], arr[i+2], arr[i+3]];
//         }
//     }console.log(longestCombinedThree);
// }
// adjDiff(["this", "is", "an", "array"]);


//alt
function adjDiff(arr){
   let combinedThrees = []
    for(let i = 0; i < arr.length - 2; i++) {
      combinedThrees[i] = arr[i].length + arr[i+1].length + arr[i+2].length
        }
        let index = combinedThrees .indexOf(Math.max(...combinedThrees));
        (arr.length < 3) ? console.log(arr) : console.log([arr[index], arr[index+1],arr[index+2]] )
    }

adjDiff(["this", "is", "an", "array"]);

//alt

// const inputArray = ["this", "is", "an", "array", "s", "s", "s", "sssssssssssssssssssssssssssssss"]
//
// function longest(arr) {
//     let beginIndex = 0;
//     let longestLength = arr.slice(0,3).join("").length;
//     let currLength;
//     for (let i = 1; i < arr.length - 2; i++) {
//         currLength = arr.slice(i,i+3).join("").length;
//         if (currLength > longestLength) {
//             beginIndex = i;
//             longestLength = currLength;
//         }
//     }
//     return arr.slice(beginIndex, beginIndex + 3);
// }
//
// console.log(longest(inputArray))
