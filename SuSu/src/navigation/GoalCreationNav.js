import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomGoalCreationScreen from '../screens/goal_creation/CustomGoalCreationScreen';
import GoalSelectionScreen from '../screens/goal_creation/GoalSelectionScreen';
import GoalTotalAmountScreen from '../screens/goal_creation/GoalTotalAmountScreen';
import GoalTypeScreen from '../screens/goal_creation/GoalTypeScreen';
import GoalSavingAmountScreen from '../screens/goal_creation/GoalSavingAmountScreen';
import GoalFinalScreen from '../screens/goal_creation/GoalFinalScreen';

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
                component={GoalFinalScreen}
                name="GoalFinal"
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
