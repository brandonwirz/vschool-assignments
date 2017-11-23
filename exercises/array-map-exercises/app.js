//The map() method creates a new array with the results of calling a function for every array element.

// 1) Make an array of numbers that are doubles of the first array
function doubleNumbers(arr){
  var doubledArr = [];
  for(var i =0; i < arr.length; i++){
    doubledArr.push(arr[i]* 2)
  }
  return doubledArr;
  console.log(doubledArr);
}
doubleNumbers([2, 5, 100]);

function doubleNumbers(arr){
  var double = arr.map(function(num){
    return num * 2
  })
  return double
}

function doubleNumbers(arr){
  return arr.map((num) => (num * 2) )
}
console.log(doubleNumbers([2, 5, 100]));


//2) Take an array of numbers and make them strings
function stringItUp(arr){
  // return arr.map(String);
   return arr.map(num => num.toString())
}
console.log(stringItUp([2, 5, 100]));


//3) Make an array of strings of the names
 function namesOnly(arr){
     var nameArr = arr.map((person) => {
         return person.name;
     });
     return nameArr;
 };

 function namesOnly(arr){
     return arr.map(person => person.name)
     // return arr.map(person => person.age)
 };

 console.log(namesOnly([
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
 ]));


 //4) Make an array of strings of the names saying
 //whether or not they can go to The Matrix
 function thereIsNoSpoon(arr){
   return arr.map(person => {
     if (person.age >= 18) {
         return `${person.name} can go to The Matrix`;
     } else {
         return `${person.name} is under age!!`
     };
   });
 };
 console.log(thereIsNoSpoon([
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
 ]));



//5) Make an array of the names in H1s, and the ages in H2s
function readyToPutInTheDOM(people){
    return people.map(person =>{
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

//alternative
function readyToPutInTheDOM(people){
    return people.map(function(person){
        return {
            firstName: person.name.split(" ")[0],
            lastName: person.name.split(" ")[1],
            age: person.age
        }
    })
}

//alternative
function readyToPutInTheDOM(arr){
    let domReadyArr = arr.map((person) => {
        return `<h1>${person.name}</h1><h2>${person.age}</h2>`
    });
    return domReadyArr;
};

// ["<h1>Angelina Jolie</h1><h2>80</h2>",
// "<h1>Eric Jones</h1><h2>2</h2>",
// "<h1>Paris Hilton</h1><h2>5</h2>",
// "<h1>Kayne West</h1><h2>16</h2>",
// "<h1>Bob Ziroll</h1><h2>100</h2>"]
