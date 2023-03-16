import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import COLORS from '../../assets/Colors';
import icons from '../../constans/icons';
import images from '../../constans/images';
import Order from './OrderInfo';


const StoreScreen = ({ items }) => {
    return (
        <View style={styles.Container}>
     <Order />
   
        </View>
        

    );
};

const styles = StyleSheet.create({



});

export default StoreScreen;

// [{
//     "amount": 1,
//     "item": {
//         "Extra": [Array],
//         "calories": 200,
//         "description": "Burger with crispy chicken, cheese and lettuce",
//         "menuId": 1,
//         "name": " Clasic Burger",
//         "photo": 10,
//         "price": "10$"
//     },
//     "totalPrice": 10
// }]


