import React from "react";
import Form from "./Form.js";
import {connect} from "react-redux";
import {addItem} from "../../actions";

class FormContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      url: "",
      desc: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    e.persist();
    this.setState((prevState) => ({
      [e.target.name]: e.target.value
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addItem(this.state.name, this.state.url, this.state.desc);
    this.setState((prevState) => ({
      name: "",
      url: "",
      desc: ""
    }));
  }

  render() {
    return (<Form {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>)
  }
}

export default connect(null, {addItem})(FormContainer)
