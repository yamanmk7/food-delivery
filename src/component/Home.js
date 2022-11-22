import { View, Text, Image , TouchableOpacity, StyleSheet, SafeAreaView} from 'react-native'
import React from 'react'
import images from '../../constans/images'
import icons from '../../constans/icons'
import SIZES from '../../assets/sizes'
import COLORS from '../../assets/Colors'
import Header from '../../Screens/HeaderHome'
import MainCategories from '../../Screens/MainCategory'
import RestaurantList from '../../Screens/RestaurantList'


const Home = () => {
  return (
   <SafeAreaView  style={styles.container} >
        <Header/>
        <MainCategories/>
        <RestaurantList/>
        
        
   </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4,

    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.53,
        shadowRadius: 13.97,
        elevation: 1,
    },
})



export default Home