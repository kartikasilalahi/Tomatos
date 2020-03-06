import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../components/login';
import TabMenu from './tabNav';

const Stack = createStackNavigator()

export default (props) => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      headerMode="none"
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="TabMenu" component={TabMenu} />
    </Stack.Navigator>
  )
}