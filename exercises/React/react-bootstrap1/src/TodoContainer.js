import React, {Component} from "react";
import TodoForm from "./TodoForm";
// import TodoList from "./TodoList";

class TodoContainer extends Component{
    constructor(){
        super()
        this.state = {
            todos:[]
        }

        this.newTodo = this.newTodo.bind(this);
    }

    // componentDidUpdate(){
    //     axios.get('https://api.vschool.io/ericnatejones/todo').then(response=>{
    //         this.setState({todos:response.data})
    //     })
    // }

    newTodo(info){
        this.setState((prevState)=>{
            prevState.todos.push(info);
            return {todos: prevState.todos}
        })
    }

    render(){
        return (
            <div>
                <TodoForm newTodo={this.newTodo}/>
            </div>
        )
    }
}

export default TodoContainer;
