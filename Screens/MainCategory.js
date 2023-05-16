import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import images from '../constans/images'
import icons from '../constans/icons'
import SIZES from '../assets/sizes'
import COLORS from '../assets/Colors'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { useState } from 'react'

import categoryData from '../Screens/categoryData'
import restaurantData from './RestaurantData'
import { useNavigation } from '@react-navigation/native'
import CategoreyItem from '../src/component/CategoreyItem'
import { TextInput } from 'react-native-gesture-handler'
import { SelectList } from 'react-native-dropdown-select-list'









export default function MainCategories() {
    const navigation = useNavigation()
    const [categories, setCategories] = useState(categoryData)
    const [selectedCategory, setSelectedCategory] = useState(null)
    const [restaurants, setRestaurants] = useState(restaurantData);
    
    const [selected, setSelected] = React.useState([]);

   

    const data = [
        {id:'1', value:'HotDogs'},
        {id:'2', value:'Salad'},
        {id:'3', value:'Burgers'},
        {id:'4', value:'Pizza'},
        {id:'5', value:'Snacks'},
        {id:'6', value:'Diary Drinks'},
    ]
   

    const renderItem = ({ item }) => {
        return (<CategoreyItem
            onItemPress={(item) => setSelectedCategory(item)}
            item={item}
            selectedCategory={selectedCategory}
        />
        
        )
    }


    const params = {
        list: {
            data: categories,
            horizontal: true,
            showsHorizontalScrollIndicator: false,
            keyExtractor: item => `${item.id}`,
            renderItem,
            contentContainerStyle: { paddingVertical: SIZES.padding * 2 },
        }
    }

    return (
        <View>
            
            <View style={{ padding: SIZES.padding * 2 }} >

                <Text style={styles.text}>Categories</Text>
              
                <FlatList {...params.list} />
                <SelectList 
      onSelect={() => alert(selected)}
      setSelected={setSelected} 
      
      data={data}  
      search={true} 
      boxStyles={{borderRadius:1}} 
    />  
            </View>

              
    
               
             
         
        </View>
    )


}

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        color: COLORS.black,

    },
    icons: {
        width: 30,
        height: 30
    },
    search: {
        width: 300,
        height: 40,
        backgroundColor: 'lightgray',
        borderRadius: 20,
        marginTop: 20,
        marginLeft: 30,

    },

    searchbar: {
     marginLeft:20,
        marginTop:10,
        fontSize:15,
        fontWeight:'bold'

       
    },
      

})