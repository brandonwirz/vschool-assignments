const redux = require("redux");

// {
//   name: "Bob",
//   phone: "801-616-6474",
//   email: "bziroll@vschool.io"
// }


function reducer(prevState = [], action) {
      switch(action.type) {
        case "ADD_CONTACT":
            return [...prevState, action.contact];
        case "REMOVE_CONTACT":
            return prevState.filter(contact=> contact.email !==action.email);
        default:
            return prevState;
    }
}


const store = redux.createStore(reducer);

store.subscribe(function(){
    // const currState = store.getState();
    console.log(store.getState());
    console.log("");
});


function addContact(contact){
    return{
        type: "ADD_CONTACT",
        contact
  }
}

function removeContact(email, phone, name){
    return{
      type: "REMOVE_CONTACT",
      email,
      phone,
      name
    }
}



store.dispatch(addContact({ name: "Timmy",phone: "801-616-6474", email: "j@j.com"}));
store.dispatch(addContact({ name: "Kimmy",phone: "901-616-6474", email: "t@t.com"}));
store.dispatch(addContact({ name: "Sammy",phone: "720-616-6333", email: "s@s.com"}));


// store.dispatch(removeContact("t@t.com"));
store.dispatch(removeContact("801-616-6474"));
// store.dispatch(removeContact("phone"));
