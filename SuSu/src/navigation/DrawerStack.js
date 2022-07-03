import React from "react"
import {} from "react-native"
import {createDrawerNavigator} from "@react-navigation/drawer"
//import HomeScreen from "../screens/HomeScreen"
import ProfileScreen from "../screens/ProfileScreen"
import NotificationScreen from "../screens/NotificationScreen"
import SettingScreen from "../screens/SettingScreen"
import TabStack from "./TabStack"

const drawerStack = createDrawerNavigator()

const DrawerStack = () => {
    return (
        <drawerStack.Navigator screenOptions={{headerShown: false}}>
            <drawerStack.Screen name="Home" component={TabStack} />
            <drawerStack.Screen name="Profile" component={ProfileScreen} />
            <drawerStack.Screen name="Notification" component={NotificationScreen} />
            <drawerStack.Screen name="Settings" component={SettingScreen} />
        </drawerStack.Navigator>
    )
}
export default DrawerStack