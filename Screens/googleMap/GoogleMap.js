import React from "react";
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import MapView from "react-native-maps";
const GoogleMap = (props) => {

    return (
        <View style={styles.container}>
            <MapView/>
        </View>
    );
};

const styles = StyleSheet.create({});


export default GoogleMap;