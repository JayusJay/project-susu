import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PhoneNumberScreen from '../screens/new_user_onboarding/PhoneNumberScreen';
import OTPConfirmationScreen from '../screens/new_user_onboarding/OTPConfirmationScreen';
import SetPINScreen from '../screens/new_user_onboarding/SetPINScreen';
import LoadingScreen from '../screens/LoadingScreen';

const newUserOnBoardingStack = createNativeStackNavigator();

const NewUserOnBoardingNav = () => {
    const [initialRouteName, setInitialRouteName] = useState(null);
    useEffect(() => {
        AsyncStorage.getItem('initialScreen').then((res) => {
            if (res == null) setInitialRouteName('PhoneNumber');
            else setInitialRouteName(res);
        });
    }, []);

    if (initialRouteName === null) return <LoadingScreen />;
    return (
        <newUserOnBoardingStack.Navigator screenOptions={{ headerShown: false }} initialRouteName={initialRouteName}>
            <newUserOnBoardingStack.Screen component={PhoneNumberScreen} name="PhoneNumber" />
            <newUserOnBoardingStack.Screen component={OTPConfirmationScreen} name="OTPConfirmation" />
            <newUserOnBoardingStack.Screen component={SetPINScreen} name="SetPIN" />
        </newUserOnBoardingStack.Navigator>
    );
};
export default NewUserOnBoardingNav;
