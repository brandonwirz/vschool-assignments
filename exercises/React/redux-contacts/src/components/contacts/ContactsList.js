import React from "react";
import {connect} from "react-redux";


function ContactsList(props){
  // console.log(props);//props.contacts
    const contacts =  props.contacts.map(
      (contact, i) => <li key={contact.name + i}>{contact.name}</li>
    )//only one item no brackets needed

    return(
        <ul>
            {contacts}
        </ul>
    )
}
function mapStateToProps(state){
    return state
}
//place an order form store
export default connect(mapStateToProps, null)(ContactsList);
