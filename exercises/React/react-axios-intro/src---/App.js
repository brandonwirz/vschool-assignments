import React ,{Component} from "react"
import axios from "axios"


class App extends Component{
  constructor(){
    super();
    this.state ={
      todo: []
    }
  }

  ComponentDidMount(){
      axios.get("https://api.school.io/ericnatejones/todo").then((response)=>{
        //console.log(response)
        this.setState({todos: response.data})
        // let data = response.data;
      })
  }
    render(){
        return <h1>hello</h1>
  }
}

export default App;
