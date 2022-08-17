import React, { useState, useEffect, useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
import OnBoardingScreen from '../screens/OnBoardingScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import LoadingScreen from '../screens/LoadingScreen';
import { AuthContext } from '../services/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const authStack = createNativeStackNavigator();

const AuthStack = () => {
    const [isFirstLauch, setIsFirstLaunch] = useState(null);
    useEffect(() => {
        AsyncStorage.getItem('firstLaunch').then((res) => {
            if (res == null) {
                AsyncStorage.setItem('firstLaunch', 'true');
                setIsFirstLaunch(true);
            } else setIsFirstLaunch(false);
        });
    }, []);

    const { screenError } = useContext(AuthContext);
    if (isFirstLauch == null) return <LoadingScreen />;

    let firstRoute;
    screenError.registerError
        ? (firstRoute = 'Register')
        : screenError.loginError
        ? (firstRoute = 'Login')
        : screenError.resetError
        ? (firstRoute = 'ResetPassword')
        : (firstRoute = isFirstLauch ? 'OnBoarding' : 'Login');

    return (
        <authStack.Navigator initialRouteName={firstRoute}>
            <authStack.Screen component={OnBoardingScreen} name="OnBoarding" options={{ headerShown: false }} />
            <authStack.Screen component={LoginScreen} name="Login" options={{ headerShown: false }} />
            <authStack.Screen component={RegisterScreen} name="Register" options={{ headerShown: false }} />
            <authStack.Screen component={LoadingScreen} name="Loading" options={{ headerShown: false }} />
            <authStack.Screen component={ResetPasswordScreen} name="ResetPassword" options={{ headerShown: false }} />
        </authStack.Navigator>
    );
};

export default AuthStack;
