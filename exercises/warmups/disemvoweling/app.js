// Today we are going to be building a function that removes all
//vowels and spaces from a string. It will then return the result
// as an object with two keys "str" and "vowels"
//
//
// Input:
// "Pickle Rick!"
//
// Output:
// {
//   str: "pckrck!",
//   vowels: "iei"
// }


// disemvowel = input => {
//     let output = {
//         str: "",
//         vowels: ""
//     };
//     let vowels = "aeiou";
//     for (let i = 0; i < input.length; i++) {
//         if (vowels.includes(input[i])) {
//             output.vowels += input[i];
//         } else if (input[i] === " ") {
//             continue;
//         } else output.str += input[i];
//     }
//     return output;
// };

// console.log(disemvowel("test"));


//regex solution 1
function vowels(string) {
    return {
        cons: string.toLowerCase().match(/[^aeiou\s]+/g).join(""),
        vowels: string.toLowerCase().match(/[aeiou]+/g).join("")
    }
}
console.log(vowels("Pickle Rick!"))




//regex solution 2
function disemvowel(str){
  newObj = {}
  const noVowels = str.replace(/[aeiou\s/]+/g,'');//	Most engines: "whitespace character": space, tab, newline, carriage return, vertical tab
  const vowels = str.replace(/[^aeiou]+/g, '');//	^Start of string or start of line depending on multiline mode. (But when [^inside brackets], it means "not")
  newObj.str = noVowels.toLowerCase();
  newObj.vowels = vowels.toLowerCase();
  console.log(newObj)
}

disemvowel("Pickle Rick!")
