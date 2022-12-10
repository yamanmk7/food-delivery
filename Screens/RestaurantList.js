import React, { useContext, useState } from 'react'
import { FlatList, StyleSheet } from 'react-native'
import COLORS from '../assets/Colors'
import SIZES from '../assets/sizes'
import restaurantData from '../Screens/RestaurantData'
import RestaurantCard from '../src/component/RestaurantCard'
import FoodDelivryContext from '../store/FoodDelivryContext'

const RestaurantList = ({ props }) => {

  const {setHomePageCategory , homePageCategory} = useContext(FoodDelivryContext) ; 

  // const [restaurants, setRestaurants] = useState(restaurantData);

  const renderRestuarants = () => {
      if(!homePageCategory){
        console.log("all");
        return restaurantData ; 
      }
      const res = restaurantData.filter(restuarant => {
        return restuarant?.categories.find(id => id == homePageCategory?.id)
      })
      return res ; 
  }

  const renderItem = ({ item }) => {
    return <RestaurantCard item={item} />
  }

  return (
    <FlatList
      data={renderRestuarants()}
      keyExtractor={item => `${item.id}`}
      renderItem={renderItem}
      contentContainerStyle={{
        paddingHorizontal: SIZES.padding * 2,
        paddingBottom: 30,
      }} />
  )
}

const styles = StyleSheet.create({
  photo: {
    width: "100%",
    height: 200,
    borderRadius: SIZES.radius
  },
  time: {
    position: 'absolute',
    bottom: 0,
    height: 50,
    width: 120,
    backgroundColor: COLORS.white,
    borderTopRightRadius: SIZES.radius,
    borderBottomLeftRadius: SIZES.radius,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,


  },
  timeText: {
    color: COLORS.black,
    fontSize: SIZES.h3,
    fontWeight: 'bold',

  },
  name: {
    marginTop: SIZES.padding,
    fontSize: SIZES.h2,
    fontWeight: 'bold',

  },
  rating: {
    flexDirection: 'row',
    marginTop: SIZES.padding,
  },
  star: {
    width: 20,
    height: 20,
    tintColor: COLORS.primary,
    marginRight: 10,
  },
  ratingText: {
    color: COLORS.black,
    fontSize: SIZES.h4,
    fontWeight: 'bold',



  },
  catagories: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  catagoryContainer: {
    flexDirection: 'row',

  },
  catagory: {
    color: COLORS.black,
    fontSize: SIZES.h4,
    fontWeight: 'bold',
    marginRight: 5,
  },
  priceRating: {
    color: COLORS.black,
    fontSize: SIZES.h4,
    fontWeight: 'bold',
    marginLeft: 10,

  },
})

export default RestaurantList