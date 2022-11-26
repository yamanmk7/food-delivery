import React from "react";
import { View,Text, I18nManager } from "react-native";
import Home from "./src/component/Home";
import Details from "./src/component/Details";
import OrderDelivery from "./src/component/OrderDelivery";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {NavigationContainer} from '@react-navigation/native'; 
import Tabs from "./Screens/tabs";
import OrderScreen from "./src/component/OrderScreen";

const Stack = createNativeStackNavigator();




const App = () => {
  I18nManager.allowRTL(false)
  return(
    
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Home" component={Tabs} options={{headerShown:false}}/>
    //     <Stack.Screen name="Details" component={Details} options={{headerShown:false}}/>
    //     <Stack.Screen name="OrderDelivery" component={OrderDelivery} options={{headerShown:false}}/>
        
    //   </Stack.Navigator>
    // </NavigationContainer>
    <OrderScreen/>
   
  )
};
export default App;
