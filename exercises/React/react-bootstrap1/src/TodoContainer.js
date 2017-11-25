import React, {Component} from "react";
import axios from "axios";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
class TodoContainer extends Component{
    constructor(){
        super()
        this.state = {
            todos:[]
        }
        // this.newTodo = this.newTodo.bind(this);
    }

    componentDidMount(){
        axios.get('https://api.vschool.io/ericnatejones/todo').then(response=>{
            this.setState({todos:response.data})
        })
    }

    // componentDidUpdate(){
    //     axios.post('https://api.vschool.io/brandonwirz/todo', {title: "getmilk"}).then(response=>{
    //       this.setState(prevState=>{
    //         prevState.todos.push(response.data)
    //         return {todos: prevState.todos}
    //       })
    //         // this.setState({todos:response.data})
    //     });
    // }


    // componentDidUpdate(){
    //     axios.delete('https://api.vschool.io/brandonwirz/todo/id',).then(response=>{
    //       console.log({msg: response.data})
    //       this.setState(prevState=>{
    //         prevState.todos.splice(index, 1)
    //         return {todos: prevState.todos}
    //
    //         // this.setState({todos:response.data})
    //     });
    // }

    componentDidUpdate(){
        axios.put('https://api.vschool.io/brandonwirz/todo/id', {title: "getmilk"}).then(response=>{
          // console.log({msg: response.data})
          this.setState(prevState=>{
            prevState.todos.[index] = response.data
            return {todos: prevState.todos}

            // this.setState({todos:response.data})
        });
    }




    // newTodo(info){
    //     this.setState((prevState)=>{
    //         prevState.todos.push(info);
    //         return {todos: prevState.todos}
    //     })
    // }
    //
    // deleteTodo(index){
    //     this.setState(prevState=>{
    //         const todos = [...prevState.todos];
    //         todos.splice(index, 1)
    //         return {todos}
    //     })
    // }

    render(){

        return (
            <div>

             <TodoList todos={this.state.todos}/>

            </div>
        )
    }
}

export default TodoContainer;
