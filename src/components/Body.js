import React from "react";
import RestaurantCard from "./RestaurantCard";
import { resList } from '../utils/mockData'


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

export default Body;