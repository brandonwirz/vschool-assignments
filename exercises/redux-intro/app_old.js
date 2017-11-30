const redux = require("redux");

const names = [
    {
      Frank:{
          name1: "Frank",
          phone1: "720-976-7463",
          email1: "frank.pd0@gmail.com"
      },
    }
    {
      Ed: {
          name2: "Ed",
          phone2: "720-976-7463",
          email2: "ed.pd0@gmail.com"
        },
      }
    {
      Dean:{
          name3: "Dean",
          phone3: "720-976-7463",
          email3: "dean.pd0@gmail.com"
        },
    {
      Sam:{
          name4: "Sam",
          phone4: "303-976-7654",
          email4: "samsmith0@gmail.com"
        },
      }
];



// const initialState = 0;
//Reducer's Job: take an action and update the state
function reducer(prevState = state, action) {
      switch(action.type){
        case "ADD_TO_ARRAY":
            return prevState;

        case "DELETE_FROM_ARRAY":
        let  = [...]
            return
            names: [...XXX.slice(1)]




        default:
            return prevState;
    }

}

const store = redux.createStore(reducer);

store.subscribe(function(){
    const currState = store.getState();
    console.log(currState);
});



//Action creators: return an action object
function addName (str){
  return{
    type: "ADD_TO_ARRAY"

  }
}

function deleteName (){
  return{
    type: "DELETE_FROM_ARRAY"
  }
}

store.dispatch(addName(names);
// store.dispatch(removeObj(objects["key3"] = "value3";));
store.dispatch(deleteName(names.phone));



// var obj = {
//     key1: value1,
//     key2: value2
// };
// Using dot notation:
//
// obj.key3 = "value3";
// Using square bracket notation:
//
// obj["key3"] = "value3";
