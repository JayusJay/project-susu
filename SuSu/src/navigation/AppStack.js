import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerStack from './DrawerStack';
import TabStack from './TabStack';

const appStack = createNativeStackNavigator();

const AppStack = () => {
    return (
        <appStack.Navigator>
            <appStack.Screen component={DrawerStack} name = "Drawer" options={{headerShown: false}}/>
            {/* <appStack.Screen component={TabStack} name = "Tab" options={{headerShown: false}}/> */}
        </appStack.Navigator>
    )
}
export default AppStack;