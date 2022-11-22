import { View, Text,StyleSheet, FlatList, TouchableOpacity,Image, ScrollView } from 'react-native'
import React from 'react'
import { useState } from 'react'
import SIZES from '../assets/sizes'
import images from '../constans/images'
import COLORS from '../assets/Colors'
import icons from '../constans/icons'
import restaurantData from '../Screens/RestaurantData'
import FoodMenu from './FoodMenu'


function RestaurantList  ()  {
    const [restaurants, setRestaurants] = useState(restaurantData)
  return (
    
        <ScrollView>
        <View>
            <View>
            <Image style={styles.foodImg} source={FoodMenu.photo} />
            <View style={styles.time} >
            <Text  style={styles.duration} >{FoodMenu.duration}</Text>
            </View>
            
            </View>
        <Text  style={styles.text} >{FoodMenu.name}</Text>
        </View>
        </ScrollView>
    
  )}
   


 const styles = StyleSheet.create({
  foodImg:{
    width:"90%",
    height:180,
   marginHorizontal:20,
   borderRadius:30,

  },
  text:{
    fontSize:25,
    fontWeight:'bold',
    color:'black',
    marginLeft:20,

  },

  time:{
    backgroundColor:'white',
    width:140,
    top:-50,
    marginLeft:20,
    height:50,
    justifyContent:'center',
    borderBottomLeftRadius:30,
    
    

  },
  duration:{
    
    

  },

    


 })

export default RestaurantList