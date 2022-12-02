import React from "react";
import react from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView,Animated } from "react-native";
import RestaurantHeader from "../../Screens/Resturant/RestaurantHeader";
import FoodInfo from "../../Screens/Resturant/FoodInfo";


const Restaurant = () => {
 const [restaurant, setrestaurant] = React.useState(null);
    return (
        <SafeAreaView style={styles.container}>
            <RestaurantHeader/>
            <FoodInfo/>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
});

export default Restaurant;