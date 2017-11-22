import React ,{Component} from 'react';
import axios from "axios"
import HitList from "./components/HitList";


class App extends Component {
  constructor(){
    super()
    this.state ={
      hitList: []

    }
  }

  componentDidMount(){
    axios.get('http://api.vschool.io:6543/hitlist.json').then((response)=>{
      this.setState({hitList: response.data.results})
    })
}


  render() {
    return this.state.hitList.map(hit =>{
        return <Person info={hit}/>
    })
  }
}

export default App;
