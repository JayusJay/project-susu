import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomGoalCreationScreen from './CustomGoalCreationScreen';
import GoalSelectionScreen from './GoalSelectionScreen';
import GoalAmountScreen from './GoalAmountScreen';
import Screen3 from './Screen3';
import Screen4 from './Screen4';
import Screen5 from './Screen5';

const goalNavStack = createNativeStackNavigator();

const GoalCreationNavScreen = () => {
    return (
        <goalNavStack.Navigator screenOptions={{ headerShown: false }}>
            <goalNavStack.Screen
                component={GoalSelectionScreen}
                name="GoalSelection"
                options={{ contentStyle: { backgroundColor: '#fff' } }}
            />
            <goalNavStack.Screen
                component={GoalAmountScreen}
                name="GoalAmount"
                options={{ contentStyle: { backgroundColor: '#fff' } }}
            />
            <goalNavStack.Screen
                component={Screen3}
                name="Screen3"
                options={{ contentStyle: { backgroundColor: '#fff' } }}
            />
            <goalNavStack.Screen
                component={Screen4}
                name="Screen4"
                options={{ contentStyle: { backgroundColor: '#fff' } }}
            />
            <goalNavStack.Screen
                component={Screen5}
                name="Screen5"
                options={{ contentStyle: { backgroundColor: '#fff' } }}
            />
            <goalNavStack.Screen
                component={CustomGoalCreationScreen}
                name="CustomGoalCreation"
                options={{ contentStyle: { backgroundColor: '#fff' } }}
            />
        </goalNavStack.Navigator>
    );
};
export default GoalCreationNavScreen;
