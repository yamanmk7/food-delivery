import { View, Text,SafeAreaView,StyleSheet,TouchableOpacity,Image,Animated } from 'react-native'
import React from 'react'
import SIZES from '../../assets/sizes'
import COLORS from '../../assets/Colors'
import icons from '../../constans/icons'
import images from '../../constans/images'
import HeaderOrderScreen from '../../Screens/HeaderOrderScreen'
import FoodInfoOrderSc from '../../Screens/FoodInfoOrderSc'
import RemderOrderSc from '../../Screens/RemderOrderSc'



const OrderScreen = ({route}) => {
   
  return (
    <View>
    <HeaderOrderScreen/>

    <FoodInfoOrderSc/>
    <RemderOrderSc/>
    </View>
    
  )
}


export default OrderScreen