import { Tabs } from 'expo-router';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

const Layout = () => {
  return (
    <Tabs>
      {/* Home Tab */}
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: 'home',  // Remove the label
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons 
              name="home" 
              size={24} 
              color={focused ? '#1eeb96' : 'black'}  // Change icon color when focused
            />
          ),
          headerShown: false,
        }}
      />
      
      {/* Favorite Tab */}
      <Tabs.Screen
        name="favorite"
        options={{
          tabBarLabel: 'favorite',  // Remove the label
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons 
              name="heart" 
              size={24} 
              color={focused ? '#1eeb96' : 'black'}  // Change icon color when focused
            />
          ),
          headerShown: false,
        }}
      />
      
      {/* Profile Tab */}
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: 'profile',  // Remove the label
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons 
              name="account" 
              size={24} 
              color={focused ? '#1eeb96' : 'black'}  // Change icon color when focused
            />
          ),
          headerShown: false,
        }}
      />
    </Tabs>
  );
};

export default Layout;
