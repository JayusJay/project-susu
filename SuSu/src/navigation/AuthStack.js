import React, {useContext} from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ResetPasswordScreen from "../screens/ResetPasswordScreen";
import LandingScreen from '../screens/LandingScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import LoadingScreen from '../screens/LoadingScreen';
import { AuthContext } from "../components/AuthContext";
const stack = createNativeStackNavigator();


const AuthStack = () => {
  const {screenError} = useContext(AuthContext);
  let firstRoute
  screenError.registerError? firstRoute = "Register" : 
  screenError.loginError? firstRoute = "Login" : 
  screenError.resetError? firstRoute = "ResetPassword" : firstRoute = "Landing";

  return (
    <stack.Navigator initialRouteName={firstRoute}>
        <stack.Screen component={LandingScreen} name = "Landing" options={{headerShown: false}}/>
        <stack.Screen component={LoginScreen} name = "Login" options={{headerShown: false}}/>
        <stack.Screen component={RegisterScreen} name = "Register" options={{headerShown: false}}/>
        <stack.Screen component={LoadingScreen} name = "Loading" options={{headerShown: false}}/>
        <stack.Screen component={ResetPasswordScreen} name = "ResetPassword" options={{headerShown: false}}/>
    </stack.Navigator>
  )
}

export default AuthStack