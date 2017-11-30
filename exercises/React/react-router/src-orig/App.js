import React from 'react';
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";
import Services from "./views/Services";



function App() {
    return (
       <div className="container">
         <Header/>
            <Navbar className="navbar"/>
                <Switch className="nav">
                    {/* <Route exact path="/" component={Home}/> */}
                    <Route exact path="/" component={home}/>
                    <Route path="/about" component={about}/>
                    <Route path="/contact" component={contact}/>
                    <Route path="/services" component={services}/>
                </Switch>
                <Footer/>
        </div>

    )

}

export default App;
