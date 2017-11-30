import React from "react";
import {connect} from "react-redux";

//action creators
import {increment, decrement} from "../redux/counter";

function App(props) {
    return (
        <div>
            <button onClick={props.decrement}>-</button>
            <span>{props.count}</span>
            <button onClick={props.increment}>+</button>
        </div>
      )
}


function mapStateToProps(state) {
      return state
}

// const AppContainer = connect(mapStateToProps, {})(App);//creates container for me through props
// export default AppContainer;
export default connect(mapStateToProps, {increment, decrement})(App);
