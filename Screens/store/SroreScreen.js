import react from "react";
import { View,Text } from "react-native";
import StoreHeader from "./StoreHeader";
import StoreInfo from "./StoreInfo";


const StoreScreen = (props) => {
    const {item} = props.route?.params || {} ; 
    return(
       <View>
         <StoreHeader/>
        <StoreInfo  menu={item?.menu}/> 
       </View>
         
        
    )

};


export default StoreScreen