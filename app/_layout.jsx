import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ClerkLoaded, ClerkProvider } from '@clerk/clerk-expo'
import { Slot } from 'expo-router'
import { UserLocationContext } from '@/Apps/Screens/LoginScreen/Context/UserLocation'

const _layout = ({children}) => {

 
   
  return (
    
    <ClerkProvider publishableKey={'pk_test_cG9saXNoZWQtdGVhbC0zOS5jbGVyay5hY2NvdW50cy5kZXYk'}>
      <ClerkLoaded>
        <Slot />
          {children}
        </ClerkLoaded>
    </ClerkProvider>

  )
}

export default _layout