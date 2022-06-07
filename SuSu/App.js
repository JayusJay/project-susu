import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import LandingScreen from './src/screens/LandingScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const stack = createNativeStackNavigator()

const App = () => {

  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen component={LandingScreen} name = "Landing" options={{headerShown: false}}/>
        <stack.Screen component={LoginScreen} name = "Login" options={{headerShown: false}}/>
        <stack.Screen component={RegisterScreen} name = "Register" options={{headerShown: false}}/>
      </stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
