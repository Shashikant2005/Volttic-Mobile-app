import { View, Text, StyleSheet, Alert, Image} from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';
import MapViewStyle from "../../Apps/Screens/LoginScreen/utils/MapViewStyle.json"
import { UserLocationContext } from '@/Apps/Screens/LoginScreen/Context/UserLocation';
const AppMapView = () => {

  const [location, setLocation] = useState(null);

  // Fetch the user's location
  useEffect(() => {
    (async () => {
      try {
        // Request location permissions
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          // Alert.alert('Permission denied', 'Unable to access location services.');
          return;
        }

        // Get the current location
        const userLocation = await Location.getCurrentPositionAsync({});
        setLocation({
          latitude: userLocation.coords.latitude,
          longitude: userLocation.coords.longitude,
          latitudeDelta: 0.01, // Zoom level
          longitudeDelta: 0.01,
        });
      } catch (error) {
        console.error("Error fetching location:", error);
      }
    })();
  }, []);

  if (!location) {
    return (
      <View style={styles.loadingContainer}>
        {/* <Alert alertText="Loading map..." /> */}
      </View>
    );
  }
  
  return  (
      <View>
       <MapView style={styles.map} 
         provider={PROVIDER_GOOGLE}
         customMapStyle={MapViewStyle}
       > 
         
          <Marker
            coordinate={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            title="Your Location"
            description="This is where you are currently located."
          >
            {/* <Image style={{width:60,height:60}} source={require("./../../assets/images/carmarker.jpeg")} /> */}
          </Marker>
       </MapView>
    
       </View>
  
  )
}

export default AppMapView

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    map: {
      width: '80%',
      height: '80%',
    },
  });