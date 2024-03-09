import  ReactDOM  from "react-dom/client";
import React from "react";
const root = ReactDOM.createRoot(document.getElementById('root'));
const heading = React.createElement('h1', {id: "heading"}, 'Hello Namaste React');
const child = React.createElement(
     'div', { id: 'parent'},  
         [ 
      React.createElement('div', {id: 'child'}, 
         [  
            React.createElement('h1', {id: "heading"}, 'Hello Namaste React'),
            React.createElement('h2', {id: "heading"}, 'Parcel do the hot reloading on by its own way'), // Siblings are shown using Array of React.createElement()
 ]
 ),
      React.createElement('div', {id: 'child'}, 
    [  
            React.createElement('h1', {id: "heading"}, 'Hello Namaste React'),
            React.createElement('h2', {id: "heading"}, 'Hello Namaste React h2'), // Siblings are shown using Array of React.createElement()
    ]) 
]
)
const parent = React.createElement('div', {id: 'parent'}, child )


root.render(child)