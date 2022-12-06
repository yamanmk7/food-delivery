import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, TextInput } from "react-native";
import COLORS from "../../assets/Colors";
import icons from "../../constans/icons";



const UserScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.header}>

                <Text style={styles.profile}>Profile</Text>
                <View style={styles.user1}></View>
            </View>
            <View style={styles.body}>
                <View style={styles.user}>
                    <Image source={icons.user} style={styles.usericon} />
                </View>

                <Text style={styles.name}>Yaman</Text>

                <View style={{}}>
                    <View style={styles.info}>
                        <TouchableOpacity>
                            <Text style={styles.input}>0523047445</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.info}>
                        <TouchableOpacity>
                            <Image source={icons.location} style={styles.location} />
                            <Text style={styles.input}> Location</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.info}>
                        <TouchableOpacity>
                            <Image source={icons.mastercard} style={styles.payment} />
                            <Text style={styles.input}>**** 3058</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.info}>
                        <TouchableOpacity onPress={() => navigation.navigate("SingIn")} >
                            <Text style={styles.input} > Add Email</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                        <Text style={styles.text}>Logout</Text>
                    </TouchableOpacity>

                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: COLORS.primary,
        height: 300,
        width: "100%",
        borderBottomLeftRadius: 350,
        borderBottomRightRadius: 350,
    },
    profile: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white",
        marginTop: 80,
        marginLeft: 20,

    },
    body: {
        backgroundColor: "white",
        height: 500,
        width: "80%",
        borderRadius: 30,
        marginTop: -90,
        marginLeft: 40,

    },
    name: {
        fontSize: 30,
        fontWeight: "bold",
        color: "black",
        marginTop: 20,
        alignSelf: "center",
        marginTop: 10,
    },
    user: {
        backgroundColor: COLORS.primary,
        height: 150,
        width: 150,
        borderRadius: 100,
        alignSelf: "center",
        marginTop: -50,
    },
    user1: {
        backgroundColor: 'white',
        height: 150,
        width: 150,
        borderRadius: 100,
        alignSelf: "center",
        marginTop: 20,
    },
    usericon: {
        height: 100,
        width: 100,
        alignSelf: "center",
        marginTop: 20,
        tintColor: "white",
    },
    info: {
        backgroundColor: 'white',
        height: 40,
        width: "80%",
        borderRadius: 10,
        alignSelf: "center",
        marginTop: 20,
        elevation: 11,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        padding: 10,
        paddingLeft: 40,
    },
    input: {
        fontSize: 15,
        fontWeight: "bold",


    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        color: COLORS.primary,
        alignSelf: "center",
        marginTop: 40,


    },
    location: {
        height: 20,
        width: 20,
        tintColor: COLORS.primary,
        position: "absolute",
        left: -30,
    },
    payment: {
        height: 20,
        width: 20,
        tintColor: COLORS.primary,
        position: "absolute",
        left: -30,

    },

})

export default UserScreen