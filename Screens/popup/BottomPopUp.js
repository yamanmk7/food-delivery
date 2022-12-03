import React from "react";
import { View, Text, StyleSheet,Image, Touchable, TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";
import icons from "../../constans/icons";
import { TextInput } from "react-native-gesture-handler";
 

const BottomPopUp = () => {

    const navigation = useNavigation();

    return (
       <View style={styles.Container} >

       
    <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image style={styles.back} source={icons.back}/>
        </TouchableOpacity>
        <Text style={styles.text}>Enter your mobail number</Text>
        
    </View>

    
    <Text style={styles.text1}>We will send you confirmation code</Text>

    <View style={styles.input}>
        
        <Text style={styles.areaNum}>+972</Text>
        <View style={styles.input1}>
        <TextInput placeholder="000000000"></TextInput>
        </View>
    </View>

    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("VerificationCode")}>
        <Text style={styles.buttonText}>Next</Text>
    </TouchableOpacity>


    </View>
   
    );
};

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
        marginLeft: 50,
    },
    text1: {
        fontSize: 12,
       alignSelf: 'center',
       marginLeft: 20,

    },
    input: {
        flexDirection: 'row',
        marginTop: 20,
        
    },
    areaNum: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 20,
        borderWidth: 1,
        borderColor: 'black',
        width: 70,
        height: 50,
        textAlign: 'center',
        borderRadius: 10,
        padding: 10,
    },
    input1: {
        borderWidth: 1,
        borderColor: 'black',
        width: 250,
        height: 50,
        marginLeft: 20,
        borderRadius: 10,
        padding: 15,
    },
    inputNum: {
        fontSize: 20,
    },
    button: {
        backgroundColor: "#FC6011",
        width: 200,
        height: 50,
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 20,
        marginLeft: 20,

    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop: 10,
        color: 'white',
    },
});

export default BottomPopUp;