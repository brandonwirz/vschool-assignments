import React, {Component} from "react";



function Todo(props) {
    return(
        <table>
             <tr>
                <td>{props.info.title}</td>
                <td>{props.info.description}</td>
                <td>{props.info.price}</td>
                <td>{props.info.imgURL}</td>
                <button onClick={()=>props.delete(props.info._id)}>x</button>
                <button onClick={props.put}>edit</button>
             </tr>
         </table>
    )
}

export default Todo;


// { <div >
//     <h1>{props.todo.title}</h1>
//     <h2>{props.todo.description}</h2>
//     <button onClick= {() => props.deleteTodo(props.todo._id)}> Delete </button>
//   <div>
//     <button onClick={props.post}>Add Todo</button>
//
//     <form onSubmit = {props.handleSubmit}>
//       <input onChange = {props.handleEdit} name="title" value ={props.editedTodo.title} type="text" placeholder = "Edit Title"/>
//
//       <input onChange = {props.handleEdit} name ="description" value ={props.editedTodo.description} type="text" placeholder = "Edit Description"/>
//       <button type="submit">Save</button>
//     </form>
//   </div>
//   <hr/>
// </div> }
