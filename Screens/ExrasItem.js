import react from "react";
import CheckBox from '@react-native-community/checkbox';
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import SIZES from "../assets/sizes";

const ExtraItems = (props) => {
    const { item } = props;
    if (!item.Extra) {
        return null;
    }
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