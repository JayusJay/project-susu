import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from '../components/CustomDrawer';
import ProfileScreen from '../screens/ProfileScreen';
import NotificationScreen from '../screens/NotificationScreen';
import SettingScreen from '../screens/SettingScreen';
import TransactionsScreen from '../screens/TransactionsScreen';
import KnowledgeScreen from '../screens/KnowledgeScreen';
import TabStack from './TabStack';

const drawerStack = createDrawerNavigator();

const DrawerStack = () => {
    return (
        <drawerStack.Navigator
            screenOptions={{
                //headerShown: true,
                drawerLabelStyle: { marginLeft: -25 },
                drawerActiveBackgroundColor: '#7966FF',
                drawerActiveTintColor: '#fff',
                headerShown: false,
            }}
            drawerContent={(props) => <CustomDrawer {...props} />}
        >
            <drawerStack.Screen
                name="Home"
                component={TabStack}
                options={{
                    drawerIcon: ({ color }) => <Ionicons name="home-outline" color={color} size={20} />,
                    headerShown: false,
                    drawerContentStyle: { backgroundColor: '#fff' },
                }}
            />
            <drawerStack.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    drawerIcon: ({ color }) => <Ionicons name="person-outline" color={color} size={20} />,
                }}
            />
            <drawerStack.Screen
                name="How it works"
                component={KnowledgeScreen}
                options={{
                    drawerIcon: ({ color }) => <Ionicons name="book-outline" color={color} size={20} />,
                }}
            />
            <drawerStack.Screen
                name="Transactions"
                component={TransactionsScreen}
                options={{
                    drawerIcon: ({ color }) => <Ionicons name="cash-outline" color={color} size={20} />,
                }}
            />
            <drawerStack.Screen
                name="Notifications"
                component={NotificationScreen}
                options={{
                    drawerIcon: ({ color }) => <Ionicons name="notifications-outline" color={color} size={20} />,
                }}
            />
            <drawerStack.Screen
                name="Settings"
                component={SettingScreen}
                options={{
                    drawerIcon: ({ color }) => <Ionicons name="settings-outline" color={color} size={20} />,
                }}
            />
        </drawerStack.Navigator>
    );
};
export default DrawerStack;
