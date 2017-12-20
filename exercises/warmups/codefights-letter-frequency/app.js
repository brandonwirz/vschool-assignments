// Calculates the character frequencies in a string. Whitespace and
//  punctuation is ignored. Non-english characters are not counted.
//  Case is ignored (‘A’ and ‘a’ both count toward the same character).
//
// Returns an object with keys being lowercase characters, and
//                  values being the character counts.
//  @example
// charFreq('Ceres');
//  *  // returns { c: 1, e: 2, r: 1, s: 1 }
//
// function charFreq(sentence) {
//   // Your code here
// }


// console.log(deepEquals(func("vscv"), {v: 2, s: 1, c: 1}))
//
// function func("vscv"){
//       const arr = str.lowerCase().split("")
//       const output = {}
//       for (let i = 0; i <arr.length; i++) {
//         if (output[arr[i]]) {
//             output[arr[i]]++
//       } else {
//             output[arr[i]] = 1
//       }
//    }
//    return output
// }


console.log(deepEquals(func("vs$ cv"), {v: 2, s: 1, c: 1}))

//alt
console.log(deepEqualsObject(func("vs$ cv"), {v: 2, s: 1, c: 1}))

function func(str){
    return str.toLowerCase().split("").reduce((prev, char) => {
        if (!char.match(/[a-z]/)) return prev
        if (prev[char]){
            prev[char]++
        } else {
            prev[char] = 1
        }
        return prev
    }, {})

}

function deepEqualsObject(output, expectedOutput){
    for (key in output){
        if (output[key] !== expectedOutput[key]) return false
    }
    return true
}

// 1 === 1//true
