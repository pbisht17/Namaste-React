import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { resList } from '../utils/mockData'


// Not using keys( Not recommended) <<<<<<< Index as key( BAD PRACTICE, it is like a last resort)  <<<<<<< unique id ( BEST PRACTICE )
// State variable
const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState([
        {
            id: "2333",
            resName: "Meghana Food",
            cuisine: "Meghana, north India",
            starRating:4.5, 
            etd:"38",
        }, 
            {
            id: "2322",
            resName: "Kabab Food",
            cuisine: "Kabab, north India",
            starRating:3.4, 
            etd:"38",
        }, 
            {
            id: "2334",
            resName: "Pulao Food",
            cuisine: "Pulao, north India",
            starRating: 4.4, 
            etd:"38",
        }, 
            {
            id: "2335",
            resName: "Pulao Food",
            cuisine: "Pulao, north India",
            starRating: 4, 
            etd:"38",
        }, 
            {
            id: "2336",
            resName: "Pulao Food 1",
            cuisine: "Pulao, north India",
            starRating: 2, 
            etd:"38",
        }, 
            {
            id: "2337",
            resName: "Pulao Food",
            cuisine: "Pulao, north India",
            starRating: 3.4, 
            etd:"38",
        }, 
    ])

    return <div className="body">
        <div className="filter">
            <button onClick={() => {
                setListOfRestaurant(listOfRestaurant.filter(item => item.starRating > 4))
            }}>
                Top rated Restaurants
            </button>
        </div>
        <div className="res-container">
            {listOfRestaurant.map(restaurant => {
                return <RestaurantCard key={restaurant.id}  resData={restaurant}/>
            })}  
        </div>
    </div>
}
export default Body;