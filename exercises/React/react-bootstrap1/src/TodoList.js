import React from "react";
import Todo from "./Todo";

import {ListGroup} from "react-bootstrap"

function TodoList(props){
    return (
        <ListGroup>
        {props.todos.map(todo=><Todo info={todo} delete={props.delete} key={todo._id}/>)}
    </ListGroup>
    )
}

export default TodoList
