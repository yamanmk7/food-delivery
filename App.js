import React from "react";
import { View,Text, I18nManager } from "react-native";
import Home from "./src/component/Home";


const App = () => {
  I18nManager.allowRTL(false)
  return(
    
      <Home/>
   
  )
};
export default App;
