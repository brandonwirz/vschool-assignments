import React from 'react';
// import logo from './logo.svg';
import './assets/styles.css';
import Header from "./components/Header"
// import Portfolio from "./components/Portfolio";
import Body from "./components/Body";
import Footer from "./components/Footer"

function App() {
    return (
        <div className="container">
             <Header/>
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
