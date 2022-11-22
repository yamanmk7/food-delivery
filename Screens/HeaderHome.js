import { View, Text, Image , TouchableOpacity,StyleSheet} from 'react-native'
import React from 'react'
import images from '../constans/images'
import icons from '../constans/icons'
import SIZES from '../assets/sizes'
import COLORS from '../assets/Colors'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { useState } from 'react'




 export default function Header  ()  {

    const initialCurrentLocation = {
        streetName: " Haifa",
        gps: {
            latitude: 1.5496614931250685,
            longitude: 110.36381866919922
        }
    }
    const [currentLocation, setCurrentLocation] = useState(initialCurrentLocation)

    /////////////////////////////////////////
  return (
    <View  style={{flexDirection:'row', height:50}} >
        <TouchableOpacity style={styles.Container}>
            <Image source={icons.nearby} style={styles.nearby} resizeMode="contain" />

        </TouchableOpacity>

        <View style={styles.Location}>
            <View style={styles.LocationContainer}>
       <Text style={styles.textLocation}>{currentLocation.streetName}</Text>
       </View>
        </View>

        <TouchableOpacity style={styles.bascketContainer}>
            <Image source={icons.basket} style={styles.basket} resizeMode="contain" />

        </TouchableOpacity>
        

         
    </View>
  )
}





const styles = StyleSheet.create({
    Container: {
        width:50,
        paddingLeft:SIZES.padding*2,
        justifyContent:'center'
    },

    nearby: {
        height:40,
        width:40,
        marginTop:20,
    },

    Location: {
        flex:1,
        alignItems:'center',
        justifyContent:'center'

    },
    LocationContainer: {
        width:'70%',
        height:'100%',
        backgroundColor:COLORS.lightGray3,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:SIZES.radius,

    },

    textLocation: {
        marginTop:10,
        fontSize:SIZES.h1,
        fontWeight:'bold',
        color:COLORS.black,
       
    },

    bascketContainer: {},
    basket: {
        height:40,
        width:40,
        marginTop:10,
        marginRight:SIZES.padding*2,

    },

})

