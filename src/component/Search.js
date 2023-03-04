import react from "react";
import { View, Text } from "react-native";
import SearchHeader from "../../Screens/searchSc/HeaderSearch";
import SearchFilter from "../../Screens/searchSc/SearchFilter";



const Search =(props) => {
    return (
        <View>
            <SearchHeader />
            <SearchFilter/>
            
        </View>
    )
}

export default Search;