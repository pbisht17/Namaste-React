import  ReactDOM  from "react-dom/client";
import React, { Component } from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));

// React Element (First letter is small)

const heading = <h1>This is the heading</h1>

//React Functional Component

function title(){
    return "some random title"
}

function Tri(){
    return (<h2>Tri Comp</h2>)
}

function Dummy() {
        return <h2>This is Dummy</h2>
}

function Xyz() {
    return (
            <div>
                <p>{title()}</p>
                <p>{true}</p>
                <p>{100 + 300}</p>
                
                
                <Dummy />
                <Tri />
            </div>
        );
}



root.render(<Xyz />);