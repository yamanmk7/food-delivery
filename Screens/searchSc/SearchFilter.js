import React, { useState } from 'react';
import { View, Text, TextInput, FlatList , StyleSheet, Image} from 'react-native';
import categoryData from '../categoryData';
import icons from '../../constans/icons';
import COLORS from '../../assets/Colors';


const SearchFilter = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState(categoryData);

  const handleSearch = (text) => {
    setSearchText(text);
    const newData = categoryData.filter((item) => {
      const itemData = item.name.toLowerCase();
      const textData = text.toLowerCase();
      return itemData.indexOf(textData) > -1;
    });
    setFilteredData(newData);
  };

  const renderItem = ({ item }) => (
    <Text>{item.name}</Text>
  );

  return (
    <View>
    <View style={styles.search}>
    <Image source={icons.search} style={styles.searchimg}/>
      <TextInput style={styles.searchbox}
        placeholder="Search"
        onChangeText={handleSearch}
        value={searchText}
      />
    </View>
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    search: {
        flexDirection: 'row',
        alignItems: 'center',
       
        
    },
    searchbox: {
        height: 40,
        width: 300,
        margin: 12,
        padding: 10,
        backgroundColor: 'lightgray',
        borderRadius: 20,
         marginTop: 20,
            marginLeft: 5,
    },
    searchimg: {
        width: 20, 
        height: 20,
         tintColor: COLORS.black ,
         marginLeft: 20,
            marginTop: 10,
            

    },

});

export default SearchFilter;

