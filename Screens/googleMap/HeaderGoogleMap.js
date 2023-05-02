import React from "react";

import { View, Text, StyleSheet, Image,  } from "react-native";
import COLORS from "../../assets/Colors";
import SIZES from "../../assets/sizes";
import icons from "../../constans/icons";


const GoogleMapHeader = () => {

    return(
        <View style={styles.Header}>
           <View style={styles.destination}>
             <Image source={icons.redpin} style={styles.pin}/>
             <View>
                    <Text style={{fontSize:20, fontWeight:'bold'}}>Haifa</Text>
                   
            </View>
            <Text style={styles.min}>10 min</Text>
           </View>
          
        </View>            
            
    )
}


const styles = StyleSheet.create({
   Header:{
         position:'absolute',
         top:50,
            left:0,
            right:0,
            height:50,
            alignItems:'center',
            justifyContent:'center',
   },
    destination:{
        backgroundColor:COLORS.white,
        flexDirection:'row',
        alignItems:'center',
        width:SIZES.width*0.9,
        paddingVertical:SIZES.padding,
        paddingHorizontal:SIZES.padding*2,
        borderRadius:SIZES.radius,
        
    },
    pin:{
        width:30,
        height:30,
        marginRight:SIZES.padding,
    },
    min:{   
        fontSize:20,
        fontWeight:'bold',
        color:COLORS.black,
     marginLeft:180,

    }



})


export default GoogleMapHeader;