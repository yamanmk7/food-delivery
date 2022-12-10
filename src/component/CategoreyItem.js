import React, { useContext } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import COLORS from "../../assets/Colors";
import SIZES from "../../assets/sizes";
import FoodDelivryContext from "../../store/FoodDelivryContext";


const CategoreyItem = (props) => {

    const { item } = props;
    const { setHomePageCategory, homePageCategory } = useContext(FoodDelivryContext);

    const onItemPress = () => {
        if (homePageCategory?.id === item.id) {
            setHomePageCategory(null);
        } else {
            setHomePageCategory(item)
        }
    }
    return (
        <TouchableOpacity
            style={{ 
                padding: SIZES.padding,
                paddingBottom: SIZES.padding * 2,
                backgroundColor: (homePageCategory?.id == item.id) ? COLORS.primary : COLORS.white,
                borderRadius: SIZES.radius,
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: SIZES.padding,
                ...styles.shadow
            }}
            onPress={() => onItemPress()}
        >
            <View
                style={{
                    width: 50,
                    height: 50,
                    borderRadius: 25,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: (homePageCategory?.id == item.id) ? COLORS.white : COLORS.lightGray,
                }}
            >
                <Image
                    source={item.icon}
                    resizeMode="cover"
                    style={styles.icons}
                />
            </View>

            <Text style={{
                marginTop: SIZES.padding,
                color: (homePageCategory?.id == item.id) ? COLORS.white :
                    COLORS.black, fontSize: SIZES.h4
            }}
            >{item.name}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        color: COLORS.black,

    },
    icons: {
        width: 30,
        height: 30
    },

})

export default CategoreyItem; 