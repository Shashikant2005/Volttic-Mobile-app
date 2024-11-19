import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';
import { Redirect, Stack, useRouter } from 'expo-router';
import { ClerkProvider, ClerkLoaded, useUser, SignedOut, SignedIn } from '@clerk/clerk-expo'
import { Link } from 'expo-router'
import LoginScreen from '@/Apps/Screens/LoginScreen/LoginScreen';
import * as Location from 'expo-location';
import { UserLocationContext } from '@/Apps/Screens/LoginScreen/Context/UserLocation';
import Layout from './tabs/_layout';
SplashScreen.preventAutoHideAsync();

const index = () => {

    //location Access setup : Expo Location 
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
   
     useEffect(() => {
       async function getCurrentLocation() {
         
         let { status } = await Location.requestForegroundPermissionsAsync();
         if (status !== 'granted') {
           setErrorMsg('Permission to access location was denied');
           return;
         }
   
         let location = await Location.getCurrentPositionAsync({});
         setLocation(location.coords);
         console.log(location)
       }
   
       getCurrentLocation();
     }, []);
   
     let text = 'Waiting...';
     if (errorMsg) {
       text = errorMsg;
     } else if (location) {
       text = JSON.stringify(location);
     }

    const { user } = useUser()
 
    const [loaded, error] = useFonts({
        'Outfit-bold': require('../assets/fonts/Outfit-Bold.ttf'),
        'Outfit-regular': require('../assets/fonts/Outfit-Regular.ttf'),
        'Outfit-medium': require('../assets/fonts/Outfit-Medium.ttf'),
      });
    
      useEffect(() => {
        if (loaded || error) {
          SplashScreen.hideAsync();
        }
      }, [loaded, error]);
    
      if (!loaded && !error) {
        return null;
      }

   
  if (user) {
    // Redirect to a tab-based layout if the user is signed in
    return (
      <UserLocationContext.Provider value={{ location, setLocation }}>
        <Redirect href={'/tabs'}/>
      </UserLocationContext.Provider>
    );
    
  }


  return (
    <UserLocationContext.Provider value={{location,setLocation}}>  
        <View>
              <SignedIn>
                      {/* <Text>shashikant</Text> */}
              </SignedIn>
              <SignedOut>
                  <LoginScreen/>
              </SignedOut>
          </View>
  



  </UserLocationContext.Provider>

    
  )
}

export default index