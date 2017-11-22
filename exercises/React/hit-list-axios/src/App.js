import React from "react";
import HitList from "./components/HitList";
import './app.css';

function App() {
    return (
        <div className="container">
          <div className="title">Don Corleone's Hit List</div>
            <img src="http://colorfully.eu/wp-content/uploads/2012/09/the-godfather-facebook-cover.jpg" alt="Don Corleone"/>
            <HitList />
        </div>
    );
}

export default App;
