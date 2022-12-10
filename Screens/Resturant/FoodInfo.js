import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView, Animated } from "react-native";
import icons from "../../constans/icons";
import SIZES from "../../assets/sizes";
import images from "../../constans/images";
import restaurantData from "../RestaurantData";

const FoodInfo = (props) => {
    const { menu } = props;

    console.log('item: ', props);

    const renderMenu = () => {
        const menuItems = menu.map((item, index) => (
            <View key={`menu-${index}`}
                style={{ alignItems: 'center' }} >
                 
                 <View>
                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{item.name}</Text>
                </View>
                <View style={styles.img}>
                    <Image style={styles.photo} source={item.photo}
                        resizeMode="cover" />
                </View>
               
            </View>
        ))

        return menuItems;
    }

    return (
        // <Animated.ScrollView style={styles.Container}
        //     horizontal
        //     pagingEnabled
        //     scrollEventThrottle={16}
        //     snapToAlignment="center"
        //     showsHorizontalScrollIndicator={false}
        // >
        //     {renderMenu()}
        // </Animated.ScrollView>
        <View style={styles.Container}>
            {renderMenu()}
        </View>
    )
};

const styles = StyleSheet.create({
    Container: {

    },
    img: {
        height:SIZES.height * 0.35,
        
    },
    photo: {
        height: 200,
        width: 200,
        borderRadius: SIZES.radius,
        marginLeft: -190,
        
        
    },
});

export default FoodInfo; 