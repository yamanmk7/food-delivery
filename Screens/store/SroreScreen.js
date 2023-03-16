import React, { useContext } from "react";
import { View, Text, ScrollView } from "react-native";
import StoreCard from "./StoreCard";
import StoreHeader from "./StoreHeader";
import FoodDelivryContext from "../../store/FoodDelivryContext";
import Order from "./OrderInfo";


 

const StoreScreen = (props) => {
    const {cart} = useContext(FoodDelivryContext);

    const renderOrder = () => {
        if(!cart.length) {
            return <Text>no order</Text>
        }
       
       return cart.map((order, index) => {
            return (
                <Order order={order} />
            )
        })
    };


    return (
        <View>
            <StoreHeader />
            <ScrollView>
            {renderOrder()}
            </ScrollView>
           
        </View>
    )

};


export default StoreScreen