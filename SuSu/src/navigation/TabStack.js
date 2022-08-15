import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../screens/HomeScreen';
import SavingsScreen from '../screens/SavingsScreen';
import GroupInvestmentScreen from '../screens/GroupInvestmentScreen';
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
                    tabBarIcon: ({ color }) => <Ionicons name="home-outline" color={color} size={27} />,
                }}
            />
            <tabStack.Screen
                name="Savings"
                component={SavingsScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="piggy-bank-outline" color={color} size={27} />
                    ),
                }}
            />
            <tabStack.Screen
                name="GroupInvestment"
                component={GroupInvestmentScreen}
                options={{
                    tabBarIcon: ({ color }) => <MaterialIcons name="groups" color={color} size={27} />,
                }}
            />
            <tabStack.Screen
                name="FundRaising"
                component={FundRaisingScreen}
                options={{
                    tabBarIcon: ({ color }) => <MaterialCommunityIcons name="crowd" color={color} size={27} />,
                }}
            />
        </tabStack.Navigator>
    );
};
export default TabStack;
