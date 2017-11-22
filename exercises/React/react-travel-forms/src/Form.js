import React, {Component} from "react";
// import NameForm from "./NameForm"

class Form extends Component{
  constructor(){
    super()
    this.state = {
        firstName:"",
        lastName:"",
        age: "",
        genderType: "Select a gender please",
        location: "",
        dietraryRestrictions: ""
  }
    this.handleInputsChange = this.handleInputsChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
}
handleSubmit(e){
  e.preventDefault();
 alert(`First Name: ${this.state.firstName}\nLast Name: ${this.state.lastName}\nAge: ${this.state.age} \nGender Type: ${this.state.genderType} \nLocation: ${this.state.location} \nDietrary Restrictions ${this.state.dietraryRestrictions}`)
  // this.setState({inputs:{one: "",two: "", three: ""}})
  console.log(`One: ${this.state.one} ${this.state.two} ${this.state.three}`)
  // console.log(this.state.one + " " + this.state.two + " " + this.state.three)
}


handleInputsChange(e){
  const target = e.target;
  const value = target.type === "checkbox" ? target.checked :target.value;
  const name = target.name;
  // console.log(target + value);
  // console.log(value + value);
  // console.log(name + name);
  // condition ? (returned if true) : (returned if false)
  // console.log(this.state['one'])
  // console.dir(e.target)
  // this.setState({inputs: {[e.target.name]: e.taget.value}})
  this.setState({[e.target.name]:e.target.value})
}
render(){
  return(
    <div>
        <form onSubmit={this.handleSubmit}>
          <input name="firstName" onChange={this.handleInputsChange} value={this.state.one}/>
          <input name="lastName" onChange={this.handleInputsChange} value={this.state.two}/>
          <input name="age" onChange={this.handleInputsChange} value={this.state.three}/>
          <input name="dietraryRestrictions" type="checkbox" onChange={this.handleInputsChange} value="veggie"/>veggie
          <input name="dietraryRestrictions" type="checkbox" onChange={this.handleInputsChange} value="kosher"/>kosher
          <input name="dietraryRestrictions" type="checkbox" onChange={this.handleInputsChange} value="lactose free"/>lactose free
          <input name="location" onChange={this.handleInputsChange} value={this.state.four}/>
          <input name="genderType" type="radio" onChange={this.handleInputsChange} value="Male"/>Male
          <input name="genderType" type="radio" onChange={this.handleInputsChange} value="Female"/>Female
          <button>submit</button>
        </form>
    </div>

  )
}
}

export default Form;




// class App extends Component{
//     render() {
//         return(
//             <div>
//               <Input/>
//             </div>
//         )
//     }
// }
//
//
// export default App;
