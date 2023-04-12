import React, { useEffect } from "react";
import { View, Text, I18nManager } from "react-native";
import Home from "./Screens/HomeScreen/Home";
import Details from "./src/component/Details";
import OrderDelivery from "./src/component/OrderDelivery";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { NavigationContainer } from '@react-navigation/native';
import Tabs from "./Screens/tabs";
import OrderScreen from "./src/component/OrderScreen";
import UserScreen from "./src/component/UserScreen";
import SingIn from "./Screens/Singin/SingIn";
import Restaurant from "./src/component/Restaurant";
import BottomPopUp from "./Screens/popup/BottomPopUp";
import VerificationCode from "./Screens/popup/VerificationCode";
import SingUp from "./Screens/Singin/SingUp";
import FoodDelivryProvider from "./store/FoodDelivryProvider";
import StoreScreen from "./Screens/store/SroreScreen";
import Favorait from "./src/component/Favorait";
import { Provider } from "react-redux";
import GoogleMap from "./Screens/googleMap/GoogleMap";






const Stack = createNativeStackNavigator();




const App = () => {
  I18nManager.allowRTL(false)

  useEffect(() => {
    var url = "https://nameless-meadow-25389.herokuapp.com/nazareth";
     fetch(url)
         .then((res) => res.json())
         .then (resJson => console.log("Res from server: " , resJson)) 
 }, []);

  return (
   
    <FoodDelivryProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Tabs} options={{ headerShown: false }} />
          <Stack.Screen name="Details" component={Details} options={{ headerShown: false }} />
          <Stack.Screen name="OrderDelivery" component={OrderDelivery} options={{ headerShown: false }} />
          <Stack.Screen name="OrderScreen" component={OrderScreen} options={{ headerShown: false }} />
          <Stack.Screen name="UserScreen" component={UserScreen} options={{ headerShown: false }} />
          <Stack.Screen name="SingIn" component={SingIn} options={{ headerShown: false }} />
          <Stack.Screen name="SingUp" component={SingUp} options={{ headerShown: false }} />
          <Stack.Screen name="Restaurant" component={Restaurant} options={{ headerShown: false }} />
          <Stack.Screen name="BottomPopUp" component={BottomPopUp} options={{ headerShown: false }} />
          <Stack.Screen name="VerificationCode" component={VerificationCode} options={{ headerShown: false }} />
          <Stack.Screen name="StoreScreen" component={StoreScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Favorait" component={Favorait} options={{ headerShown: false }} />
          <Stack.Screen name="GoogleMap" component={GoogleMap} options={{ headerShown: false }} />


        

        </Stack.Navigator>
      </NavigationContainer>
    </FoodDelivryProvider>
   

    


  )
};
export default App;
