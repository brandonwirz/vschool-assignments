// Given a query object and an array of objects, write a
// function that returns an array of items that match the query.
//
// If the query object is empty, return the entire array.
// If the array contains no matches, return an empty array

//example:
// let database = [
// {a: 1, b: 1, c: 2},
// {a: 0, b: 0, c: 2},
// {a: 0, b: 1, c: 0},
// {a: 1, b: 2, c: 2}
// ];

// filterDatabase({}, database);
//   //returns entire database array
//
// filterDatabase({dolphin: "squeak!"});
//   //returns empty array
//
// filterDatabase({a: 1, c: 2});
//   //returns
// [
//   {a: 1, b: 1, c: 2},
//   {a: 1, b: 2, c: 2}
// ]

let database = [
{a: 1, b: 1, c: 2},
{a: 0, b: 0, c: 2},
{a: 0, b: 1, c: 0},
{a: 1, b: 2, c: 2}
];

function filterDatabase(query, database) {
  //  if the query is empty return database
  if (typeof query !=="object"){
    throw "You must provide and object as a query"
  }
    if (Object.keys(query).length === 0) {
        return database;
    }
    return database.filter(obj => {
       for (let prop in query) {//loop through query
          if (query[prop] !== obj[prop]) { //if key value pair does not equal a key value pair
             return false;
        }
      }
      return true;
   });
}

console.log(filterDatabase({}, database));
console.log(filterDatabase({dolphin: "squeak!"}, database));
console.log(filterDatabase({a: 1, c: 2}, database));



//
// const database = [
//     {a: 1, b: 1, c: 2},
//     {a: 0, b: 0, c: 2, dolphin: "squeak!"},
//     {a: 0, b: 1, c: 0},
//     {a: 1, b: 2, c: 2}
// ];
//
// function filterDatabase(query, database) {
//     if (!query || typeof query !== "object") {
//         throw new Error("You must provide an object as a query");
//     }
//     if (Object.keys(query).length === 0) {
//         return database;
//     }
//     return database.filter(entry => {
//         for (let prop in query) {
//             if (query[prop] !== entry[prop]) {
//                 return false;
//             }
//         }
//         return true;
//     });
// }
//
// console.log(filterDatabase({}, database));
// console.log(filterDatabase({dolphin: "squeak!"}, database));
// console.log(filterDatabase({a: 1, c: 2}, database));
