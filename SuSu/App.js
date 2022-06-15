import React, {useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import AuthStack from './src/navigation/AuthStack'
import AppStack from './src/navigation/AppStack';
import LoadingScreen from './src/screens/LoadingScreen';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AuthProvider } from './src/components/AuthContext';

const stack = createNativeStackNavigator()


const App = () => {


  return (
    <AuthProvider>
      <NavigationContainer>
        {/* {loading ? <LoadingScreen /> : user ? <AppStack /> : <AuthStack />} */}
        <AuthStack/>
      </NavigationContainer>
    </AuthProvider>
  );
};


export default App;
