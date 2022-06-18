import React, {useContext} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContext } from "../components/AuthContext";
import LoadingScreen from "../screens/LoadingScreen";
import AuthStack from '../navigation/AuthStack';
import AppStack from '../navigation/AppStack';
import { ActivityIndicator, View } from "react-native";

const AppNav = () => {
    const {loading, user} = useContext(AuthContext);
    if(loading) return <LoadingScreen />

    return (
        <NavigationContainer>
            {user ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
    )
}
export default AppNav;