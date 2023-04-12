import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import Tabs from '../tabs';
import StoreScreen from '../store/StoreCard';


const drawer = createDrawerNavigator();

const DrawerScreen=()=>{
    return(
        <drawer.Navigator>
            <drawer.Screen name="Home" component={Tabs}/>
            <drawer.Screen name="Home" component={StoreScreen}/>


        </drawer.Navigator>
    )

}

export default DrawerScreen;
   



  