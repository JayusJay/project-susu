import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PhoneNumberScreen from '../screens/new_user_onboarding/PhoneNumberScreen';
import OTPConfirmationScreen from '../screens/new_user_onboarding/OTPConfirmationScreen';

const newUserOnBoardingStack = createNativeStackNavigator();

const NewUserOnBoardingNav = () => {
    return (
        <newUserOnBoardingStack.Navigator screenOptions={{ headerShown: false }}>
            {/* <newUserOnBoardingStack.Screen component={PhoneNumberScreen} name="PhoneNumber" /> */}
            <newUserOnBoardingStack.Screen component={OTPConfirmationScreen} name="OTPConfirmation" />
        </newUserOnBoardingStack.Navigator>
    );
};
export default NewUserOnBoardingNav;
