import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import FavoriteScreen from '../Screens/FavoriteScreen/FavoriteScreen';
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
   <Tab.Navigator >
      <Tab.Screen name='home' component={HomeScreen}/>
      <Tab.Screen name="favorite" component={FavoriteScreen} />
      <Tab.Screen name='profile' component={ProfileScreen}/>
   </Tab.Navigator>
  )
}

export default TabNavigation