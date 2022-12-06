import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View,Text, TouchableOpacity,Image, StyleSheet, TextInput } from "react-native";
import COLORS from "../../assets/Colors";
import icons from "../../constans/icons";


const SingIn = () => {
    const navigation = useNavigation();

     return (
            <View style={styles.container}>
                <Text style={styles.text}>Sing In</Text>
                <View style={styles.discribtio}>
                    <Text style={styles.newAcc}>Welcome Back</Text>
                    <Text style={styles.text1}>Enter your Email and Password </Text>
                    <Text style={styles.text1}>for SingIn</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("SingUp")}>
                    <Text style={styles.text2}>Don't have an account?</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.info}>
                    <View style={styles.textInput}>
                        <Image source={icons.user} style={styles.usericon} />
                    <TextInput style={styles.input1} placeholder="Email Adress" />

                    </View>

                    <View style={styles.textInput}>
                        <Image source={icons.user} style={styles.usericon} />
                    <TextInput style={styles.input1} placeholder="Password" />

                    </View>
                    <TouchableOpacity>
                    <Text style={styles.forgotPass}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>

                    <TouchableOpacity style={styles.button1} onPress={()=> navigation.navigate("UserScreen")}>
                        <Text style={styles.singin}>Sing In</Text>
                    </TouchableOpacity>
                  
                </View>

     )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
    },
    text: {
        fontSize: 30,
        fontWeight: "bold",
        alignSelf: "center",

    },
    discribtio: {
        marginLeft: 10,

    },
    newAcc: {
        fontSize: 30,
        fontWeight: "bold",
        marginTop: 20,
    },
    text1: {
        fontSize: 15,
        fontWeight: "bold",
        marginTop: 10,

    },
    text2: {
        fontSize: 15,
        fontWeight: "bold",
        marginTop: -17,
        color: COLORS.primary,
        marginLeft: 80,

    },
    info: {
        marginTop: 20,
       backgroundColor: COLORS.white,
       height: 400,
         width: "80%",
            alignSelf: "center",
            borderRadius: 20,
            elevation: 10,
            shadowColor: COLORS.black,
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            padding: 10,
            paddingLeft: 40,


    },
    textInput: {
        marginTop: 40,
        width: "90%",
        height: 50,
        backgroundColor: COLORS.lightGray4,
        borderRadius: 10,
        justifyContent: "center",
        alignSelf: "center",
        elevation: 10,
        shadowColor: COLORS.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        padding: 10,
        paddingLeft: 10,
        marginLeft: -20,


    },
    input1: {
        fontSize: 15,
        paddingLeft: 50,


    },
    usericon: {
        height: 20,
        width: 20,
        tintColor: COLORS.primary,
        position: "absolute",
        marginTop: 15,
        marginLeft: 10,

    },
    forgotPass: {
        fontSize: 12,
        fontWeight: "bold",
        color: COLORS.primary,
        marginTop: 10,
        marginLeft: 140,

    },
    button1: {
        backgroundColor: COLORS.primary,
        height: 50,
        width: "50%",
        borderRadius: 10,
        alignSelf: "center",
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center",
        elevation: 10,
        shadowColor: COLORS.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    singin: {
        fontSize: 20,
        fontWeight: "bold",
        color: COLORS.white,
    },
    

     


})

export default SingIn
