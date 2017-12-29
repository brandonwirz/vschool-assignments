// Write a function that takes a query object and an HTTP
// endpoint and then returns a URL with a query string.

//Example:
// let endpoint = "http://localhost:8080/monkeys",
// let query = {
//   color: "black",
//   species: "howler"
// }
// stringifyUrl(endpoint, query);
//
// //returns "http://localhost:8080/monkeys?color=black&species=howler"



// var endpoint = "http://localhost:8080/monkeys";
// var query = {
//   color: "black",
//   species: "howler"
// }
// stringifyUrl = (endpoint, query) => {
//     let url = endpoint + "?";
//     for(let key in query) {
//         url += `${key}=${query[key]}&`;
//     }
//       return url.slice(0, -1)
// }
// console.log(stringifyUrl(endpoint, query));



var endpoint = "http://localhost:8080/monkeys"
var query = {
  color: "black",
  species: "howler"
}
function stringifyUrl(endpoint, query) {
      endpoint += "?"
      for(let key in query) {
          endpoint += `${key}=${query[key]}&`
      }
      return endpoint.slice(0, -1)
}
console.log(stringifyUrl(endpoint, query));

//http://localhost:8080/monkeys?color=black&species=howler

console.log(stringifyUrl(endpoint, query) === "http://localhost:8080/monkeys?color=black&species=howler" );//true


//alternative
// function stringifyUrl(endpoint, query){
//   if(Object.keys(query).length === 0) {
//       return endpoint;
//   }
//   endpoint += "?";
//   for(let prop in query) {
//         endpoint += `${prop}=${query[prop]}&`;
//     }
//     return endpoint.slice(0, -1)
// }
// console.log(stringifyUrl(endpoint, query));
