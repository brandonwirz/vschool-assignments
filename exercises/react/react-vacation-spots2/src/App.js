import React from "react"
import Header from "./Header";
import Boxes from "./Boxes";
import Footer from "./Footer";
import './styles.css';

// import Footer from "./Footer"



function App() {

    return (
        <div className="containerDiv">
                <div><Header/></div>
                <div className="Boxes"><Boxes/></div>
                <div><Footer/></div>
        </div>


  )
  // if(module.hot){
  //   module.hot.apply();
  // }

}

export default App;
