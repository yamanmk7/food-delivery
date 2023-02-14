import react, { useContext } from "react";
import { View, Text } from "react-native";
import FavoraitHeader from "../../Screens/FavoraitSc/FavoraitHeder";
import FavoraitCard from "../../Screens/FavoraitSc/FavoraitCard";
import FoodDelivryContext from "../../store/FoodDelivryContext";
import restaurantData from "../../Screens/RestaurantData";
import MenuItem from "./MenuItem";

const Favorait = (props) => {
    const FavoraitFood =  useContext(FoodDelivryContext);
   

     
    return (
        <View>
            <FavoraitHeader />
            <MenuItem  />
           
        </View>
    )
}


export default Favorait;