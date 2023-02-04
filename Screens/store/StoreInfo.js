import React, { useContext } from "react";

import { View,Text ,StyleSheet,Image, FlatList} from "react-native";
import FoodDelivryContext from "../../store/FoodDelivryContext";

const StoreInfo =(props) =>{
    
  const { cart, setCart , order } = useContext(FoodDelivryContext);
  
  
  const orderItems = Object.values(cart);
  
  const renderOrder = ({ item }) => {
    return (
      <View style={styles.orderItem}>
        <View style={styles.orderItemContainer}>
          <Image source={item.image} style={styles.image} />
          </View>
      </View>
    );
  };
  console.log("orderItems1",orderItems);
  return (
    <View style={styles.container}>    
      <FlatList
        data={cart}
        renderItem={renderOrder}
        keyExtractor={(item) => `${item.id}`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    flex:1
  },
 

});


export default StoreInfo

