import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../screens/HomeScreen';
import SavingsScreen from '../screens/SavingsScreen';
import InvestmentScreen from '../screens/InvestmentScreen';
import FundRaisingScreen from '../screens/FundRaisingScreen';

const tabStack = createBottomTabNavigator();

const TabStack = () => {
    return (
        <tabStack.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: { backgroundColor: '#7966FF' },
                tabBarInactiveTintColor: '#FFC466',

                tabBarActiveTintColor: '#fff',
            }}
        >
            <tabStack.Screen
                name="Tab-Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => <Ionicons name="home-outline" color={color} size={size} />,
                }}
            />
            <tabStack.Screen
                name="Savings"
                component={SavingsScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        //<FontAwesomeIcon name="piggy-bank" color={color} size = {size}/>
                        <MaterialCommunityIcons name="piggy-bank-outline" color={color} size={30} />
                    ),
                }}
            />
            <tabStack.Screen
                name="Investment"
                component={InvestmentScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="bank-outline" color={color} size={30} />
                    ),
                }}
            />
            <tabStack.Screen
                name="FundRaising"
                component={FundRaisingScreen}
                options={{
                    tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="crowd" color={color} size={30} />,
                }}
            />
        </tabStack.Navigator>
    );
};
export default TabStack;
