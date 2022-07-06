import React from 'react';
import AppNav from './src/navigation/AppNav';
import { AuthProvider } from './src/components/AuthContext';
import { StatusBar } from 'react-native'



const App = () => {

  return (
    <AuthProvider>
      <StatusBar translucent backgroundColor="#7966FF" />
      <AppNav />
    </AuthProvider>
  );
};

export default App;
