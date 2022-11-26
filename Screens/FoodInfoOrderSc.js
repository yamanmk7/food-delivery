import { View, Text,SafeAreaView,StyleSheet,TouchableOpacity,Image,Animated } from 'react-native'
import React from 'react'
import SIZES from '../assets/sizes'
import COLORS from '../assets/Colors'
import icons from '../constans/icons'
import images from '../constans/images'
import restaurantData from './RestaurantData'

const FoodInfoOrderSc = () => {
     const [orderItems, setOrderItems] = React.useState([])

     function editOrder(action,menuId,price){
         let orderList = orderItems.slice()
         let item = orderList.filter(a => a.menuId == menuId)

         if(action == "+"){
             if(item.length > 0){
                 let newQty = item[0].qty + 1
                 item[0].qty = newQty
                 item[0].total = item[0].qty * price
             }else{
                 const newItem = {
                     menuId: menuId,
                     qty: 1,
                     price: price,
                     total: price
                 }
                 orderList.push(newItem)
             }
             setOrderItems(orderList)
         }else{
             if(item.length > 0){
                 if(item[0].qty > 0){
                     let newQty = item[0].qty - 1
                     item[0].qty = newQty
                     item[0].total = newQty * price
                 }
             }
             setOrderItems(orderList)
         }
     }

        function getOrderQty(menuId){
            let orderItem = orderItems.filter(a => a.menuId == menuId)

            if(orderItem.length > 0){
                return orderItem[0].qty
            }

            return 0
        }

      
  return (
    <Animated.ScrollView 
     horizontal
        pagingEnabled
        scrollEventThrottle={16}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
     >
        <View>
            <View>
            <Image source={images.crispyChickenBurger}  style={styles.food} />
            </View>
            <View style={styles.quantityContainer}>
            <TouchableOpacity activeOpacity={0.7} 
              onPress={() => editOrder("-")}
            >
            <View style={styles.quantity}>
                
                <Text style={styles.menuse}>-</Text>
                
            </View>
            </TouchableOpacity>

             <View style={styles.number} >
                <Text style={styles.num}>{getOrderQty()}</Text>
             </View>

                <TouchableOpacity activeOpacity={0.7}  
                onPress={() => editOrder("+")}
                >
                <View style={styles.pluse}><Text style={styles.pluse1}>+</Text></View>
                </TouchableOpacity>

                <Text style={styles.burgerName}>crispy Chicken Burger   -  $49  </Text>
                <Text style={styles.description}>Burger with Crispy chicken, cheese and lettuce </Text>
                <Text style={styles.calorys}>Calorys: 200</Text>
                <Image source={icons.fire} style={styles.fire} />
            </View>


            
        </View>

    </Animated.ScrollView>
  )
}

const styles = StyleSheet.create({
    food:{
       width:440,
         height:300,
         marginTop:-40,
         
       
    },
    quantityContainer:{
        flexDirection:'row',
    } ,
    quantity:{
        width:50,
        height:50,
        backgroundColor:COLORS.white,
        borderTopLeftRadius:25,
        borderBottomLeftRadius:25,
        alignItems:'center',
        justifyContent:'center',
        marginLeft:140,
        marginTop:-30,
        
        
        
    },
    menuse:{
        fontSize:40,
        fontWeight:'bold',
        color:COLORS.black,
        marginLeft:5,
        marginTop:-5,
    },
    number:{
        width:50,
        height:50,
        backgroundColor:COLORS.white,
        alignItems:'center',
        justifyContent:'center',
        marginTop:-30,
        
    } ,
    num:{
        fontSize:20,
        fontWeight:'bold',
        color:COLORS.black,

    } ,
    pluse:{
        width:50,
        height:50,
        backgroundColor:COLORS.white,
        borderTopRightRadius:25,
        borderBottomRightRadius:25,
        alignItems:'center',
        justifyContent:'center',
        marginTop:-30,
       

    } ,
    pluse1:{
        fontSize:30,
        fontWeight:'bold',
        color:COLORS.black,
        marginLeft:-5,

    } ,
    burgerName:{
        fontSize:20,
        fontWeight:'bold',
        color:COLORS.black,
        marginLeft:-200,
        marginTop:20,
        
    } ,
    description:{
        fontSize:15,
        fontWeight:'bold',
        color:COLORS.black,
        marginLeft:-300,
        marginTop:55,
    } ,
    calorys:{
        fontSize:15,
        fontWeight:'bold',
        color:COLORS.black,
        marginLeft:-210,
        marginTop:85,

    } ,
    fire:{
        width:20,
        height:20,
        marginLeft:5,
        marginTop:85,
    } ,


} )

export default FoodInfoOrderSc