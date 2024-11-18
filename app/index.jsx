import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';
import { Redirect, Stack, useRouter } from 'expo-router';
import { ClerkProvider, ClerkLoaded, useUser, SignedOut, SignedIn } from '@clerk/clerk-expo'
import { Link } from 'expo-router'
import LoginScreen from '@/Apps/Screens/LoginScreen/LoginScreen';

SplashScreen.preventAutoHideAsync();

const index = () => {
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
    return <Redirect href="/tabs" />;
  }


  return (
   
 <View>
      <SignedIn>
         {/* <Text>shashikant</Text> */}
      </SignedIn>
      <SignedOut>
          <LoginScreen/>
      </SignedOut>
  </View>




    
  )
}

export default index