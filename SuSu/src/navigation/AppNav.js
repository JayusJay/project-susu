import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext } from '../services/AuthContext';
import { AppStoreContext } from '../services/AppStoreContext';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import NewUserOnBoardingNav from './NewUserOnBoardingNav';
import LoadingScreen from '../screens/LoadingScreen';

const AppNav = observer(() => {
    const { newUserOnBoardingStore } = useContext(AppStoreContext);
    const { loading, user } = useContext(AuthContext);

    if (loading || newUserOnBoardingStore.onBoarded === null) return <LoadingScreen />;
    return (
        <NavigationContainer>
            {user ? newUserOnBoardingStore.onBoarded ? <AppStack /> : <NewUserOnBoardingNav /> : <AuthStack />}
        </NavigationContainer>
    );
});
export default AppNav;
