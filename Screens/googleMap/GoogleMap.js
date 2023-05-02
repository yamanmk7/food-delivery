import React from "react";
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import MapView, {PROVIDER_GOOGLE, Marker }from "react-native-maps";
import GoogleMapHeader from "./HeaderGoogleMap";

const GoogleMap = ({route, navigation}) => {

    const [restaurant, setRestaurant] = React.useState(null);    
    const [streetName, setStreetName] = React.useState("");
    const [fromLocation, setFromLocation] = React.useState(null);
    const [toLocation, setToLocation] = React.useState(null);
    const [region, setRegion] = React.useState(null);

    // React.useEffect(() => {
    //      let {restaurant, currentLocation} = route.params ||{};
    //     let fromLoc = currentLocation.gps  ;
    //     let toLoc = restaurant.location;
    //     let street = currentLocation.streetName;

    //     let xDelta = Math.abs(fromLoc.latitude - toLoc.latitude) * 2;
    //     let yDelta = Math.abs(fromLoc.longitude - toLoc.longitude) * 2;

    //     setRestaurant(restaurant);
    //     setStreetName(street);
    //     setFromLocation(fromLoc);
    //     setToLocation(toLoc);
    //     setRegion({
    //         latitude: (fromLoc.latitude + toLoc.latitude) / 2,
    //         longitude: (fromLoc.longitude + toLoc.longitude) / 2,
    //         latitudeDelta: xDelta,
    //         longitudeDelta: yDelta,
    //     })
       

    // }, []);
    return (
    <View style={{flex:1}} >
       <MapView style={{flex:1}}
        //  provider={PROVIDER_GOOGLE}
       initialRegion={region}
       >
        
         <GoogleMapHeader/>
       </MapView>
    </View>
    )
};


export default GoogleMap;