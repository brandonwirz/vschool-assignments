import React from "react";
import Todo from "./Todo"


function TodoList(props) {
    return props.todos.map((todo, i) => {
          return <Todo info={todo} key={todo._id} index={i} delete={props.delete}/>
    })
}


export default TodoList;
