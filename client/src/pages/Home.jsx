import React from "react";
import logo from '../assets/logo.svg';

function Home () {

    return (
        <div className ="container main">
            <div className = "row">
                <div className= "col welcomeColumn">
                <h5 id="welcomeHeader">Welcome to Google Books Search! The name speaks for itself..</h5>

                <img src={logo} className="App-logo" alt="logo" />
                </div>
            </div>
        </div>
    )
}

export default Home;