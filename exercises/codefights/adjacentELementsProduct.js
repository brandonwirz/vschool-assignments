// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
//
// Example
//
// For inputArray = [3, 6, -2, -5, 7, 3], the output should be
// adjacentElementsProduct(inputArray) = 21.
//
// 7 and 3 produce the largest product.



function adjacentElementsProduct(inputArray) {
    let product = inputArray[0] * inputArray[1];
    for(let i=0; i< inputArray.length; i++) {
      product = inputArray[i] * inputArray[i+1] >= product ?  inputArray[i] * inputArray[i+1] : product
    }
    return product
}

adjacentElementsProduct([3, 6, -2, -5, 7, 3])


// function adjacentElementsProduct(inputArray) {
//   let product = inputArray[0] * inputArray[1];
//     for(let i=0; i< inputArray.length; i++) {
//       if(inputArray[i] * inputArray[i+1] >= product){
//         product = inputArray[i] * inputArray[i+1];
//
//         }
//       }
//   return product
// }
//
//
