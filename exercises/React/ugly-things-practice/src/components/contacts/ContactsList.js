import React from "react";
import {connect} from "react-redux";

const styles ={
        textAlign:"center",
        margin: "0 auto"
}


function ContactsList(props){
   const contacts = props.contacts.map((contact, i)=>{
        return(
            <div>
                <h1 key={contact.title + i}></h1>
                <h2>{contact.description}</h2>
                <img src={contact.img} alt={`${contact.title}`}/>
            </div>
        )
  })

  return(
      <div style={styles}>
           {contacts}
      </div>
  )
}


function mapStateToProps(state){
    return state

}

export default connect(mapStateToProps, null)(ContactsList);
