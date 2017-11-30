const redux = require('redux');

const names =["Sheree", "Josh", "Brandon", "Sid", "Jack"];

const state = {
    nameList: names
}

//Reducer
const reducer = (prevState =state, action) =>{
      switch(action.type){
        case "ADD_NAME":
            return {
              nameList: [...prevState.nameList, action.name]

          }
        case "REMOVE_NAME":
            const remove = [...prevState.nameList]
            // remove.slice(1)
            remove.shift()
            return {
              nameList: remove

            }
        default:
            return prevState
      }
}

//action creators
const addName = (name)=>{
    return{
      type: "ADD_NAME",
      name: name
    }
}

const removeName = ()=>{
    return{
      type: "REMOVE_NAME",
    }
}


const store = redux.createStore(reducer);

store.subscribe(()=>{
    // const currState = store.getState();
    console.log(store.getState());
});

store.dispatch(removeName());
store.dispatch(addName("BEN HUR"));
