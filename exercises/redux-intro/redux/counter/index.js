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
