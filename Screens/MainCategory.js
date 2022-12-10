import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import images from '../constans/images'
import icons from '../constans/icons'
import SIZES from '../assets/sizes'
import COLORS from '../assets/Colors'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { useState } from 'react'

import categoryData from '../Screens/categoryData'
import restaurantData from './RestaurantData'
import { useNavigation } from '@react-navigation/native'
import CategoreyItem from '../src/component/CategoreyItem'




export default function MainCategories() {
    const navigation = useNavigation()
    const [categories, setCategories] = useState(categoryData)
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [restaurants, setRestaurants] = useState(restaurantData);




    const renderItem = ({ item }) => {
        return (<CategoreyItem
            onItemPress={(item) => setSelectedCategory(item)}
            item={item}
            selectedCategory={selectedCategory}
        />
        )
    }

    /////////////////////////////

    const params = {
        list: {
            data: categories,
            horizontal: true,
            showsHorizontalScrollIndicator: false,
            keyExtractor: item => `${item.id}`,
            renderItem,
            contentContainerStyle: { paddingVertical: SIZES.padding * 2 },
        }
    }

    return (
        <View>
            <View style={{ padding: SIZES.padding * 2 }} >

                <Text style={styles.text}>Categories</Text>

                <FlatList {...params.list} />


            </View>


        </View>
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