import React, {Component} from "react";
import TodoForm from "./TodoForm";
import axios from "axios";
import TodoList from "./TodoList";

class TodoContainer extends Component{
    constructor(){
        super()
        this.state = {
            todos:[]
        }

        // this.newTodo = this.newTodo.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.addTodo = this.addTodo.bind(this);
    }

    componentDidMount(){
        axios.get('https://api.vschool.io/brandonwirz/todo').then(response=>{
            this.setState({todos:response.data.reverse()})
        })
    }

    addTodo(info){
        axios.post('https://api.vschool.io/brandonwirz/todo',info).then(response => {
            // console.log(return {todos: prevState.todos})
            this.setState(prevState => {
                const newInfo = response.data;
                // prevState.todos.unshift.(response.data)
                const todos = [newInfo, ...prevState.todos]
                return {todos: prevState.todos}
            })
      })
  }

    deleteTodo(event){
        event.persist();
        axios.delete('https://api.vschool.io/brandonwirz/todo/' + event.target.id).then((response)=>{
            console.log(response)
            this.setState((prevState)=>{
                const index = prevState.todos.findIndex(todo=>todo._id === event.target.id);
                prevState.todos.splice(index, 1);
                return {todos: prevState.todos}
            })
        })
    }



    //   putTodo(id, editTodo){
//       axios.put('https://api.vschool.io/brandonwirz/todo/', {title: "getmilk"}).then(response => {
//         // console.log({msg: response.data})
//         this.setState(prevState=>{
//           prevState.todos.[index] = response.data
//           return {todos: prevState.todos}
//
//           // this.setState({todos:response.data})
//       });
//   }
// }

    render(){
        return (
            <div>
                <TodoForm addTodo={this.newTodo} />
                <TodoList todos={this.state.todos} delete={this.deleteTodo}/>
            </div>
        )
    }
}

export default TodoContainer;
