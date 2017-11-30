const redux = require("redux");

// Actions: are objects that ate instructions

// Example: {
    type: "INCREMENT"

//}

const initialState = 0;
const initialState = {
  counter = 0,
  contacts: []
}

//Reducer's Job: take an action an update the state
function reducer(prevState = 0, action) {
      switch(action.type){
           case "INCREMENT":
                return prevState + 1;
           case "DECREMENT":
                return prevState - 1;
           case "INCREASE_BY":
                return prevState + action.amount;
           case "DECREASE_BY":
                return prevState - action.amount;
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
function increment() {
    return {
        type: "INCREMENT"
    }
}

function decrement() {
    return {
        type: "DECREMENT"
    }
}

function increaseBy(amount) {
      return {
        type: "INCREASE_BY",
        amount
      }
}

function decreaseBy(amount) {
      return {
        type: "DECREASE_BY",
        amount
      }
}


store.dispatch(increaseBy(5));
store.dispatch(increaseBy(5));

store.dispatch(decreaseBy(5));
// store.dispatch({type: "DECREMENT"})
// store.dispatch({type: "lolalalalala"});//returns 0 undefined
// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(decrement());
// store.dispatch(increment());
// store.dispatch(decrement());











//pure function
// function addName(arr, newName){
//     return [...arr, newName]
// }
// const names = [];
// names =addName(names, "Jimbo");
