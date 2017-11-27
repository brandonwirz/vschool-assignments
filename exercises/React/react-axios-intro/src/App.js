import React ,{Component} from "react"
import axios from "axios"
import Person from "./Person"


class App extends Component{
    constructor(){
      super()
      this.state ={
        people: []
      }
    }
      //promise
    componentDidMount(){                              //callback function
          axios.get("https://swapi.co/api/people").then((response)=>{
            // const names = response.data.results.map(person=>person.name)
            this.setState({people: response.data.results})
            // this.setState({people: response.data.results})
          })
    }

    render(){
      return this.state.people.map((person, i)=>{
          return <Person info={person} key={person.name + i}/>
        })
    }
}
export default App;
