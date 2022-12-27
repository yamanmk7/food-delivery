import React, { useState } from 'react';
import FoodDelivryContext from './FoodDelivryContext';


const FoodDelivryProvider = props => {
  const [homePageCategory, setHomePageCategory] = useState();
  const [cart, setCart] = useState([]);

  const setCartItems = (item) => {
    const itemMenuId = Object.keys(item)[0]
    const amount = item[itemMenuId].amount; 
    console.log('setCartItems: ' , amount);
    if (amount > 0) {
      setCart({
        ...cart,
        ...item
      })
    }
    else {
      console.log('delete');
      var items = cart;
      delete items[itemMenuId];
      setCart({ ...items })
    }
  } 

  return (
    <FoodDelivryContext.Provider
      value={{
        homePageCategory, setHomePageCategory,
        cart,
        setCart: (item) => setCartItems(item)
      }}>
      {props.children}
    </FoodDelivryContext.Provider>
  );
};

export default FoodDelivryProvider;
