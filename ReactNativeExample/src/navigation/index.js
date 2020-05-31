import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import MainScreen from '../screens/Main';
import UsersScreen from '../screens/Users';
import ProfileScreen from '../screens/Profile';

const Stack = createStackNavigator();
const UsersStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Users" component={UsersScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();
const Navigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={MainScreen} />
        <Tab.Screen name="Users" component={UsersStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
