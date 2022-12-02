import { View, Text, Image , TouchableOpacity,StyleSheet, FlatList} from 'react-native'
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




export default function MainCategories() {
    const navigation = useNavigation()
    const [categories, setCategories] = useState(categoryData)
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [restaurants, setRestaurants] = useState(restaurantData);


      

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
                        style={styles.icons}
                    />
                </View>

                <Text style={{ marginTop: SIZES.padding,
                     color: (selectedCategory?.id == item.id) ? COLORS.white :
                      COLORS.black, fontSize: SIZES.h4 }}
                     >{item.name}</Text>
            </TouchableOpacity>
        )
      }

    /////////////////////////////

    const params = {
        list :{
            data :categories , 
            horizontal:true , 
            showsHorizontalScrollIndicator: false , 
            keyExtractor: item => `${item.id}` , 
            renderItem, 
            contentContainerStyle:{paddingVertical:SIZES.padding*2}, 
        }
    }

    return (
        <View>
      <View style={{padding:SIZES.padding*2}} >
        
        <Text style={styles.text}>Categories</Text>

        <FlatList {...params.list}/> 

       
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
        icons:{
            width: 30,
            height: 30
        },
        
    })