import React, {Component} from "react";



function Todo(props) {
    return(
           <tr>
              <td>{props.info.title}</td>
              <td>{props.info.description}</td>
              <td>{props.info.price}</td>
              <td>{props.info.imgURL}</td>
              <button onClick={props.delete}>x</button>
              <button onClick={props.post}>Add Todo</button>
           </tr>
    )
}

export default Todo;
