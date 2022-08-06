import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomGoalCreationScreen from './CustomGoalCreationScreen';
import GoalSelectionScreen from './GoalSelectionScreen';
import GoalTotalAmountScreen from './GoalTotalAmountScreen';
import GoalTypeScreen from './GoalTypeScreen';
import GoalSavingAmountScreen from './GoalSavingAmountScreen';
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
                component={GoalTotalAmountScreen}
                name="GoalTotalAmount"
                options={{ contentStyle: { backgroundColor: '#fff' } }}
            />
            <goalNavStack.Screen
                component={GoalTypeScreen}
                name="GoalType"
                options={{ contentStyle: { backgroundColor: '#fff' } }}
            />
            <goalNavStack.Screen
                component={GoalSavingAmountScreen}
                name="GoalSavingAmount"
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
