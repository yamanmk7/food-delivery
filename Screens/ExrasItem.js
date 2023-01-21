import react from "react";
import CheckBox from '@react-native-community/checkbox';
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import SIZES from "../assets/sizes";

const ExtraItems = (props) => {
    const { item , price } = props;
    if (!item.Extra) {
        return null;
    } 
    // ExtraItems.price =
    //     item.Extra.reduce((a, b) => a + (b.price || 0), 0);
    // console.log("ExtraItems.price: ", ExtraItems.price);
    // // add extra items to order
     const [extraSelected, setextraSelected] = React.useState([])
    const onExtraSelected = (item) => {
        // if extra item is already selected, add the price to the order
        if (extraSelected.includes(item)) {
            setextraSelected([...extraSelected, item])
            ExtraItems.price += item.price
        } else {
            setextraSelected(extraSelected.filter(a => a != item))
            ExtraItems.price -= item.price
        }
    }
    

    // addExtraItemsPrice = () => {
    //     const prices = Object.values(item.Extra).map((item) => item.price);
    //     console.log("prices: ", prices);
    //     var sum = prices.reduce((a, b) => a + b, 0);
    //     return sum;
    // }
    // console.log("addExtraItemsPrice: ", addExtraItemsPrice());
    
    
    return item.Extra.map((item, index) => {
        return (
            <View style={styles.CheckBoxContainer}>
                <CheckBox style={styles.CheckBox} onValueChange={(val) => {
                    console.log(val);
                }}
                    value={false} />
                <Text style={styles.Extras} key={index}>{item.name} :</Text>
                <Text style={styles.price}>{item.price}</Text>
            </View>
        )
    })
}

const styles = StyleSheet.create({
    CheckBoxContainer: {
        flexDirection: 'row',
        marginLeft: 10,
        marginTop: 10,

    },
    CheckBox: {



    },
    Extras: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 10,
        marginTop: 5,
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: SIZES.base * 2,
        marginTop: 5,

    },


})


export default ExtraItems;