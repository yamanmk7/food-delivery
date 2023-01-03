import React from "react";
import { Image, StyleSheet } from "react-native";
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs";
import Home from "./HomeScreen/Home";
import COLORS from "../assets/Colors";
import icons from "../constans/icons";
import SingUp from "./Singin/SingUp";
import BottomPopUp from "./popup/BottomPopUp";
import Favorait from "../src/component/Favorait";



const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator    >
            <Tab.Screen  name="Home" component={Home} options={{ headerShown:false,
                tabBarIcon: ({focused}) => (
                    <Image   source={icons.cutlery} resizeMode='contain' style={{ width:30,
                        height:30, 
                    tintColor: focused ? COLORS.primary : COLORS.secondary 
                    } }   />
                )
            }} /> 


           <Tab.Screen  name="Search" component={Home} options={{headerShown:false,
                tabBarIcon: ({focused}) => (
                    <Image   source={icons.search} resizeMode='contain' style={{ width:30,
                        height:30, 
                    tintColor: focused ? COLORS.primary : COLORS.secondary 
                    } }   /> 
                )
            }} />


            <Tab.Screen  name="Favorites" component={Favorait} options={{headerShown:false,
                tabBarIcon: ({focused}) => (
                    <Image   source={icons.like} resizeMode='contain' style={{ width:30,
                        height:30, 
                    tintColor: focused ? COLORS.primary : COLORS.secondary 
                    } }   />
                )
            }} />
            



            <Tab.Screen  name="User" component={BottomPopUp} options={{ headerShown:false,
                tabBarIcon: ({focused}) => (
                    <Image   source={icons.user} resizeMode='contain' style={{ width:30,
                        height:30, 
                    tintColor: focused ? COLORS.primary : COLORS.secondary 
                    } }   />
                )
            }} />


        </Tab.Navigator>
    )

}

const styles = StyleSheet.create({
  

})

export default Tabs;