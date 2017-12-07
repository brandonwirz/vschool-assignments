import React from "react";
import {connect} from "react-redux";

import {deleteImg} from "../../redux/contacts";
// const uglyThings = [
//   {
//     name: "Ugly-women",
//     url: "https://www.funnypica.com/wp-content/uploads/2012/05/Ugly-Woman.jpg",
//     desc: "Pretty bad"
//   },
//   {
//     name: "Funny looking",
//     url: "https://www.funnypica.com/wp-content/uploads/2012/05/funny-looking-people.jpg",
//     desc: "Not sure what this is"
//   },
//   {
//     name: "Nice Bath",
//     url: "https://www.funnypica.com/wp-content/uploads/2012/05/Nice-bath.jpg",
//     desc: "Another image you wish you never saw"
//   }
// ]

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
