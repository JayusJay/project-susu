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
    // if(loading){
    //     return (
    //     <View style = {{flex: 1, justifyContent: "center", alignItems: "center"}}>
    //         <ActivityIndicator size="large" color="#0000ff" style = {{backgroundColor: "#fff"}}/>
    //     </View>
    //     )
    // }

    return (
        <NavigationContainer>
            {user ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
    )
}
export default AppNav;