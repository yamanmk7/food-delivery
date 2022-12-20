import React from "react";
import react from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView,Animated } from "react-native";
import RestaurantHeader from "../../Screens/Resturant/RestaurantHeader";
import FoodInfo from "../../Screens/Resturant/FoodInfo";


const Restaurant = (props) => {
const {item} = props.route?.params || {} ; 

console.log('item: ' , item);
 const [restaurant, setrestaurant] = React.useState(null);
    return (
        <SafeAreaView style={styles.container}>
            <RestaurantHeader/>
            <FoodInfo menu={item?.menu}/> 
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        

    },
});

export default Restaurant;