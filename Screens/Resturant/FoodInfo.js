import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView, Animated } from "react-native";
import icons from "../../constans/icons";
import SIZES from "../../assets/sizes";
import images from "../../constans/images";
import restaurantData from "../RestaurantData";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import COLORS from "../../assets/Colors";
import { useNavigation } from "@react-navigation/native";
const FoodInfo = (props) => {
    const { menu } = props;
    const navigation = useNavigation()


    console.log('item: ', props);

    const renderMenu = () => {
        
        const menuItems = menu.map((item, index) => (
       
                 
                  <View style={styles.Container}>

                        <View style={styles.foodCard}>
                          
                       
                        <Image style={styles.favoraitIcon} source={icons.like} />
                   
                        <View >
                        <TouchableOpacity onPress={() => navigation.navigate('OrderScreen', {item})}>
                        <Image style={styles.foodImage} source={item.photo} />
                        </TouchableOpacity>
                        
                        </View>
                       
                        <Text style={styles.foodName}>{item.name}</Text>
                        

                        
                    </View  >

                    <View style={styles.caloriesContainer}>
                          <Text style={styles.caloriesText}>{item.calories}</Text>
                            <Image style={styles.caloriesIcon} source={icons.fire} />
                    </View>

                    <View>
                    <Text style={styles.priceText}>Price: {item.price}</Text>
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
        <ScrollView>
        <View style={styles.Container}>
            {renderMenu()}
        </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    foodCard: {
     
        flexDirection: 'row',
        margin: 10,

    },
   
    foodImage: {
        width: 150,
        height: 150,
        borderRadius: 10,
        marginRight: 10,

    },
    foodName: {
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,

    },
    favoraitIcon: {
        width: 20,
        height: 20,
        position: 'absolute',
        right: 10,
        tintColor: 'gray',
        
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
        marginLeft: 10,
        position: 'absolute',
        bottom: 10,
        backgroundColor: COLORS.white,
        padding: 5,
       borderBottomLeftRadius: 10,
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

    },
    priceText: {
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 170,
        marginTop: -30,
        position: 'absolute',
    },


   
});

export default FoodInfo; 