import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext } from '../components/AuthContext';
import AuthStack from '../navigation/AuthStack';
import AppStack from '../navigation/AppStack';
import LoadingScreen from '../screens/LoadingScreen';

const AppNav = () => {
    const { loading, user } = useContext(AuthContext);
    if (loading) return <LoadingScreen />;

    return <NavigationContainer>{user ? <AppStack /> : <AuthStack />}</NavigationContainer>;
};
export default AppNav;
