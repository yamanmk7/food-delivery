import { View, Text,StyleSheet, FlatList, TouchableOpacity,Image, ScrollView } from 'react-native'
import React from 'react'
import { useState } from 'react'
import SIZES from '../assets/sizes'
import images from '../constans/images'
import COLORS from '../assets/Colors'
import icons from '../constans/icons'
import restaurantData from '../Screens/RestaurantData'
import FoodMenu from './FoodMenu'
import OrderDelivery from '../src/component/OrderDelivery'
import {useNavigation} from '@react-navigation/native'
import categoryData from '../Screens/categoryData'




const RestaurantList   = ({props}) => {
  const navigation = useNavigation()
    const [restaurants, setRestaurants] = useState(restaurantData);
    const [categories, setCategories] = useState(categoryData);
    

  // return (
    
  //       <ScrollView>
  //         <View>
  //       <View>
  //             <TouchableOpacity onPress={()=> navigation.navigate("OrderScreen")}>
  //           <Image style={styles.foodImg} source={FoodMenu[0].photo}   />
  //           </TouchableOpacity>
  //           <View style={styles.time} >
  //           <Text  style={styles.duration} >{FoodMenu[0].duration}</Text>
  //           </View>
  //       <Text  style={styles.name} >{FoodMenu[0].name}</Text>
  //       </View>
  //       <View style={styles.rating} >
  //       <Image style={styles.star} source={FoodMenu[0].star} />
  //       <Text style={styles.ratingText} >{FoodMenu[0].rating}</Text>
  //       <Text style={styles.text1} >Burgers   .Snacks</Text>
  //       <Text style={styles.priceRating} >{FoodMenu[0].price}</Text>
        
  //       </View>
  //       </View>

  //       {/*  */}

  //       <View style={styles.Container} >
  //       <View>
  //             <TouchableOpacity  >
  //           <Image  style={styles.foodImg} source={FoodMenu[1].photo} />
  //           </TouchableOpacity>
  //           <View style={styles.time} >
  //           <Text  style={styles.duration} >{FoodMenu[1].duration}</Text>
  //           </View>
  //       <Text  style={styles.name} >{FoodMenu[1].name}</Text>
  //       </View>
  //       <View style={styles.rating} >
  //       <Image style={styles.star} source={FoodMenu[1].star} />
  //       <Text style={styles.ratingText} >{FoodMenu[1].rating}</Text>
  //       <Text style={styles.text1} >Burgers   .Snacks</Text>
  //       <Text style={styles.priceRating} >{FoodMenu[1].price}</Text>
        
  //       </View>
  //       </View>

  //       <View style={styles.Container} >
  //       <View>
  //             <TouchableOpacity>
  //           <Image style={styles.foodImg} source={FoodMenu[2].photo} />
  //           </TouchableOpacity>
  //           <View style={styles.time} >
  //           <Text  style={styles.duration} >{FoodMenu[2].duration}</Text>
  //           </View>
  //       <Text  style={styles.name} >{FoodMenu[2].name}</Text>
  //       </View>
  //       <View style={styles.rating} >
  //       <Image style={styles.star} source={FoodMenu[2].star} />
  //       <Text style={styles.ratingText} >{FoodMenu[2].rating}</Text>
  //       <Text style={styles.text1} >Burgers   .Snacks</Text>
  //       <Text style={styles.priceRating} >{FoodMenu[2].price}</Text>
        
  //       </View>
  //       </View>

  //       <View style={styles.Container} >
  //       <View>
  //             <TouchableOpacity>
  //           <Image style={styles.foodImg} source={FoodMenu[3].photo} />
  //           </TouchableOpacity>
  //           <View style={styles.time} >
  //           <Text  style={styles.duration} >{FoodMenu[3].duration}</Text>
  //           </View>
  //       <Text  style={styles.name} >{FoodMenu[3].name}</Text>
  //       </View>
  //       <View style={styles.rating} >
  //       <Image style={styles.star} source={FoodMenu[3].star} />
  //       <Text style={styles.ratingText} >{FoodMenu[3].rating}</Text>
  //       <Text style={styles.text1} >Burgers   .Snacks</Text>
  //       <Text style={styles.priceRating} >{FoodMenu[3].price}</Text>
        
  //       </View>
  //       </View>

  //       <View style={styles.Container} >
  //       <View>
  //             <TouchableOpacity>
  //           <Image style={styles.foodImg} source={FoodMenu[4].photo} />
  //           </TouchableOpacity>
  //           <View style={styles.time} >
  //           <Text  style={styles.duration} >{FoodMenu[4].duration}</Text>
  //           </View>
  //       <Text  style={styles.name} >{FoodMenu[4].name}</Text>
  //       </View>
  //       <View style={styles.rating} >
  //       <Image style={styles.star} source={FoodMenu[4].star} />
  //       <Text style={styles.ratingText} >{FoodMenu[4].rating}</Text>
  //       <Text style={styles.text1} >Burgers   .Snacks</Text>
  //       <Text style={styles.priceRating} >{FoodMenu[4].price}</Text>
        
  //       </View>
  //       </View>


  //       <View style={styles.Container} >
  //       <View>
  //             <TouchableOpacity>
  //           <Image style={styles.foodImg} source={FoodMenu[5].photo} />
  //           </TouchableOpacity>
  //           <View style={styles.time} >
  //           <Text  style={styles.duration} >{FoodMenu[5].duration}</Text>
  //           </View>
  //       <Text  style={styles.name} >{FoodMenu[5].name}</Text>
  //       </View>
  //       <View style={styles.rating} >
  //       <Image style={styles.star} source={FoodMenu[5].star} />
  //       <Text style={styles.ratingText} >{FoodMenu[5].rating}</Text>
  //       <Text style={styles.text1} >Burgers   .Snacks</Text>
  //       <Text style={styles.priceRating} >{FoodMenu[5].price}</Text>
        
  //       </View>
  //       </View>
  //       </ScrollView>
    
  // )

  function getCategoryNameById(id) {
    const category = categories.find((a) => a.id === id);
    if (category) return category.name;
    return '';
  }

  const renderItem = ({item}) => {
     
    return (
        <TouchableOpacity 
            style={{marginBottom:SIZES.padding*2}}
            onPress={() => navigation.navigate("Restaurant", {
                item,
               
            })}
        >
          {/* Image */}
            <View>
                <Image
                    source={item.photo}
                    resizeMode="cover"
                    style={styles.photo}
                />

                <View style={styles.time} >
                <Text style={styles.timeText}
                 >{item.duration}</Text>
                </View>
            </View>
            
            {/* Restaurant Info */}
            <Text style={styles.name} >{item.name}</Text>

            {/* Rating */}
          <View style={styles.rating} >
            <Image style={styles.star} source={icons.star} />
            <Text style={styles.ratingText} >{item.rating}</Text>

            {/* Catagories */}
            <View style={styles.catagories} >
              {item.categories.map((categoryId) => {
                return (
                  <View style={styles.catagoryContainer}
                  key={categoryId} >
                    <Text style={styles.catagory} >{getCategoryNameById(categoryId)}</Text>
                    <Text style={styles.catagory} >.</Text>
                  </View>
                )

              }
              )}

              {/* Price */}
              {[1,2,3].map((priceRating) => (
                <Text key={priceRating} style={styles.priceRating} >$</Text>
              ))
              
              }
            </View>
            </View>            
        </TouchableOpacity>
    )
  }

  return(
    <FlatList data={restaurants}
    keyExtractor={item=>`${item.id}`} 
    renderItem={renderItem}
    contentContainerStyle={{
      paddingHorizontal:SIZES.padding*2,
      paddingBottom:30,
    }} />
  )
}
   


