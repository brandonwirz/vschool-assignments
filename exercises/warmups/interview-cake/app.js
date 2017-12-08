
//map through array, make array of all differences

[0]-[1] results
[0]-[2]
[0]-[3]
[1]-[2]
[1]-[3]
[2]-[3]


function getMaxProfit(arr){
    let foundDiffs = [];
    //go through every price and time
    for (let i= 0; i < arr.length; i++){
      // let temp = arr[i]
        for (let j = i + 1; j < arr.length; j++){
            foundDiff.push(arr[j] - arr[i])
        }
      }
        return Math.max(...foundDiffs)
}
// var stockPricesYesterday = [10, 7, 5, 8, 11, 9];

console.log(getMaxProfit([10, 7, 5, 8, 11, 9]));//6
console.log(getMaxProfit([40, 7, 5, 8, 11, 9]));//6
console.log(getMaxProfit([40, 7, 5, 4, 0]));//-1

//alt
// function getMaxProfit(stockPrices) {
//     var minPrice = stockPrices[0];
//     var maxProfit = stockPrices[1] - stockPrices[0];
//
//     for (var i = 1; i < stockPrices.length; i++) {
//         var current = stockPrices[i];
//         var potential = current - minPrice;
//         maxProfit = Math.max(maxProfit, potential);
//         minPrice = Math.min(minPrice, current);
//     }
//     return maxProfit;
// }
//
// console.log(getMaxProfit([10, 7, 5, 8, 11, 9]));
// console.log(getMaxProfit([40, 7, 5, 8, 11, 9]));
// console.log(getMaxProfit([40, 7, 5, 4, 0]));
