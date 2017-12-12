import React from "react";
import {connect} from "react-redux";

import {deleteImg} from "../../redux/contacts";


const styles ={
        textAlign:"center",
        margin: "0 auto"
}

function ContactsList(props){
    const contacts = props.contacts.map((contact, i) => {
        return (
              <div className="ugly" key={contact.title + i}>
                  <h1>{contact.title}</h1>
                  <h2>{contact.description}</h2>
                  <img src={contact.img} alt={`${contact.title}`}/>
                  <button onClick={props.handleDelete}>Delete</button>
              </div>
              )
          });

  return (
          <div style={styles}>
             {contacts}
          </div>
    )
}


function mapStateToProps(state){
    return state
}

export default connect(mapStateToProps, {deleteImg})(ContactsList);
