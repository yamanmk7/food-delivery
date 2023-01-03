import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image, Animated } from 'react-native'
import React, { useContext } from 'react'
import SIZES from '../assets/sizes'
import COLORS from '../assets/Colors'
import icons from '../constans/icons'
import images from '../constans/images'
import restaurantData from './RestaurantData'
import FoodDelivryContext from '../store/FoodDelivryContext'
import CheckBox from '@react-native-community/checkbox';
import ExtraItems from './ExrasItem'


const FoodInfoOrderSc = (props) => {
    const { cart, setCart } = useContext(FoodDelivryContext);

    const [orderItems, setOrderItems] = React.useState([])
    const { item } = props;

    const editOrder = (action) => {
        let orderAmount = cart[item.menuId]?.amount || 0;
        const price = item.price.replace(/[^0-9.]+/g, '')
        console.log('orderAmount: ', item.price);
        if (action == "+") {
            orderAmount++;
            setCart({
                [item.menuId]: {
                    item: item,
                    amount: orderAmount,
                    totalPrice: price * orderAmount
                }
            })

        } else {
            if (orderAmount > 0) {
                orderAmount--;
                setCart({
                    [item.menuId]: {
                        item: item,
                        amount: orderAmount,
                        totalPrice: price * orderAmount
                    }
                })
            }
        }
    }

    const getOrderQty = (menuId) => {
        let orderItem = orderItems.filter(a => a.menuId == menuId)

        if (orderItem.length > 0) {
            return orderItem[0].qty
        }

        return 0
    }
    console.log('cart id :', item);
    return (
        <View style={styles.container} >
            <View>
                <Image source={item.photo} style={styles.food} />
            </View>
            <View style={styles.quantityContainer}>
                <TouchableOpacity activeOpacity={0.7}
                    onPress={() => editOrder("-")}>
                    <View style={styles.quantity}>
                        <Text style={styles.menuse}>-</Text>
                    </View>
                </TouchableOpacity>

                <View style={styles.number} >
                    <Text style={styles.num}>{cart[item.menuId]?.amount || 0}</Text>
                </View>

                <TouchableOpacity activeOpacity={0.7}
                    onPress={() => editOrder("+")}
                >
                    <View style={styles.pluse}>
                        <Text style={styles.pluse1}>+</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.descriptionContainer} >
                    <Text style={styles.burgerName}>{item.name} {item.price}</Text>
                    <Text style={styles.description}>{item.description}</Text>



                </View>


            </View>
            <View>
                
                <ExtraItems item={item} />

            </View>



        </View>


    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
    },
    food: {
        width: 440,
        height: 300,
        marginTop: -40,


    },
    quantityContainer: {
        flexDirection: 'row',
    },
    quantity: {
        width: 50,
        height: 50,
        backgroundColor: COLORS.white,
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 140,
        marginTop: -30,



    },
    menuse: {
        fontSize: 40,
        fontWeight: 'bold',
        color: COLORS.black,
        marginLeft: 5,
        marginTop: -5,
    },
    number: {
        width: 50,
        height: 50,
        backgroundColor: COLORS.white,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -30,

    },
    num: {
        fontSize: 20,
        fontWeight: 'bold',
        color: COLORS.black,

    },
    pluse: {
        width: 50,
        height: 50,
        backgroundColor: COLORS.white,
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -30,


    },
    pluse1: {
        fontSize: 30,
        fontWeight: 'bold',
        color: COLORS.black,
        marginLeft: -5,

    },
    burgerName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: COLORS.black,



    },
    description: {
        fontSize: 15,
        fontWeight: 'bold',
        color: COLORS.black,
        paddingTop: 10,

    },
    calorys: {
        fontSize: 15,
        fontWeight: 'bold',
        color: COLORS.black,
        paddingTop: 5,



    },
    fire: {
        width: 20,
        height: 20,


    },
    descriptionContainer: {
        marginTop: 30,
        marginLeft: -240,
        alignItems: 'center',
        justifyContent: 'center',



    },
    Extras: {
        fontSize: 15,
        fontWeight: 'bold',
        color: COLORS.black,
        paddingTop: 5,
        marginLeft: 20,
        marginTop: 10,


    },


})

export default FoodInfoOrderSc