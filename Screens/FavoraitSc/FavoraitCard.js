import react from 'react';
import { View, Text, Image, TouchableOpacity, ImageBackground , StyleSheet } from 'react-native';
import icons from '../../constans/icons';
import  COLORS from '../../assets/Colors';
import images from '../../constans/images';


const FavoriteCard = (props) => {
    const {order}=props;
    
    return(
        <View style={styles.foodCard}>
        <View style={{ flexDirection: 'row', flex: 1 }}>
            <View style={{ flex: 1 }} >
                <TouchableOpacity >
                    <ImageBackground style={styles.foodImage} source={images.burgerRestaurant} >
                        <View style={styles.caloriesContainer}>
                            <Text style={styles.caloriesText}>{icons.calories}</Text>
                            <Image style={styles.caloriesIcon} source={icons.fire} />
                    
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
            <View style={{ justifyContent: 'space-between', flex: 1 }}>
                <Text style={styles.foodName}>Bureger</Text>
                <Text style={styles.priceText}>Price:10$</Text>
            </View>
        </View> 
    </View>
    )
};
const styles = StyleSheet.create({
    foodCard: {
        flexDirection: 'row',
        margin: 20,
        // marginLeft: -10,
        justifyContent: 'space-between',
        // borderWidth: 1,
    },
    foodImage: {
        width: 150,
        height: 150,
        // borderRadius: 10,
        // marginRight: 10,
        justifyContent: 'flex-end'
    },
    foodName: {
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
    },
    favoraitIcon: {
        width: 25,
        height: 25,
        tintColor: COLORS.darkgray,
        marginTop: 10,
        // marginRight:10 , 
    },
    caloriesIcon: {
        width: 20,
        height: 20,

    },
    caloriesText: {
        fontSize: 15,
        fontWeight: 'bold',

    },
    caloriesContainer: {
        flexDirection: 'row',
        // position: 'absolute',
        // bottom: 10,
        backgroundColor: COLORS.white,
        padding: 5,
        borderTopRightRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 70,
        height: 30,
        shadowColor: COLORS.black,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        elevation: 5,
        alignSelf: 'flex-start',
    },
    priceText: {
        fontSize: 15,
        fontWeight: 'bold',
        // marginLeft: 190,
        // marginTop: -30,
        // position: 'absolute',
    },
});


 export default FavoriteCard;