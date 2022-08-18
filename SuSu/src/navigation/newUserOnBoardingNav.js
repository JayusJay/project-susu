import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PhoneNumberScreen from '../screens/new_user_onboarding/PhoneNumberScreen';

const newUserOnBoardingStack = createNativeStackNavigator();

const NewUserOnBoardingNav = () => {
    return (
        <newUserOnBoardingStack.Navigator screenOptions={{ headerShown: false }}>
            <newUserOnBoardingStack.Screen component={PhoneNumberScreen} name="PhoneNumberScreen" />
        </newUserOnBoardingStack.Navigator>
    );
};
export default NewUserOnBoardingNav;
