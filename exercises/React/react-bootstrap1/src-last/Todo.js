import React, {Component} from "react";
import {ListGroupItem} from "react bootstrap"
import axios from "axios"

class Todo extends Component{
  constructor(props){
    super(props);
    this.state ={
        completed: props.info.completed
    }
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  toggleCompleted(){
    this.state(prevState=>{
      return {completed: !prevState.completed}
    })
    axios.put('https://api.vschool.io/brandonwirz/todo' + this.props._id, {completed: !this.state.completed}
        .then(response => {
          this.setState(prevState=>{
              return {complete: response.data.completed}
          })
      })
  }

    render(){
        const {title, description, imgURL, price, completed, _id} = this.props.info;
        return (
            <div>
              <ListGroupItem header={title} {description}

                <button id={_id} onClick={this.props.delete}>x</button>

                <input onChange={this.toggleCompleted} type="checkbox" checked={this.state.completed ? true : false}/>/>
            </div>
        )
    }
}

export default Todo;
