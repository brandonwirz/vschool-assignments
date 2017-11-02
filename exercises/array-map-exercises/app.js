
// 1) Make an array of numbers that are doubles of the first array
// function doubleNumbers(arr){
//   var doubledArr = [];
//   for(var i =0; i < arr.length; i++){
//     doubledArr.push(arr[i]* 2)
//   }
//   return doubledArr;
//   console.log(doubledArr);
// }
// doubleNumbers([2, 5, 100]); // [4, 10, 200]


//2) Take an array of numbers and make them strings

// function stringItUp(arr){
//   var strA = '';
//     for (var i= 0; i < arr.length; i++){
//       var arr = strA.map()
//     }
//     return arr
//     console.log(arr)
// }
//
// stringItUp([2, 5, 100]); // ["2", "5", "100"]


// for(var i =0;i < arr.length; i++){
//   arrNames.push(readyToPutInTheDOM[i].name);
// }
// return arrNames[1]

// readyToPutInTheDOM.name[]

//SOlution
// function readyToPutInTheDOM(people){
//     return people.map(function(person){
//         return {
//             firstName: person.name.split(" ")[0],
//             lastName: person.name.split(" ")[1],
//             age: person.age
//         }
//     })
// }

// function readyToPutInTheDOM(people){
//     return people.map(function(person){
//         return `<h1>${person.name.split(" ")[0]}<h1><h2>${person.age}</h2>`;
//     })
// }
function readyToPutInTheDOM(people){
    return people.map(function(person){
        return `<h1>${person.name.split(" ")[0]}<h1><h2>${person.age}</h2>`;
    })
}


console.log(readyToPutInTheDOM([
  {
    name: "Angelina Jolie",
    age: 80
  },{
    name: "Eric Jones",
    age: 2
  },{
    name: "Paris Hilton",
    age: 5
  },{
    name: "Kayne West",
    age: 16
  },{
    name: "Bob Ziroll",
    age: 100
  }
])
)
// ["<h1>Angelina Jolie</h1><h2>80</h2>",
// "<h1>Eric Jones</h1><h2>2</h2>",
// "<h1>Paris Hilton</h1><h2>5</h2>",
// "<h1>Kayne West</h1><h2>16</h2>",
// "<h1>Bob Ziroll</h1><h2>100</h2>"]
