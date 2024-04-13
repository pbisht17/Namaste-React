import  ReactDOM  from "react-dom/client";
import React from "react";
const root = ReactDOM.createRoot(document.getElementById('root'));

// React.createElement()   =>   React Element - JS Object  =>   HTMLElement(render)

const heading = React.createElement('h1', {id: "heading"}, 'Hello Namaste React');

console.log(heading);

// JSX (transpilled before it reaches the JS ) - PARCEL - BABEL

// JSX => React.CreateElement()  =>   React Element - JS Object  =>   HTMLElement(render)
const jsxHeading = <h2>This is the namaste JS</h2>
// JSX is not HTML in JS, this is HTML like syntax
console.log(jsxHeading)

root.render(jsxHeading)