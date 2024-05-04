import  ReactDOM  from "react-dom/client";
import React, { Component } from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));

// React Element (First letter is small)

const heading = <h1>This is the heading</h1>

//React Functional Component

const Header = () => {
    return <div className="header">
        <div className="logo-container">
            <img className="logo" src="https://logowik.com/content/uploads/images/restaurant9491.logowik.com.webp"/>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
}

const RestaurantCard = (props) => {
    const { resData } = props;
    const {resName, cuisine, starRating, etd } = resData;  // Good Production practice
    return <div className="res-card">
        <img className="res-logo" 
        src = "https://b.zmtcdn.com/data/dish_photos/d39/2c8a5a825d76b0f748ff9f4da811dd39.jpg?output-format=webp" 
        alt="Tandoori chicken"/>
        <h3>{resName}</h3>
        <h4>{cuisine}</h4>
        <h4>{`${starRating} star` } </h4>
        <h4>{`${etd}  mins`} </h4>
    </div>
}

const resList = [{
    id: "2333",
    resName: "Meghana Food",
    cuisine: "Biryani, north India",
    starRating:"4.4", 
    etd:"38",
}, {
    id: "2343",
    resName:"KFC", 
    cuisine:"burger, fast food",
    starRating:"4.4",
     etd:"38"
}]

// Not using keys( Not recommended) <<<<<<< Index as key( BAD PRACTICE, it is like a last resort)  <<<<<<< unique id ( BEST PRACTICE )

const Body = () => {
    return <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
            {resList.map(restaurant => {
                return <RestaurantCard key={restaurant.id}  resData={restaurant}/>
            })}  
        </div>
    </div>
}

const AppLayout = () => {
    return (<div className="app">
        <Header />
        <Body />
    </div>)
}



root.render(<AppLayout />);