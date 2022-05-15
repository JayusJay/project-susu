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

import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const HomeScreen = () => {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }
const stack = createNativeStackNavigator()

const App = () => {
  //const isDarkMode = useColorScheme() === 'dark';



  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen component={HomeScreen} name = "Home" options={{headerShown: false}}/>
        <stack.Screen component={LoginScreen} name = "Login" options={{headerShown: false}}/>
      </stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
