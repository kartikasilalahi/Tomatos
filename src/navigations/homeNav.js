import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../components/home';

const Stack = createStackNavigator()

export default () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      headerMode="none"
    >
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  )
}