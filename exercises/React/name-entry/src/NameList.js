import React ,{Component} from "react";
import Name from './Name';


class NameList extends Component{
      constructor(){
      super();
      this.state = {
          input: "",
          names: []
      }
      this.submitName = this.submitName.bind(this)
      this.onInputChange = this.onInputChange.bind(this)
      this.deleteName = this.deleteName.bind(this)
  }

  submitName(event){
        event.preventDefault()
        this.setState((prevState)=>{
            // prevState.names.push(this.state.input)
            const names = [...prevState.names]
            names.push(prevState.input)
            return {names, input: ""}
        })
    }

  onInputChange(event){
        this.setState({input: event.target.value})
    }



  deleteName(index){
    this.setState(prevState=>{
      const names = [...prevState.names]
      names.splice(index, 1)
      return {names}
    })
  }


  render(){
      const nameList = this.state.names.map((name,i)=>{
          return <Name name={name} key={name + i} index={i} delete={ () => this.deleteName(i)}/>
      })
      return(
            <div>
                <input onChange={this.onInputChange} value={this.state.input}/>
                <button onClick={this.submitName}>submit</button>
                {nameList}

            </div>
      )
   }
}


export default NameList;
