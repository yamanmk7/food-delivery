import restaurantData from "./RestaurantData";
import icons from "../constans/icons";

  const FoodMenu ={
    photo: restaurantData[0].photo,
    name: restaurantData[0].name,
    duration: restaurantData[0].duration,
    rating: restaurantData[0].rating,
    star: icons.star,
    priceRating:restaurantData[0].priceRating


  }

  export default FoodMenu ;