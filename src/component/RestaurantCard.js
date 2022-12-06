import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native'
import COLORS from "../../assets/Colors";
import SIZES from "../../assets/sizes";
import icons from "../../constans/icons";
import categoryData from "../../Screens/categoryData";


const RestaurantCard = (props) => {
    const { item } = props;
    const navigation = useNavigation();
    
    const getCategoryNameById = (id) => {
        const category = categoryData?.find((a) => a.id === id);
        return category?.name || ''
    }


    return (
        <TouchableOpacity
            style={{ marginBottom: SIZES.padding * 2 }}
            onPress={() => navigation.navigate("Restaurant", {
                item,

            })}
        >
            {/* Image */}
            <View >
                <Image
                    source={item.photo}
                    resizeMode="cover"
                    style={styles.photo}
                />

                <View style={styles.time} >
                    <Text style={styles.timeText}
                    >{item.duration}</Text>
                </View>
            </View>

            {/* Restaurant Info */}
            <Text style={styles.name} >{item.name}</Text>

            {/* Rating */}
            <View style={styles.rating} >
                <Image style={styles.star} source={icons.star} />
                <Text style={styles.ratingText} >{item.rating}</Text>

                {/* Catagories */}
                <View style={styles.catagories} >
                    {item.categories.map((categoryId) => {
                        return (
                            <View style={styles.catagoryContainer}
                                key={categoryId} >
                                <Text style={styles.catagory} >{getCategoryNameById(categoryId)}</Text>
                                <Text style={styles.catagory} >.</Text>
                            </View>
                        )

                    }
                    )}

                    {/* Price */}
                    {[1, 2, 3].map((priceRating) => (
                        <Text key={priceRating} style={styles.priceRating} >$</Text>
                    ))

                    }
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    photo: {
        width: "100%",
        height: 200,
        borderRadius: SIZES.radius
    },
    time: {
        position: 'absolute',
        bottom: 0,
        height: 50,
        width: 120,
        backgroundColor: COLORS.white,
        borderTopRightRadius: SIZES.radius,
        borderBottomLeftRadius: SIZES.radius,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,


    },
    timeText: {
        color: COLORS.black,
        fontSize: SIZES.h3,
        fontWeight: 'bold',

    },
    name: {
        marginTop: SIZES.padding,
        fontSize: SIZES.h2,
        fontWeight: 'bold',

    },
    rating: {
        flexDirection: 'row',
        marginTop: SIZES.padding,
    },
    star: {
        width: 20,
        height: 20,
        tintColor: COLORS.primary,
        marginRight: 10,
    },
    ratingText: {
        color: COLORS.black,
        fontSize: SIZES.h4,
        fontWeight: 'bold',



    },
    catagories: {
        flexDirection: 'row',
        marginLeft: 10,
    },
    catagoryContainer: {
        flexDirection: 'row',

    },
    catagory: {
        color: COLORS.black,
        fontSize: SIZES.h4,
        fontWeight: 'bold',
        marginRight: 5,
    },
    priceRating: {
        color: COLORS.black,
        fontSize: SIZES.h4,
        fontWeight: 'bold',
        marginLeft: 10,

    },
})

export default RestaurantCard; 