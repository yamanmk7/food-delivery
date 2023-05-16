import React, { useContext } from "react";

import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, } from 'react-native'
import COLORS from "../../assets/Colors";
import FoodDelivryContext from "../../store/FoodDelivryContext";

const Quantity = () => {
return(
    // <View>
    //       <TouchableOpacity>
    //         <View style={styles.menuse}>
    //             <Text>-</Text>
    //             </View>
    //       </TouchableOpacity>
    //     <TouchableOpacity>
    //       <View style={styles.pluse}>
    //         <Text>+</Text>
    //       </View>
    //     </TouchableOpacity>
    // </View>
    <View style={styles.quantityContainer}>
                <TouchableOpacity activeOpacity={0.7}>
                 
                    <View style={styles.quantity}>
                        <Text style={styles.pluse1}>-</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.number} >
                    <Text style={styles.num}>{ 0}</Text>
                </View>
 
                <TouchableOpacity activeOpacity={0.7}>
                    <View style={styles.pluse}>
                        <Text style={styles.pluse1}>+</Text>
                    </View>
                </TouchableOpacity>
                
            </View>
)
}; 
const styles = StyleSheet.create({
    pluse: {
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 190,
        marginTop: -40,

    },
    menuse: {
        width: 50,
        height: 50,
        backgroundColor: COLORS.white,
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 93,
        marginTop: -30,
    },
    number: {
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -30,
        marginLeft: 147,

    },
    num: {
        fontSize: 20,
        fontWeight: 'bold',
        color: COLORS.black,

    },
    pluse1: {
        fontSize: 30,
        fontWeight: 'bold',
        color: COLORS.black,

    },
    quantity: {
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 104,
        marginTop: -30,
    },
});

export default Quantity;