import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import HCPrayers from '../screens/HCPrayers.js';
import HomeScreen from '../screens/HomeScreen.js';
import SaintPrayers from '../screens/SaintPrayers.js';
import StandardPrayers from '../screens/StandardPrayers.js';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName='Home'>
      <Drawer.Screen name="Home" component={HomeScreen}> <Ionicons name="menu" size={28} color="#000" /> </Drawer.Screen>
      <Drawer.Screen name="Saint Prayers" component={SaintPrayers}> <Ionicons name="home" size={28} color="#000" /> </Drawer.Screen>
      <Drawer.Screen name="Holy Cross Prayers" component={HCPrayers} />
      <Drawer.Screen name="Standard Prayers" component={StandardPrayers} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;