import CheckBox from '@react-native-community/checkbox';
import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import SIZES from "../assets/sizes";
import FoodDelivryContext from "../store/FoodDelivryContext";


const ExtraItems = (props) => {
    const { setOrder, order } = useContext(FoodDelivryContext);
    const { item } = props;

    const addExtraToOrder = (ExtraItem) => {
        let currentOrder = order;
        currentOrder.totalPrice = currentOrder.totalPrice + ExtraItem.price;
        currentOrder.selectedExtras 
        ? currentOrder.selectedExtras.push(ExtraItem) 
        : currentOrder.selectedExtras = [ExtraItem];
        setOrder({ ...currentOrder });
    }

    console.log("order", order);

    const removeExtraFromOrder = (ExtraItem) => {
        let currentOrder = order ;
        
        currentOrder.totalPrice = currentOrder.totalPrice - ExtraItem.price ;
        setOrder({ ...currentOrder });
    }


    const onCheckBoxValueChange = (val , ExtraItem) => {
        val ? addExtraToOrder(ExtraItem) : removeExtraFromOrder(ExtraItem);
    }

    if (!item.Extra) {
        return null;
    }
    return item.Extra.map((ExtraItem, index) => {
        return (
            <View style={styles.CheckBoxContainer}>
                <CheckBox
                    style={styles.CheckBox}
                    onValueChange={(val) => onCheckBoxValueChange(val , ExtraItem )}
                    value={false} />
                <Text style={styles.Extras} key={index}>{ExtraItem.name} :</Text>
                <Text style={styles.price}>{ExtraItem.price}</Text>
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