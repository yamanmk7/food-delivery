import React from "react";
import { View,Text, TouchableOpacity,Image, StyleSheet } from "react-native";
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs";
import Home from "../src/component/Home";
import COLORS from "../assets/Colors";
import icons from "../constans/icons";


const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator    >
            <Tab.Screen  name="Home" component={Home} options={{ 
                tabBarIcon: ({focused}) => (
                    <Image   source={icons.cutlery} resizeMode='contain' style={{ width:30,
                        height:30, 
                    tintColor: focused ? COLORS.primary : COLORS.secondary 
                    } }   />
                )
            }} />


           <Tab.Screen  name="Search" component={Home} options={{
                tabBarIcon: ({focused}) => (
                    <Image   source={icons.search} resizeMode='contain' style={{ width:30,
                        height:30, 
                    tintColor: focused ? COLORS.primary : COLORS.secondary 
                    } }   />
                )
            }} />


            <Tab.Screen  name="Like" component={Home} options={{
                tabBarIcon: ({focused}) => (
                    <Image   source={icons.like} resizeMode='contain' style={{ width:30,
                        height:30, 
                    tintColor: focused ? COLORS.primary : COLORS.secondary 
                    } }   />
                )
            }} />



            <Tab.Screen  name="User" component={Home} options={{
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