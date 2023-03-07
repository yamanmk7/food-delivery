import react, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList ,Button} from "react-native";
import { useEffect } from "react";


import { AsyncStorage } from 'react-native';

const FavoraitCard = ({ item }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    // Check if the item is already a favorite
    AsyncStorage.getItem('favorites').then((data) => {
      const favorites = JSON.parse(data);
      if (favorites) {
        const index = favorites.findIndex((fav) => fav.id === item.id);
        if (index > -1) {
          setIsFavorite(true);
        }
      }
    });
  }, []);

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
    toggleFavorite(item);
  };

  return (
    <View>
      <Text></Text>
      <Button title={isFavorite ? 'Remove from favorites' : 'Add to favorites'} onPress={handleToggleFavorite} />
    </View>
  );
};


export default FavoraitCard;