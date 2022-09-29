import React from 'react';
import { StatusBar } from 'react-native';
import AppNav from './navigation/AppNav';
import { AuthProvider } from './services/AuthContext';
import { AppStoreProvider } from './services/AppStoreContext';

const App = () => {
    return (
        <AuthProvider>
            <AppStoreProvider>
                <StatusBar translucent backgroundColor="#7966FF" />
                <AppNav />
            </AppStoreProvider>
        </AuthProvider>
    );
};

export default App;
