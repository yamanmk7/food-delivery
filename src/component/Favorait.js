import react from "react";
import { View, Text } from "react-native";
import FavoraitHeader from "../../Screens/FavoraitSc/FavoraitHeder";
import FavoraitCard from "../../Screens/FavoraitSc/FavoraitCard";




const Favorait = (props) => {
    const { item } = props;

    console.log('item Favorait: ', item);


    return (
        <View>
            <FavoraitHeader />
            <FavoraitCard item={item} />
        </View>
    )
}


export default Favorait;