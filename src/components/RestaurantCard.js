
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

export default RestaurantCard;