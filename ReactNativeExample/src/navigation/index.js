import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import MainScreen from '../screens/Main';
import UsersScreen from '../screens/Users';

const Tab = createBottomTabNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={MainScreen} />
        <Tab.Screen name="Users" component={UsersScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
