import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import SIZES from '../assets/sizes'
import COLORS from '../assets/Colors'

import icons from '../constans/icons'
import strings from '../src/res/strings'
import FoodDelivryContext from '../store/FoodDelivryContext'
import ExtraItems from './ExrasItem'
import { useNavigation } from '@react-navigation/native'


const RemderOrderSc = () => {
    const navigation = useNavigation()

    const { cart, setCart, order } = useContext(FoodDelivryContext);


    const cartLength = Object.keys(cart).length

    const getBasketItemCount = () => {

        let itemCount = orderItems.reduce((a, b) => a + (b.qty || 0), 0)

        return itemCount

    }







    const sumOrder = () => {
        let sum = 0;
        cart.forEach(item => {
            sum += item.totalPrice;
        })

        return sum;
    }

    const onOredrPress = () => {
        setCart(order);

        // setTimeout(() => {
        //     navigation.goBack();
        // }, 0.8 * 1000 );
        navigation.navigate('StoreScreen')
    }

    return (
        <View style={styles.Container}>
            <View style={styles.orderContainer}>
                <Text style={styles.items}>{cartLength} items in Cart</Text>
                <Text style={styles.price}>{sumOrder()}$</Text>
            </View>
            <View style={styles.locationContainer}>
                <View style={styles.location}>
                    <Image source={icons.pin} style={styles.pin} />
                    <Text style={styles.locationText}>Location</Text>
                </View>
                <View style={styles.masterCard}>
                    <Image source={icons.mastercard} style={styles.masterCardIcon} />
                    <Text style={styles.cardNum}>4580</Text>
                </View>

            </View>

            <View style={styles.buttonOrder}>
                <TouchableOpacity style={styles.order} onPress={onOredrPress}>
                    <Text style={styles.orderText}>{strings.Order}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default RemderOrderSc

const styles = StyleSheet.create({
    Container: {
        backgroundColor: COLORS.white,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        // marginTop: 90,
    },
    orderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: SIZES.padding * 2,
        paddingHorizontal: SIZES.padding * 3,
        borderBottomColor: COLORS.lightGray2,
        borderBottomWidth: 1,
    },
    items: {
        fontSize: 18,
        fontWeight: 'bold',
        color: COLORS.black,

    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        color: COLORS.black,
    },
    locationContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: SIZES.padding * 2,
        paddingHorizontal: SIZES.padding * 3,

    },
    location: {
        flexDirection: 'row',
    },
    pin: {
        width: 20,
        height: 20,
        tintColor: COLORS.darkgray,

    },
    locationText: {
        marginLeft: SIZES.padding,
        fontSize: 18,
        fontWeight: 'bold',
        color: COLORS.black,

    },
    masterCard: {
        flexDirection: 'row',
    },
    masterCardIcon: {
        width: 30,
        height: 30,
        tintColor: COLORS.darkgray,
    },
    cardNum: {
        marginLeft: SIZES.padding,
        fontSize: 18,
        fontWeight: 'bold',
        color: COLORS.black,
        marginTop: 2,

    },
    buttonOrder: {
        padding: SIZES.padding * 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    order: {
        width: 400,
        padding: SIZES.padding,
        backgroundColor: COLORS.primary,
        alignItems: 'center',
        borderRadius: SIZES.radius,



    },
    orderText: {
        color: COLORS.white,
        fontSize: 18,
        fontWeight: 'bold',
    },
})