import { useNavigation } from "@react-navigation/native";

import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView,Animated } from "react-native";
import icons from "../../constans/icons";
import SIZES from "../../assets/sizes";
import React from "react";

const StoreHeader = () => {
    const navigation = useNavigation()
    const [restaurant, setrestaurant] = React.useState(null);
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButton}
             onPress={() => navigation.goBack()}  >
                <Image source={icons.back} style={styles.back} />
            </TouchableOpacity>


            <View style={styles.headerContainer}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Store</Text>
             </View>
            </View>

            <TouchableOpacity style={styles.listButton}>
                <Image source={icons.list} style={styles.list} />

            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginTop: 40,
    },
    backButton: {
        width: 50,
        paddingLeft: SIZES.padding * 2,
        justifyContent: "center",
    },
    back: {
        width: 30,
        height: 30,

    },
    headerContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    header: {
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: SIZES.padding * 3,
        borderRadius: SIZES.radius,
        backgroundColor: "rgba(0,0,0,0.3)",


    },
    headerText: {
        color: "black",
        fontSize: SIZES.h2,
        fontWeight: "bold",

    },
    listButton: {
        width: 50,
        paddingRight: SIZES.padding * 2,
        justifyContent: "center",
    },
    list: {
        width: 30,
        height: 30,
        
    },

});

export default StoreHeader;