//presentational component
import React, {Component} from "react";
import {connect} from "react-redux";
import {getAllTodos} from "../../redux/contacts";


class ContactsList extends Component{
    componentDidMount(){
      this.props.getAllTodos();
    }
  // console.log(props);//props.contacts
  render() {
    const contacts =  this.props.contacts.map(
      (contact, i) => <li key={contact.name + i}>{contact.title}</li>
    )//only one item no brackets needed
    return(
        <ul>
            {contacts}
        </ul>
    )
  }
}
function mapStateToProps(state){
    return state
}
//place an order form store
export default connect(mapStateToProps, {getAllTodos})(ContactsList);
