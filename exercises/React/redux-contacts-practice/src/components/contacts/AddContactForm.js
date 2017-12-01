import React, {Component} from "react";
import {connect} from "react-redux";
import {addContact} from "../../redux/contacts";

class AddContactForm extends Component{
    constructor(props){
      super(props);
      this.state = {
          name: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //just getting value
    handleChange(e) {
      this.setState({
          // name: e.target.value
          [e.target.name]: e.target.value//newContact name
      });
    }

    handleSubmit(e) {
      e.preventDefault();//because page refreshes
      this.props.addContact(this.state);//addContact needs to what contact
      this.setState({
          fisrtName: ""
      });
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input name="name"
                       placeholder="New Contact Name"
                       value={this.state.name}
                       type ="text"
                       onChange={this.handleChange}/>
                <button>Add Contact</button>
            </form>
         )
      }
  }

  //data form store null none yet
  // connect dispatch an action creator
  // export default connect(null, {addContact: addContact })(AddContactForm);
  //whats available, interact, and connect to the store
  export default connect(null, {addContact})(AddContactForm)
