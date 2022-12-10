import React, { useState } from 'react';
import FoodDelivryContext from './FoodDelivryContext';

const FoodDelivryProvider = props => {
  const [homePageCategory, setHomePageCategory] = useState();
  return (
    <FoodDelivryContext.Provider
      value={{
        homePageCategory, setHomePageCategory
      }}>
      {props.children}
    </FoodDelivryContext.Provider>
  );
};

export default FoodDelivryProvider;
