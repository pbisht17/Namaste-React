import  ReactDOM  from "react-dom/client";
import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";

const root = ReactDOM.createRoot(document.getElementById("root"));

// React Element (First letter is small)

const heading = <h1>This is the heading</h1>

//React Functional Component


const AppLayout = () => {
    return (<div className="app">
        <Header />
        <Body />
    </div>)
}



root.render(<AppLayout />);