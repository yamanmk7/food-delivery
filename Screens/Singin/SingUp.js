import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View,Text, TouchableOpacity,Image, StyleSheet, TextInput } from "react-native";
import COLORS from "../../assets/Colors";
import icons from "../../constans/icons";
import UserScreen from "../../src/component/UserScreen";




const SingUp = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Sing Up</Text>
            <View style={styles.discribtio}>
                <Text style={styles.newAcc}>Create Account</Text>
                <Text style={styles.text1}>Enter your Name, Email and Password </Text>
                <Text style={styles.text1}>for SingUp</Text>
                <TouchableOpacity onPress={()=> navigation.navigate("SingIn")}>
                <Text style={styles.dontHaveAcc}>Already have an account?</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.input}>
                <View style={styles.textInput}>
                    <Image source={icons.user} style={styles.usericon} />
                <TextInput style={styles.input1} placeholder="User Name" />
                </View>

                <View style={styles.textInput}>
                    
                <TextInput style={styles.input1} placeholder="Email Adress" />
                </View>

                <View style={styles.textInput}>
                <TextInput style={styles.input1} placeholder="Password" />
                </View>
                <TouchableOpacity>
                <Text style={styles.forgotPass}>Forgot Password?</Text>
                </TouchableOpacity>
                
               
            </View>

                <TouchableOpacity style={styles.button1} onPress={()=> navigation.navigate("UserScreen")}>
                    <Text style={styles.text2}>Create Account</Text>
                </TouchableOpacity>

                <Text style={styles.text3}>Or Sing Up with</Text>

                <View style={styles.social}>
                    <TouchableOpacity style={styles.button2}>
                        <Text style={styles.facebook}>facebook</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button3}>
                        <Text style={styles.google}>Google</Text>
                    </TouchableOpacity>


                </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        
    },
    discribtio: {
        marginLeft: 10,
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        
    },
    newAcc: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
    },
    text1: {
        fontSize: 15,
        marginTop: 10,
    },
    input: {
        marginTop: 20,
        marginLeft: 10,
    },
    textInput: {
        marginTop: 40,
        width: 350,
        height: 50,
        backgroundColor: COLORS.lightGray4,
        borderRadius: 10,
        justifyContent: 'center',
        marginLeft: 20,
        
       

    },
    input1: {
        fontSize: 15,
        paddingLeft: 50,

    },
  

   usericon: {
         position: 'absolute',
         width: 20,
            height: 20,
            left: 20,
            tintColor: COLORS.primary,
  
   },
    button1: {
        width: 250,
        height: 50,
        backgroundColor: COLORS.primary,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 50,

    },
    text2: {
        fontSize: 20,
        color: COLORS.white,

    },
    text3: {
        fontSize: 15,
        textAlign: 'center',
        marginTop: 20,

    },
    social: {
        justifyContent: 'space-around',
        marginTop: 10,

    },
    button2: {
        width: 250,
        height: 50,
        backgroundColor: 'lightblue',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 10,
    },
    button3: {
        width: 250,
        height: 50,
        backgroundColor: 'lightblue',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 10,

    },
    forgotPass: {
        fontSize: 15,
        color: COLORS.primary,
        marginTop: 10,
        marginLeft: 20,

    },
    dontHaveAcc: {
        fontSize: 15,
        color: COLORS.primary,
        marginTop: -16,
        marginLeft: 80,

    },
})

export default SingUp