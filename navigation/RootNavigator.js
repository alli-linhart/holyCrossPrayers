import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
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
      <Drawer.Screen 
        name="Home" 
        component={HomeScreen} 
        options ={{
          tabBarIcon : ({focused}) => (
            <MaterialCommunityIcons name= "home" size = {60}/>
          ),
        }}
        />
      <Drawer.Screen name="Saint Prayers" component={SaintPrayers} />
      <Drawer.Screen name="Holy Cross Prayers" component={HCPrayers} />
      <Drawer.Screen name="Standard Prayers" component={StandardPrayers} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;