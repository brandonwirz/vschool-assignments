import React from "react";
import Header from "./Header";
// import Main from "./contacts/Main";
import { Switch, Route } from "react-router-dom"

import Home from "./Home";
import SaltLake from "./SaltLake";
import Cities from "./Cities";
import MainStyles from "./MainStyles.css";



export default function App(props) {

    return (
      <main>
          <Header/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/SaltLake" component={SaltLake}/>
                <Route path="/cities" component={Cities}/>
            </Switch>
       </main>
      )
  }
