import React, {useContext} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContext } from "../components/AuthContext";
//import LoadingScreen from "../screens/LoadingScreen";
import AuthStack from '../navigation/AuthStack';
import AppStack from '../navigation/AppStack';
import ActivityIndicatorScreen from "../screens/ActivityIndicatorScreen";

const AppNav = () => {
    const {loading, user} = useContext(AuthContext);
    if(loading) return <ActivityIndicatorScreen />

    return (
        <NavigationContainer>
            {user ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
    )
}
export default AppNav;