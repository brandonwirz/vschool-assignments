
document.getElementById("submit").addEventListener("click", function(){
    var newTodo = {title: document.getElementById("title").value}

    axios.post("https://api.vschool.io/BrandonWirz/todo", newTodo)
    .then(function(response){
        var newTodo = response.data;
        var newString = `<h1>${newTodo.title}</h1>` + document.getElementById("todos").innerHTML
        document.getElementById("todos")
        .innerHTML = newString;
    })
})

axios.get("https://api.vschool.io/BrandonWirz/todo")
.then(function(response){
    var todos = response.data;
    todos.map(function(todo){
        if (todo.completed === true){
            var checked = "checked";
        } else {
            var checked = "";
        }
        document.getElementById("todos")
        .innerHTML += `<h1>${todo.title}</h1><input type="checkbox" ${checked}/>`;
    })
})

axios.get("https://api.vschool.io/BrandonWirz/todo")
.then(function(response){
    var todos = response.data;
    todos.map(function(todo){
        document.getElementById("todos").innerHTML += `<h1>${todo.title}</h1>`;
    })
})




//
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <meta http-equiv="X-UA-Compatible" content="ie=edge">
//     <link rel="stylesheet" href="style.css"/>
//     <title>Todo List</title>
// </head>
// <body>
//     <div class "table-container">
//         <table id="chores">
//             <tr>
//                 <th>Title</th>
//                 <th>Description</th>
//                 <th>Price</th>
//
//             </tr>
//
//         </table>
//         <div class = "list-control">
//             <form>
//                 Add a new to-do:<br>
//                 Title: <input type="text" id="newTitle"><br>
//                 Description: <input type="test" id="newDescription"><br>
//                 Price: <input type="text" id = "newPrice">
//             </form>
//             <button id ="submit">Submit new task</button>
//         </div>
//
//     </div>
//     <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
//     <script src="app.js"></script>
// </body>
// </html>
