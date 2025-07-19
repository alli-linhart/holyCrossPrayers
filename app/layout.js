import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import DailyPrayers from '../screens/DailyPrayers.js';
import HCPrayers from '../screens/HCPrayers.js';
import HomeScreen from '../screens/HomeScreen.js';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName='Home'>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Daily Prayers" component={DailyPrayers} />
      <Drawer.Screen name="Holy Cross Prayers" component={HCPrayers} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;