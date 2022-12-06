import React from "react";
import { View,Text, I18nManager } from "react-native";
import Home from "./src/component/Home";
import Details from "./src/component/Details";
import OrderDelivery from "./src/component/OrderDelivery";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {NavigationContainer} from '@react-navigation/native'; 
import Tabs from "./Screens/tabs";
import OrderScreen from "./src/component/OrderScreen";
import UserScreen from "./src/component/UserScreen";
import SingIn from "./Screens/Singin/SingIn";
import Restaurant from "./src/component/Restaurant";
import BottomPopUp from "./Screens/popup/BottomPopUp";
import VerificationCode from "./Screens/popup/VerificationCode";
import SingUp from "./Screens/Singin/SingUp";


const Stack = createNativeStackNavigator();




const App = () => {
  I18nManager.allowRTL(false)
  return(
    
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Tabs} options={{headerShown:false}}/>
        <Stack.Screen name="Details" component={Details} options={{headerShown:false}}/>
        <Stack.Screen name="OrderDelivery" component={OrderDelivery} options={{headerShown:false}}/>
        <Stack.Screen name="OrderScreen" component={OrderScreen} options={{headerShown:false}}/>
        <Stack.Screen name="UserScreen" component={UserScreen} options={{headerShown:false}}/>
        <Stack.Screen name="SingIn" component={SingIn} options={{headerShown:false}}/>
        <Stack.Screen name="SingUp" component={SingUp} options={{headerShown:false}}/>
        <Stack.Screen name="Restaurant" component={Restaurant} options={{headerShown:false}}/>
        <Stack.Screen name="BottomPopUp" component={BottomPopUp} options={{headerShown:false}}/>
        <Stack.Screen name="VerificationCode" component={VerificationCode} options={{headerShown:false}}/>


      </Stack.Navigator>
    </NavigationContainer>
    
   
  )
};
export default App;
