import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import AppMapView from '@/components/HomeScreen/AppMapView'
import { UserLocationContext } from '@/Apps/Screens/LoginScreen/Context/UserLocation'

const home = () => {
  // const {location,setLocation} = useContext(UserLocationContext)
  
  return (
    <View>
      <AppMapView/>
      {/* <Text>Hello{location}</Text> */}
    </View>
  )
}

export default home