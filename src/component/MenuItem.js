import { useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import COLORS from "../../assets/Colors";
import icons from "../../constans/icons";
import Favorait from "./Favorait";
import { AsyncStorage } from 'react-native';


const MenuItem = (props) => {

    const [favorites, setFavorites] = useState([]);

    const addToFavorites = (item) => {
        setFavorites([...favorites, item]);
      }
      
      
    
        
    
    const { item } = props

    const navigation = useNavigation();

    const [changeColor, setChangeColor] = useState(false);
    const handleColorChange = () => {
        setChangeColor(!changeColor);
    
    };

    const favColor = {
        tintColor: (changeColor) ? COLORS.primary : COLORS.darkgray
    }

    const onOrderPress = () => {
        navigation.navigate('OrderScreen', { item })
    }
   

    return (
        
        <View style={styles.foodCard}>
            <View style={{ flexDirection: 'row', flex: 1 }}>
                <View style={{ flex: 1 }} >
                    <TouchableOpacity onPress={() => onOrderPress()}>
                        <ImageBackground style={styles.foodImage} source={item.photo} >
                            <View style={styles.caloriesContainer}>
                                <Text style={styles.caloriesText}>{item.calories}</Text>
                                <Image style={styles.caloriesIcon} source={icons.fire} />
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
                <View style={{ justifyContent: 'space-between', flex: 1 }}>
                    <Text style={styles.foodName}>{item.name}</Text>
                    <Text style={styles.priceText}>Price: {item.price}</Text>
                </View>

                
               

            </View> 

            <TouchableOpacity onPress={{handleColorChange, addToFavorites} }  >

                <Image 
                    style={[styles.favoraitIcon, favColor]}
                    source={icons.like}
                />
            </TouchableOpacity>


        </View >
     
    )
}

const styles = StyleSheet.create({
    foodCard: {
        flexDirection: 'row',
        margin: 20,
        // marginLeft: -10,
        justifyContent: 'space-between',
        // borderWidth: 1,
    },
    foodImage: {
        width: 150,
        height: 150,
        // borderRadius: 10,
        // marginRight: 10,
        justifyContent: 'flex-end'
    },
    foodName: {
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,

    },
    favoraitIcon: {
        width: 25,
        height: 25,
        tintColor: COLORS.darkgray,
        marginTop: 10,
        // marginRight:10 , 
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
        // position: 'absolute',
        // bottom: 10,
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
        // marginLeft: 190,
        // marginTop: -30,
        // position: 'absolute',
    },



});

export default MenuItem;


