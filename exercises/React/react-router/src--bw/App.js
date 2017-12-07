import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import {Switch, Route} from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";
import Services from "./views/Services";

function App() {
    return (
        <div className="app-container">
            <Header/>
                <Switch>
                      {/* if we only want a path to render if it matches exactly */}
                      <Route exact path="/" component={Home}/>
                      <Route path="/about" component={About}/>
                      <Route path="/contact" component={Contact}/>
                      <Route path="/services" component={Services}/>
                      {/* <Route path="/services/:service" component={Services}/> */}
                      {/* <Route path="/" component={NotFound}/> */}
                </Switch>
            <Footer/>
        </div>
    )
}

export default App;
