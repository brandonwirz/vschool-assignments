import React from 'react';
// import logo from './logo.svg';
import Header from "./components/Header";
// import Portfolio from "./components/Portfolio";
import Body from "./components/Body";
import Footer from "./components/Footer";
import "./assets/styles.css";

export default function App() {
    return (
          <div><Header/>
              <div className="container"><Body/></div>
            <Footer/>
          </div>

      )
      //Speeds up reload, no page refresh
      if(module.hot){
          module.hot.apply();
    }
}
