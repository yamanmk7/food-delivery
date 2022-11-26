import { View, Text,SafeAreaView,StyleSheet,TouchableOpacity,Image,Animated } from 'react-native'
import React from 'react'

import icons from '../constans/icons'



const HeaderOrderScreen = () => {
  return (
    <View>
       <View style={styles.Container}>
        <TouchableOpacity>
            <Image style={styles.goBack} source={icons.back} />
        </TouchableOpacity>
        
        <View style={styles.orderView}><Text style={styles.orderText}>Order</Text></View>
        <TouchableOpacity>
            <Image style={styles.list} source={icons.list} />
            </TouchableOpacity>
        
       </View>
    </View>
  )
}



const styles = StyleSheet.create({
    Container:{
        flexDirection:"row",
    } ,
    goBack:{
        width:30,
        height:30,
        marginTop:20,
        marginLeft:20
    },
    orderView:{
        width:200,
        height:50,
        backgroundColor:'lightgray',
        marginTop:10,
        alignItems:'center',
        justifyContent:'center',
        marginLeft:70,
        borderRadius:20
    } ,
    orderText:{
        fontSize:20,
        fontWeight:'bold',
        color:'black'
    } ,
    list:{
        width:30,
        height:30,
        marginTop:20,
        marginLeft:40
    } ,

})

export default HeaderOrderScreen