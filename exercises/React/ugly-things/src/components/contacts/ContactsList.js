import React from "react";
import {connect} from "react-redux";
// import locations from "./data/locations.json"


const styles ={
    textAlign:"center",
    margin: "0 auto"

}
function ContactsList(props){
        // console.log(props);//props.contacts
  const contacts = props.contacts.map((contact, i) => {
        return (
              <div>
                  <h1 key={contact.title + i}></h1>
                  <h2>{contact.description}</h2>
                  <img src={contact.imgURL} alt={`${contact.title}`}/>
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
