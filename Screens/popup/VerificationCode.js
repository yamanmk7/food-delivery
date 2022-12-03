import React from "react";
import { View, Text, StyleSheet,Image, Touchable, TouchableOpacity, TextInput} from "react-native";
import { useNavigation } from "@react-navigation/native";
import icons from "../../constans/icons";
const VerificationCode = () => {
    
        const navigation = useNavigation();
    
        return (
        <View style={styles.Container} >
    
        
        <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image style={styles.back} source={icons.back}/>
            </TouchableOpacity>
            <Text style={styles.text}>Enter Verification code</Text>
            
        </View>
    
        
        <Text style={styles.text1}>code sent to 00000000</Text>
    
        <View style={styles.input}>
            
           <TextInput style={styles.code} placeholder="*"></TextInput>
           <TextInput style={styles.code} placeholder="*"></TextInput>
           <TextInput style={styles.code} placeholder="*"></TextInput>
           <TextInput style={styles.code} placeholder="*"></TextInput>


        </View>
    
        <TouchableOpacity style={styles.button} 
        onPress={() => navigation.navigate("UserScreen")}>
            <Text style={styles.buttonText}>Verify phine number</Text>
        </TouchableOpacity>
        </View>

)}

const styles = StyleSheet.create({
    Container: {
        
       
     


    },
    header: {
        flexDirection: 'row',
        marginTop:60,

       
    },
    back: {
        width: 30,
        height: 30,
        marginLeft: 20,
        tintColor: "#FC6011",
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 60,
    },
    text1: {
        fontSize: 12,
       alignSelf: 'center',
       marginLeft: 20,

    },
    input: {
        flexDirection: 'row',
        marginTop: 20,
        
        alignSelf: 'center',
        
    },
   
    
   
    button: {
        backgroundColor: "#FC6011",
        width: 250,
        height: 50,
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 20,
        marginLeft: 30,

    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop: 10,
        color: 'white',
    },
    code: {
        borderWidth: 1,
        borderColor: 'black',
        width: 40,
        height: 40,
        marginLeft: 20,
        borderRadius: 10,
        padding: 15,
    },
})

export default VerificationCode;