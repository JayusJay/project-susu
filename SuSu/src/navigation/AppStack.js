import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';

const stack = createNativeStackNavigator();

const AppStack = () => {
    return (
        <stack.Navigator>
        <stack.Screen component={HomeScreen} name = "Home" options={{headerShown: false}}/>
        </stack.Navigator>
    )
}
export default AppStack;