//  const styles = StyleSheet.create({
//     Container:{
//       marginTop:SIZES.padding*2,
//       marginBottom:SIZES.padding*2,
//     } ,
//   foodImg:{
//     width:"90%",
//     height:180,
//    marginHorizontal:20,
//    borderRadius:30,

//   },
//   text:{
//     fontSize:25,
//     fontWeight:'bold',
//     color:'black',
//     marginLeft:20,

//   },

//   time:{
//     backgroundColor:'white',
//     width:120,
//     top:-50,
//     marginLeft:20,
//     height:50,
//     justifyContent:'center',
//     borderBottomLeftRadius:30,
//     borderTopRightRadius:30,
//     alignItems:'center',
//     shadowColor: "#000",
//     elevation: 5,
//   },
//   duration:{
//     fontSize:17,
//     fontWeight:'bold',
//     color:'black',
//   },
//   name:{
//     fontSize:25,
//     fontWeight:'bold',
//     color:'black',
//     marginLeft:20,
//     marginTop:-45,
//   },
//   rating:{
//     marginTop:SIZES.padding,
//     flexDirection:'row',
//   } ,
//   star:{
//     width:20,
//     height:20,
//     marginLeft:25,
//     tintColor:COLORS.primary,
//   } ,
//   ratingText:{
//     fontSize:17,
//     fontWeight:'bold',
//     color:'black',
//     marginLeft:5,

//   } ,
//   text1:{
//     fontSize:17,
//     fontWeight:'bold',
//     color:'black',
//     marginLeft:25,

//   } ,
//   priceRating:{
//     fontSize:17,
//     fontWeight:'bold',
//     color:'black',
//     marginLeft:30,

//   } ,
 


    


//  })

const styles=StyleSheet.create({
  photo:{
    width:"100%",
    height:200,
    borderRadius:SIZES.radius
  },
  time:{
    position:'absolute',
    bottom:0,
    height:50,
   width:120,
    backgroundColor:COLORS.white,
    borderTopRightRadius:SIZES.radius,
    borderBottomLeftRadius:SIZES.radius,
    alignItems:'center',
    justifyContent:'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,


  },
  timeText:{
    color:COLORS.black,
    fontSize:SIZES.h3,
    fontWeight:'bold',  

  } ,
  name:{
    marginTop:SIZES.padding,
    fontSize:SIZES.h2,
    fontWeight:'bold',

  } ,
  rating:{
    flexDirection:'row',
    marginTop:SIZES.padding,
  } ,
  star:{
    width:20,
    height:20,
    tintColor:COLORS.primary,
    marginRight:10,
  } ,
  ratingText:{
    color:COLORS.black,
    fontSize:SIZES.h4,
    fontWeight:'bold',
    
    

  } ,
  catagories:{
    flexDirection:'row',
    marginLeft:10,
  } ,
  catagoryContainer:{
    flexDirection:'row',

  } ,
  catagory:{
    color:COLORS.black,
    fontSize:SIZES.h4,
    fontWeight:'bold',
    marginRight:5,
  } ,
  priceRating:{
    color:COLORS.black,
    fontSize:SIZES.h4,
    fontWeight:'bold',
    marginLeft:10,

  } ,
})

export default RestaurantList