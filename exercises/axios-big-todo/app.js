
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
