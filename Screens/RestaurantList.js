import { View, Text,StyleSheet, FlatList, TouchableOpacity,Image, ScrollView } from 'react-native'
import React from 'react'
import restaurantData from './restaurantData'
import { useState } from 'react'
import SIZES from '../assets/sizes'
import images from '../constans/images'
import COLORS from '../assets/Colors'
import icons from '../constans/icons'


function RestaurantList  ()  {
    // const [restaurants, setRestaurants] = useState(restaurantData)
  return (
   
    <ScrollView>
    <View>
        <TouchableOpacity>
        <Image style={styles.images} source={images.burgerRestaurant}  />
        
        </TouchableOpacity>
        <View style={styles.text}>
        <Text style={styles.min}>20-30 min</Text>
        </View>
        <Text style={styles.foodText}>Burger</Text>
        <View style={styles.rating} >
        <Image style={styles.star} source={icons.star} />
        <Text style={styles.ratingText}>5.0</Text>
        <Text style={styles.priceText}>Burgers      Fries       $49.90</Text>
        
        </View >
           <View style={{marginTop:SIZES.padding*2}} >
        <TouchableOpacity>
        <Image style={styles.images} source={images.pizzaRestaurant}  />
        
        </TouchableOpacity>
        <View style={styles.text1}>
        <Text style={styles.min2}>20-30 min</Text>
        </View>
        <Text style={styles.foodText}>pizza</Text>
        <View style={styles.rating} >
        <Image style={styles.star} source={icons.star} />
        <Text style={styles.ratingText}>5.0</Text>
        <Text style={styles.priceText}>pizza      Fries       $49.90</Text>
        
        </View>

        </View>


    </View>
    
    </ScrollView>

    
  )
}

const styles = StyleSheet.create({
    images:{
        width:"90%",
        height:200,
        borderRadius:SIZES.radius,
        marginLeft:20,
    },
    text:{
        position:"absolute",
        top:150,
        backgroundColor:COLORS.white,
        marginLeft:20,
        height:50,
        width:120,
        borderTopRightRadius:SIZES.radius,
        borderBottomLeftRadius:SIZES.radius,
        elevation:15,
    },
    min:{
        fontSize:SIZES.h3,
        fontWeight:"bold",
        color:COLORS.black,
        textAlign:"center",
        paddingTop:10,
    },
    foodText:{
        fontSize:SIZES.h1,
        fontWeight:"bold",
        color:COLORS.black,
        marginLeft:25,
        marginTop:5,

    },
    star:{
        width:20,
        height:20,
        marginLeft:25,
        marginTop:5,
    
    } ,
    rating:{
        flexDirection:"row",
        marginLeft:10,
        
    } ,
    ratingText:{
        fontSize:SIZES.h3,
        fontWeight:"bold",
        color:COLORS.black,
        marginLeft:8,
        marginTop:3,
    } ,
    priceText:{
        fontSize:16,
        fontWeight:"bold",
        color:COLORS.black,
        marginLeft:8,
        marginTop:5,
        
    } ,
    text1:{
        backgroundColor:COLORS.white,
        marginLeft:20,
        marginTop:-50,
        height:50,
        width:120,
        borderTopRightRadius:SIZES.radius,
        borderBottomLeftRadius:SIZES.radius,
        elevation:15,

       
    } ,
    min2:{
        fontSize:SIZES.h3,
        fontWeight:"bold",
        color:COLORS.black,
        textAlign:"center",
        paddingTop:10,

    } ,

    


})

export default RestaurantList