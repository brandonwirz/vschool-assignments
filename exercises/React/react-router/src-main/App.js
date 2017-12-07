import React from 'react';
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";



function App() {
    return (
       <div className="container">
         <Header/>
            <Navbar className="navbar"/>
                <Switch className="nav">
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/contact" component={Contact}/>
                </Switch>
                <Footer/>
        </div>

    )

}

export default App;
