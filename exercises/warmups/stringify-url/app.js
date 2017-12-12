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
//
//
//
// console.log(stringifyUrl(endpoint, query));


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


// app.get("/", (req, res)=>{
//     console.log(req.query)
//
//     const searchResults = sweaters.filter(sweater=>{
//
//         let doesMatchAll = true
//
//         for (prop in req.query){
//             if (sweater[prop].toLowerCase() !== req.query[prop]){
//                 doesMatchAll = false
//             }
//         }
//
//         return doesMatchAll
//     })
//     return res.send(searchResults)
// })
//
// app.listen(port, () => {
//     console.log(`Server is listening on port ${port}`)
// })
