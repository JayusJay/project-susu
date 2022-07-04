import React from "react"
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {createDrawerNavigator} from "@react-navigation/drawer"
import CustomDrawer from "../components/CustomDrawer"
import ProfileScreen from "../screens/ProfileScreen"
import GoalsScreen from "../screens/GoalsScreen"
import NotificationScreen from "../screens/NotificationScreen"
import SettingScreen from "../screens/SettingScreen"
import TabStack from "./TabStack"

const drawerStack = createDrawerNavigator()

const DrawerStack = () => {
    return (
        <drawerStack.Navigator screenOptions={{headerShown: true}} drawerContent = {props => <CustomDrawer {...props} />}>
            <drawerStack.Screen name="Home" component={TabStack} options = {{
                drawerIcon: ({color}) => (
                    <Ionicons name="home-outline" color={color} size={20} />
                )
            }} />
            <drawerStack.Screen name="Profile" component={ProfileScreen} options = {{
                drawerIcon: ({color}) => (
                    <Ionicons name="person-outline" color={color} size={20} />
                )
            }} />
            <drawerStack.Screen name="Goals" component={GoalsScreen} options = {{
                drawerIcon: ({color}) => (
                    <MaterialIcons name="celebration" color={color} size={20} />
                )
            }} />
            <drawerStack.Screen name="Notification" component={NotificationScreen} options = {{
                drawerIcon: ({color}) => (
                    <Ionicons name="notifications-outline" color={color} size={20} />
                )
            }} />
            <drawerStack.Screen name="Settings" component={SettingScreen} options = {{
                drawerIcon: ({color}) => (
                    <Ionicons name="settings-outline" color={color} size={20} />
                )
            }} />
        </drawerStack.Navigator>
    )
}
export default DrawerStack