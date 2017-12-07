import React from "react";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom"

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import ServiceDetail from "./components/ServiceDetail";
import NotFound from "./components/NotFound";

export default function App(props) {
    return (
        <main>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/service" component={Services}/>
                <Route path="/" component={NotFound}/>
            </Switch>
        </main>
    )
}
