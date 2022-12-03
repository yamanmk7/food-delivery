import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView,Animated } from "react-native";
import icons from "../../constans/icons";
import SIZES from "../../assets/sizes";
import images from "../../constans/images";

const FoodInfo = () => {
    const [restaurant, setrestaurant] = React.useState(null);
    return(
        <Animated.ScrollView style={styles.Container}
        horizontal
        pagingEnabled
        scrollEventThrottle={16}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        >
            {
                restaurant?.menu.map((item, index) => (
                    <View key={`menu-${index}`}
                     style={{alignItems:'center'}} >
                    
                    <View style={styles.img}>
                    <Image source={item.photo} 
                    resizeMode="cover" />
                    </View>
                    </View>
                ))

            } 
            
    
        </Animated.ScrollView>
    )
};

const styles = StyleSheet.create({
    Container: {
        
    },
    img: {
        height:SIZES.height * 0.35,
    },
});

export default FoodInfo; 