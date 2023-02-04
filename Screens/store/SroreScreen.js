import React from "react";
import { View, Text } from "react-native";
import StoreHeader from "./StoreHeader";
import StoreInfo from "./StoreInfo";


const StoreScreen = (props) => { 

    return (
        <View>
            <StoreHeader />
            <StoreInfo />
            
        </View>
    )

};


export default StoreScreen