import React from "react";
import Navbar from "./Navbar";
import Body from "./Body";
import Footer from "./Footer";
import './App.css';

function App(){
  return(
    <div>
             <Navbar/>
             <Body/>
             <Footer/>
         </div>
  )
  //Speeds up reload, no page refresh
  if(module.hot){
    module.hot.apply();
  }
}



export default App;
