import React, { useState } from 'react';
import FoodDelivryContext from './FoodDelivryContext';


const FoodDelivryProvider = props => {
  const [homePageCategory, setHomePageCategory] = useState();
  const [cart, setCart] = useState([]);
  const [order, setOrder] = useState({});
  const [orderExtras, setOrderExtras] = useState(0);
  const [favorait , setFavorait] = useState([])

  const setorderItems = (item) => {
    const itemMenuId = Object.keys(item)[0]
    const amount = item[itemMenuId].amount;

    if (amount > 0) {
      setOrder({
        ...order,
        ...item
      })
    }

  }
    


  const setCartItems = (item) => {
    let cartArr = cart ; 
    cartArr.push(item); 
    setCart([...cartArr]);
  }

  return (
    <FoodDelivryContext.Provider
      value={{
        homePageCategory,
        setHomePageCategory,
        cart,
        setCart: (item) => setCartItems(item),
        order,
        setOrder,
        orderExtras,
        setOrderExtras,
        setFavorait,
        favorait,
      }}>
      {props.children}
    </FoodDelivryContext.Provider>
  );
};

export default FoodDelivryProvider;
