import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import DailyPrayers from './screens/DailyPrayers';
import HCPrayers from './screens/HCPrayers';
import Home from './screens/Home';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName='Home'>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Daily Prayers" component={DailyPrayers} />
      <Drawer.Screen name="Holy Cross Prayers" component={HCPrayers} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
