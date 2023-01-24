import React, { useContext } from "react";

import { View,Text ,StyleSheet,Image} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import FoodDelivryContext from "../../store/FoodDelivryContext";

const StoreInfo =(props) =>{
    const {menu} = props;
  const { cart, setCart , order } = useContext(FoodDelivryContext);
  
  
  const orderItems = Object.values(order);
  console.log("orderItems: ", orderItems);
  const renderOrder = ({ item }) => {
    return (
      <View style={styles.orderItem}>
        <View style={styles.orderItemContainer}>
          <Image source={item.image} style={styles.image} />
            
          </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={orderItems}
        renderItem={renderOrder}
        keyExtractor={(item) => `${item.id}`}
      />
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
 

});


export default StoreInfo

