import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext } from '../services/AuthContext';
import { AppStoreContext } from '../services/AppStoreContext';
import AuthStack from '../navigation/AuthStack';
import AppStack from '../navigation/AppStack';
import NewUserOnBoardingNav from './newUserOnBoardingNav';
import LoadingScreen from '../screens/LoadingScreen';

const AppNav = observer(() => {
    const { newUserOnBoardingStore } = useContext(AppStoreContext);
    console.log('newUserOnBoardingStore', newUserOnBoardingStore.onBoarded);
    const { loading, user } = useContext(AuthContext);
    if (loading) return <LoadingScreen />;

    return (
        <NavigationContainer>
            {user ? newUserOnBoardingStore.onBoarded ? <AppStack /> : <NewUserOnBoardingNav /> : <AuthStack />}
            {/* {user ? <AppStack /> : <AuthStack />} */}
        </NavigationContainer>
    );
});
export default AppNav;
