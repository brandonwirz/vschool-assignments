import React, {Component} from "react";
import Output from "./Output.js";
import Form from "./Form.js"

class TravelInfoContainer extends Component{
    constructor(){
        super()
        this.state = {
            forms: []
        }

    }

    handleSubmit = (e, info) => {
        e.preventDefault();
        this.setState(prevState=>{
            prevState.forms.push(info)
            return {forms:prevState.forms}
        })
    }

    render(){
        return (
            <div>
            <Form submit={this.handleSubmit}/>
                {this.state.forms.map(form => {
                    return (
                    <Output
                        first={form.fName}
                        last={form.lName}
                        age={form.age}
                        location={form.location}
                        gender={form.gender}
                        diet={form.dietaryRestrictions.join(", ")}/>
                    )
                })}
            </div>
        )
    }
}

export default TravelInfoContainer;
