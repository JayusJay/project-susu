import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const newUserOnBoardingStack = createNativeStackNavigator();

const NewUserOnBoardingNav = () => {
    return (
        <newUserOnBoardingStack.Navigator screenOptions={{ headerShown: false }}>
            <newUserOnBoardingStack.Screen component={GoalSelectionScreen} name="GoalSelection" />
            <newUserOnBoardingStack.Screen component={GoalTotalAmountScreen} name="GoalTotalAmount" />
            <newUserOnBoardingStack.Screen component={GoalTypeScreen} name="GoalType" />
            <newUserOnBoardingStack.Screen component={GoalSavingAmountScreen} name="GoalSavingAmount" />
            <newUserOnBoardingStack.Screen component={GoalFinalScreen} name="GoalFinal" />
            <newUserOnBoardingStack.Screen component={CustomGoalCreationScreen} name="CustomGoalCreation" />
        </newUserOnBoardingStack.Navigator>
    );
};
export default NewUserOnBoardingNav;
