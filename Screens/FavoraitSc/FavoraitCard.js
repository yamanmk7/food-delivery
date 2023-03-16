// import React,{useContext} from 'react';
// import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
// import FoodDelivryContext from '../../store/FoodDelivryContext';
// import MenuItem from '../../src/component/MenuItem';




// const FavoriteCard = (props) => {

//   const { userId, ServId,fileId , userFavorates , fId} = useContext(FoodDelivryContext);

//   const query = () => {
//     const filterdFav = userFavorates.filter(favService => {
//         return favService.favoListFileId 
       
//     })

//     const faveArr = filterdFav.map(fav => servicesData.find(ser => ser.MenuItem=== fav.favoListServiceId))
//        return faveArr ;
//   }

//        const renderCard = () => {
//         const data = query();
//         const cardsArray = data.map(card => {
//             return card ? <MenuItem  {...card} /> : null;
//         });
//         return cardsArray;
//     }
  



//   return(
//     <View>
//       {renderCard()}
//     </View>
//   )
//   }





// export default FavoriteCard;