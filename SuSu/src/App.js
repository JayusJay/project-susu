import React from 'react';
import AppNav from './navigation/AppNav';
import { AuthProvider } from './services/AuthContext';
import { AppStoreProvider } from './services/AppStoreContext';
import { StatusBar } from 'react-native';

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
