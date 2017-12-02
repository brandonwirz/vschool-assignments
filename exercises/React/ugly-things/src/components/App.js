import React from "react";
import Header from "./Header";
import Main from "./contacts/Main";

// import AddContactForm from "./contacts/AddContactForm";
// import ContactsList from "./contacts/ContactsList";
// import Main from "./contacts/Main";

export default function App(props){
    return(
          <h3>
            <Header/>
            <Main/>
            {/* <AddContactForm/> */}
            {/* <ContactsList/> */}
          </h3>
    )
}
