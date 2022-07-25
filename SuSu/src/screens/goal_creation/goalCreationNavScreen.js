import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import Screen4 from './Screen4';
import Screen5 from './Screen5';

const goalNavStack = createNativeStackNavigator();

const GoalCreationNavScreen = () => {
    return (
        <goalNavStack.Navigator screenOptions={{ headerShown: false }}>
            <goalNavStack.Screen
                component={Screen1}
                name="Screen1"
                options={{ contentStyle: { backgroundColor: '#fff' } }}
            />
            <goalNavStack.Screen
                component={Screen2}
                name="Screen2"
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
        </goalNavStack.Navigator>
    );
};
export default GoalCreationNavScreen;
