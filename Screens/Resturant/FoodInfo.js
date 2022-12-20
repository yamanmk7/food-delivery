import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView, Animated } from "react-native";
import icons from "../../constans/icons";
import SIZES from "../../assets/sizes";
import images from "../../constans/images";
import restaurantData from "../RestaurantData";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import COLORS from "../../assets/Colors";
const FoodInfo = (props) => {
    const { menu } = props;

    console.log('item: ', props);

    const renderMenu = () => {
        const menuItems = menu.map((item, index) => (
            // <View key={`menu-${index}`}
            //     style={{ alignItems: 'center' }} >
                 
            //      <View>
            //         <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{item.name}</Text>
            //     </View>
            //     <View style={styles.img}>
            //         <Image style={styles.photo} source={item.photo}
            //             resizeMode="cover" />
            //     </View>
                 
                  <View style={styles.Container}>

                        <View style={styles.foodCard}>
                          
                        <Image style={{  width: 20,
        height: 20,
        position: 'absolute',
        right: 10,
        tintColor: 'gray',
        }} source={icons.like} />
                          
                        <Image style={styles.favoraitIcon} source={icons.like} />
                   
                        <View>
                        
                        <Image style={styles.foodImage} source={item.photo} />
                        
                        </View>
                       
                        <Text style={styles.foodName}>{item.name}</Text>
                        

                     
                      
                    </View  >
                    
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
  


   
});

export default FoodInfo; 