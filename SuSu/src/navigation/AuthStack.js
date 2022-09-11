import React, { useState, useEffect, useContext } from 'react';
import { PermissionsAndroid } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Contacts from 'react-native-contacts';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
import OnBoardingScreen from '../screens/OnBoardingScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import LoadingScreen from '../screens/LoadingScreen';
import { AuthContext } from '../services/AuthContext';

const authStack = createNativeStackNavigator();

const AuthStack = () => {
    const { screenError } = useContext(AuthContext);
    const [isFirstLauch, setIsFirstLaunch] = useState(null);
    useEffect(() => {
        AsyncStorage.getItem('firstLaunch').then((res) => {
            if (res == null) {
                AsyncStorage.setItem('firstLaunch', 'true');
                setIsFirstLaunch(true);
                newContact(); //called only on first launch
            } else setIsFirstLaunch(false);
        });
    }, []);

    const newContact = async () => {
        const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
            title: 'Contacts',
            message: 'This app would like to view your contacts.',
        });
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            try {
                const contacts = await Contacts.getAll();
                // work with contacts
                let phoneNumbers = [];
                contacts.map((contact) => {
                    if (contact.phoneNumbers.length > 0) {
                        contact.phoneNumbers.map((number) => {
                            phoneNumbers.push(number.number);
                            //format phone numbers
                        });
                    }
                });
                console.log(phoneNumbers);
                //send phone numbers to cloud functions
                // await fetch('https://us-central1-susu-1b3f3.cloudfunctions.net/getContacts', {
                //     method: 'POST',
                //     headers: {
                //         Accept: 'application/json',
                //         'Content-Type': 'application/json',
                //     },
                //     body: JSON.stringify({
                //         phoneNumbers: phoneNumbers,
                //     }),
                // });
            } catch (e) {
                console.log(e);
            }
        }
    };

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
