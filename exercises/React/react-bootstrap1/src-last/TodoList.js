import React from "react";
import Todo from "./Todo";

function TodoList(props){
    return props.todos.map(todo=><Todo info={todo} delete={props.delete} key={todo._id}/>)
}

export default TodoList
