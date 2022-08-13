import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppStoreProvider } from '../components/AppStoreContext';
import DrawerStack from './DrawerStack';
import GoalDetailScreen from '../screens/GoalDetailScreen';
import GroupDetailScreen from '../screens/GroupDetailScreen';
import GroupCreationScreen from '../screens/GroupCreationScreen';
import GoalCreationNavScreen from '../screens/goal_creation/GoalCreationNavScreen';

const appStack = createNativeStackNavigator();

const AppStack = () => {
    return (
        <AppStoreProvider>
            <appStack.Navigator>
                <appStack.Screen component={DrawerStack} name="Drawer" options={{ headerShown: false }} />
                <appStack.Screen component={GoalDetailScreen} name="Goal Detail" options={{ headerShown: false }} />
                <appStack.Screen component={GroupDetailScreen} name="Group Detail" options={{ headerShown: false }} />
                <appStack.Screen
                    component={GroupCreationScreen}
                    name="Group Creation"
                    options={{ headerShown: false }}
                />
                <appStack.Screen
                    component={GoalCreationNavScreen}
                    name="Goal Creation Nav"
                    options={{ headerShown: false }}
                />
            </appStack.Navigator>
        </AppStoreProvider>
    );
};
export default AppStack;
