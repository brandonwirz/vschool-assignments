// function countStrings(arr){
//   let mostFrequentCounter = 1;
//   let mostFrequentString = arr[0]
//
//   for (let i = 0; i < arr.length; i++){
//     let frequency = 0;
//       for (let j = 0; j < arr.length; j++){
//         if(arr[i] === arr[j]){
//           frequency++
//           }
//       }
//       if(frequency > mostFrequentCounter){
//         mostFrequentCounter = frequency
//         mostFrequentString = arr[i]
//       }
//   }
//   return mostFrequentString
// }
//
// console.log(countStrings(["dog", "cat", "mouse", "cat", "mouse", "cat"]));
// //returns cat
//


function countStrings(arr){
let counterObject = {
  dog: 1,
  cat:3,
  mouse: 2
  }

  for (let i = 0; i < arr.length; i++){
    if(counterObject[arr[i]]){
      counterObject[arr[i]]++
    }else{
      counterObject[arr[i]] = 1
    }
}
console.log(countStrings(["dog", "cat", "mouse", "cat", "mouse", "cat"]));
