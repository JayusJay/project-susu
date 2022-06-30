import React, {useState, useEffect, useContext} from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ResetPasswordScreen from "../screens/ResetPasswordScreen";
import OnBoardingScreen from '../screens/OnBoardingScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import LoadingScreen from '../screens/LoadingScreen';
import { AuthContext } from '../components/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';


const stack = createNativeStackNavigator();

const AuthStack = () => {
  const [isFirstLauch, setIsFirstLaunch] = useState(null);
  useEffect(() => {
    AsyncStorage.getItem('firstLaunch').then(res => {
      if (res == null) {
        AsyncStorage.setItem('firstLaunch', 'true');
        setIsFirstLaunch(true);
      }
      else setIsFirstLaunch(false);
    });
  }, []);

  const {screenError} = useContext(AuthContext);
  if(isFirstLauch == null) return <LoadingScreen />

  let firstRoute
  screenError.registerError? firstRoute = "Register" : 
  screenError.loginError? firstRoute = "Login" : 
  screenError.resetError? firstRoute = "ResetPassword" : 
  firstRoute = isFirstLauch? "OnBoarding" : "Login";

  return (
    <stack.Navigator initialRouteName={firstRoute}>
        <stack.Screen component={OnBoardingScreen} name = "OnBoarding" options={{headerShown: false}}/>
        <stack.Screen component={LoginScreen} name = "Login" options={{headerShown: false}}/>
        <stack.Screen component={RegisterScreen} name = "Register" options={{headerShown: false}}/>
        <stack.Screen component={LoadingScreen} name = "Loading" options={{headerShown: false}}/>
        <stack.Screen component={ResetPasswordScreen} name = "ResetPassword" options={{headerShown: false}}/>
    </stack.Navigator>
  )
}

export default AuthStack