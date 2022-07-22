import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerStack from './DrawerStack';
import GoalDetailScreen from '../screens/GoalDetailScreen';
import GoalCreationNavScreen from '../screens/goal_creation/goalCreationNavScreen';
const appStack = createNativeStackNavigator();

const AppStack = () => {
    return (
        <appStack.Navigator>
            <appStack.Screen component={DrawerStack} name="Drawer" options={{ headerShown: false }} />
            <appStack.Screen component={GoalDetailScreen} name="Goal Detail" options={{ headerShown: false }} />
            <appStack.Screen
                component={GoalCreationNavScreen}
                name="Goal Creation Nav"
                options={{ headerShown: false }}
            />
        </appStack.Navigator>
    );
};
export default AppStack;
