import { View, Text, Image , TouchableOpacity,StyleSheet, FlatList} from 'react-native'
import React from 'react'
import images from '../constans/images'
import icons from '../constans/icons'
import SIZES from '../assets/sizes'
import COLORS from '../assets/Colors'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { useState } from 'react'

import categoryData from '../Screens/categoryData'




export default function MainCategories() {
   
    const [categories, setCategories] = useState(categoryData)
    const [selectedCategory, setSelectedCategory] = useState(null)
    

      const renderItem = ({item}) => {
        return (
            <TouchableOpacity
                style={{
                    padding: SIZES.padding,
                    paddingBottom: SIZES.padding * 2,
                    backgroundColor: (selectedCategory?.id == item.id) ? COLORS.primary : COLORS.white,
                    borderRadius: SIZES.radius,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: SIZES.padding,
                    ...styles.shadow
                }}
                onPress={() => setSelectedCategory(item)}
            >
                <View
                    style={{
                        width: 50,
                        height: 50,
                        borderRadius: 25,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.lightGray,
                    }}
                >
                    <Image
                        source={item.icon}
                        resizeMode="cover"
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
                </View>

                <Text style={{ marginTop: SIZES.padding, color: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.black, fontSize: SIZES.h4 }}>{item.name}</Text>
            </TouchableOpacity>
        )
      }

    /////////////////////////////
    return (
      <View style={{padding:SIZES.padding*2}} >
        <Text style={styles.text}>Main </Text>
        <Text style={styles.text}>Categories</Text>

        <FlatList data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => `${item.id}`}
        renderItem={renderItem}
        contentContainerStyle={{paddingVertical:SIZES.padding*2}} />
      </View>
    )
  }

    const styles = StyleSheet.create({
        text: {
            fontSize: 30,
            fontWeight: 'bold',
            color: COLORS.black,
        },
    })