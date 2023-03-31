import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View,Text, TouchableOpacity,Image, StyleSheet, TextInput } from "react-native";
import TouchID from "react-native-touch-id";
import COLORS from "../../assets/Colors";
import icons from "../../constans/icons";




const SingIn = () => {
    const navigation = useNavigation();

    const authentificate = () => {
        TouchID.authenticate("to demo this react-native component")
            .then(success => {
                alert("Authenticated Successfully");
            })
            .catch(error => {
                alert("Authentication Failed");
            });

            if (authentificate) {
                navigation.navigate("UserScreen");
            } 

            
    };

    const onOredrPress = () => {
       

        setTimeout(() => {
            navigation.goBack();
        }, 0.9 * 1000 );

    }

     return (
           <View style={styles.Container} >
            <View style={styles.header}>
               <Text style={styles.SingInHeader}> Sing in </Text>
            </View>
            <View style={styles.welcome}>
                <Text style={styles.welcomeText}>Welcome  to  FoodDelivery</Text>

            </View>
            <View style={styles.input}>
                <TextInput style={styles.inputText} placeholder="Enter your phone number "
                placeholderTextColor={COLORS.black}  />

            </View>
            <View style={styles.input}>
                <TextInput style={styles.inputText} placeholder="Enter your password"
                placeholderTextColor={COLORS.black} />

            </View>

            <TouchableOpacity style={styles.SingIn} onPress={() => navigation.navigate("UserScreen")}>
                <Text style={styles.SingInText}> Sing in </Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.faceid} onPress={ onOredrPress && authentificate}>
                <Text style={styles. faceidText}> Face Id  </Text>
            </TouchableOpacity>
   
           <View>
                <Text style={styles.singup}>Don't have an account? 
                <TouchableOpacity onPress={() => navigation.navigate("SingUp")}>
                <Text style={{color: COLORS.primary}}>Sing up</Text></TouchableOpacity>
                </Text>
           </View>
           <TouchableOpacity>
           <View> 
                <Text style={styles.changePass}>Forgot password? </Text>
           </View>
           </TouchableOpacity>

           <View>
            <Text style={styles.foormFooter}>
            By cliking on "Sing in" you agree to <Text style={{color:COLORS.primary}}>FoodDelivery</Text> terms and conditions
            and privacy policy
            


            </Text>
           </View>
          
           </View>

     )
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: COLORS.lightGray3,


    },
    header: {
        backgroundColor: COLORS.black,
        height: 50,
        width: 200,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        marginLeft: 110,
    },
    SingInHeader: {
        color: COLORS.primary,
        fontSize: 20,
        fontWeight: 'bold',


    },
    welcome: {
       marginTop: 50,
       
    },
    welcomeText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 50,
        marginLeft: 80,

    },
    input: {
        backgroundColor: COLORS.white,
        height: 50,
        width: 390,
        borderRadius: 10,
       
        marginTop: 50,
        marginLeft: 10,

    },
    inputText: {
        fontSize: 15,
        padding:5,
        marginLeft: 20,
        marginTop: 10,

        

    },
    SingIn: {
        backgroundColor: COLORS.black,
        height: 50,
        width: 390,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 70,
        marginLeft: 10,

    },
    SingInText: {
        color: COLORS.primary,
        fontSize: 20,
        fontWeight: 'bold',
    },
    faceid: {
        borderColor: COLORS.primary,
        borderWidth: 2,
        height: 50,
        width: 390,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginLeft: 10,
       
    },
    faceidText: {
        color: COLORS.primary,
        fontSize: 20,
        fontWeight: 'bold',

    },
    singup: {
        fontSize: 15,
        marginTop: 20,
        marginLeft: 100,
        
    },
    changePass: {
        fontSize: 15,
        marginTop: 20,
        marginLeft: 150,
    },
    foormFooter: {
       marginTop: 90,
       fontSize: 14,
       fontWeight: '400',
       lineHeight: 20,
       color: '#929292',
       textAlign: 'center',
        
    },
    

   

})

export default SingIn
