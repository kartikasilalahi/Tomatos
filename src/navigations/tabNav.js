import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import HomeNav from './homeNav';
import Logout from '../components/logout';

const Tab = createBottomTabNavigator();

const LogOutComp = (nav) => {
    return ({ navigation }) => <Logout navigation={navigation} rootStackNavigation={nav} />
}

export default ({ navigation }) => {
    return (
        <Tab.Navigator
            initialRouteName="HomeNav"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'HomeNav') {
                        iconName = 'home';
                    } else if (route.name === 'LogOut') {
                        iconName = 'restaurant-menu';
                    }

                    // You can return any component that you like here!
                    return <Icon name={iconName} size={35} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
                showLabel: false
            }}
        >
            <Tab.Screen name="HomeNav" component={HomeNav} />
            <Tab.Screen name="LogOut">
                {LogOutComp(navigation)}
            </Tab.Screen>
        </Tab.Navigator>
    )
}
