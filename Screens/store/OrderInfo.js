import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Image, ImageBackground } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import COLORS from '../../assets/Colors';
import icons from '../../constans/icons';
import images from '../../constans/images';
import Quantity from './quantity';

const Order = (props) => {
    const { order } = props;
    const {item} = order;
    console.log(order); 
    return (  
        <View style={styles.Container}>
           
                <View style={styles.foodCard}>
                    <View style={{ flexDirection: 'row', flex: 1 }}>
                        <TouchableOpacity>
                        <ImageBackground style={styles.foodImage}
                            imageStyle={{ borderRadius: 10 }}
                            source={item.photo} >
                            <View style={styles.caloriesContainer}>
                                <Text style={styles.caloriesText}>{item.calories}</Text>
                                <Image style={styles.caloriesIcon} source={icons.fire} />
                            </View>
                        </ImageBackground>
                        </TouchableOpacity>
                       
                        
                        <View style={{ flex: 1 }}>
                            <Text style={styles.foodName}>{item.name}</Text>
                            <Text style={styles.foodName}>{''}</Text>

                            <Text style={styles.priceText}>{`Price: ${item.price}`} </Text>
                            <View>
                                
                               <Quantity/>
                                
                              

                                
                            </View>
                        </View>
                    </View>
                </View>
          
        </View>
    );
};

const styles = StyleSheet.create({

    foodCard: {
        flexDirection: 'row',
        margin: 10,
        justifyContent: 'space-between',
    },
    foodImage: {
        width: 150,
        height: 150,
        justifyContent: 'flex-end',


    },
    foodName: {
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 20,
        marginLeft: 15,

    },

    caloriesIcon: {
        width: 20,
        height: 20,

    },
    caloriesText: {
        fontSize: 15,
        fontWeight: 'bold',

    },
    caloriesContainer: {
        flexDirection: 'row',

        backgroundColor: COLORS.white,
        padding: 5,
        borderTopRightRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 70,
        height: 30,
        shadowColor: COLORS.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        elevation: 5,
        alignSelf: 'flex-start',
    },
    priceText: {
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 20,
        marginLeft: 15,
    },
    amount: {
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 20,
        marginLeft: 15,

    },
    menuse: {
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 120,
    },
   
    pluse: {
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 190,
        marginTop: -76,

    },
    pluse1: {
        fontSize: 30,
        fontWeight: 'bold',
        color: COLORS.black,

    },

    amount: {
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 20,

    },

});

export default Order;
