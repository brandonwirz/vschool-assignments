var todos = [
    {
        "title": "flooring",
        "price": "10k",
        "description": "hard wood floors"
    },
    {
        "movies": "Red",
        "length": "2 hours"
    }
]

for (var i = 0; i < todos.length; i++){
    document.getElementById("todos").innerHTML += "<div>" + todos[i].title + "</div>"
    document.getElementById("todos").innerHTML += "<div>" + todos[i].price + "</div>"
    document.getElementById("todos").innerHTML += "<div>" + todos[i].description + "</div>"
    document.getElementById("todos").innerHTML += "<div>" + todos[i].movies + "</div>"
    document.getElementById("todos").innerHTML += "<div>" + todos[i].length + "</div>"
}


// var newTodo = {title: "new todo item form axios"}
// axios.post("https://api.vschool.io/BrandonWirz/todo", newTodo)
// .then(function(response)){
//
//
// }
