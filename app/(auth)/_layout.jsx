import { View, Text } from 'react-native'
import React from 'react'
import { useAuth } from '@clerk/clerk-expo'
import { Stack } from 'expo-router'

const _layout = () => {
    const { isSignedIn } = useAuth()
    if (isSignedIn) {
        return <Redirect href={'/'} />
      }
    return (
      //  <></>
       <Stack/>
    )
}

export default _layout