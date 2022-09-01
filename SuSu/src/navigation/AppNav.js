import React, { useContext, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext } from '../services/AuthContext';
import { AppStoreContext } from '../services/AppStoreContext';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import NewUserOnBoardingNav from './NewUserOnBoardingNav';
import LoadingScreen from '../screens/LoadingScreen';
import config from '../utils/linkingConfig';
const linking = {
    prefixes: [
        'susu://',
        /* your linking prefixes */
        /*adb shell am start -W -a android.intent.action.VIEW -d "susu://drawer/home/savings" com.susu*/
    ],
    config,
};
const AppNav = observer(() => {
    const { newUserOnBoardingStore } = useContext(AppStoreContext);
    const { loading, user } = useContext(AuthContext);

    useEffect(() => {
        if (user) {
            newUserOnBoardingStore.checkOnBoarded();
        }
    }, [user]);

    if (loading || newUserOnBoardingStore.onBoarded === null) return <LoadingScreen />;
    return (
        <NavigationContainer linking={linking}>
            {user ? newUserOnBoardingStore.onBoarded ? <AppStack /> : <NewUserOnBoardingNav /> : <AuthStack />}
        </NavigationContainer>
    );
});
export default AppNav;
