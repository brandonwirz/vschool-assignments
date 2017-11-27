import React, {Component} from "react";

class Form extends Component{
    constructor(){
        super()
        this.state = {
            fName: "",
            lName: "",
            age: "",
            gender: "",
            location: "",
            dietaryRestrictions: []
        }
        this.handleInputsChange =  this.handleInputsChange.bind(this)
    }


    handleInputsChange(e){
        e.persist();
        console.log(e.target.name, e.target.checked, e.target.value);
        if(e.target.type === 'checkbox'){
            if(e.target.checked){
                this.setState(prevState=>{
                    prevState.dietaryRestrictions.push(e.target.value)
                    return {dietaryRestrictions: prevState.dietaryRestrictions}
                })
            } else {
                this.setState(prevState=>{
                    let index = prevState.dietaryRestrictions.indexOf(e.target.value)
                    prevState.dietaryRestrictions.splice(index, 1);
                    return {dietaryRestrictions: prevState.dietaryRestrictions}
                })
            }
        } else {
            this.setState({[e.target.name]: e.target.value})
        }
    }

    render(){
        const block = {
            display: "block"
        }
        return (
            <div>
                <form onSubmit={ (e)=>this.props.submit(e, this.state) }>

                    <input style={block} name="fName" onChange={this.handleInputsChange} value={this.state.fName}/>

                    <input style={block} name="lName" onChange={this.handleInputsChange} value={this.state.lName}/>

                    <input style={block} name="age" type="number" onChange={this.handleInputsChange} value={this.state.age}/>

                    <fieldset>
                        <input style={block} name='gender' type='radio' onChange={this.handleInputsChange} value='male'/>Male
                        <input style={block} name='gender' type='radio' onChange={this.handleInputsChange} value='female'/>Female
                        <input style={block} name='gender' type='radio' onChange={this.handleInputsChange} value='other'/>Other
                    </fieldset>

                    <select style={block} name="location" onChange={this.handleInputsChange}>
                        <option>Please Select a Value</option>
                        <option value="boise">Boise</option>
                        <option value="jackson">Jackson Hole</option>
                        <option value="slc">Salt Lake City</option>
                    </select>


                    <label style={block}>
                        vegetarian
                        <input name='dietaryRestrictions' type='checkbox' value="vegetarian"  onChange={this.handleInputsChange} />
                    </label>

                    <label style={block}>
                        kosher
                        <input name='dietaryRestrictions' type='checkbox' value="kosher"  onChange={this.handleInputsChange} />
                    </label>

                    <label style={block}>
                        lactose free
                        <input name='dietaryRestrictions' type='checkbox' value="lactose"  onChange={this.handleInputsChange} />
                    </label>

                    <button>submit</button>
                </form>
            </div>
        )
    }
}

export default Form
