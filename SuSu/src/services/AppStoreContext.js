import React, { useState, createContext } from 'react';
import AppStore from '../stores/appStore';
import GoalCreationStore from '../stores/goalCreation';
import GroupCreation from '../stores/groupCreation';
import NewUserOnBoardingStore from '../stores/newUserOnBoarding';
import PaymentStore from '../stores/paymentStore';

const AppStoreContext = createContext();

const appStore = new AppStore();
const goalCreationStore = new GoalCreationStore();
const groupCreationStore = new GroupCreation();
const newUserOnBoardingStore = new NewUserOnBoardingStore();
const paymentStore = new PaymentStore();

const AppStoreProvider = ({ children }) => {
    const [appLoading, setAppLoading] = useState(false);
    const [timer, setTimer] = useState({
        timeLeft: null,
        targetTime: null,
        activeResend: false,
    });
    let resendTimerInterval;

    const triggerTimer = (targetTimeInSeconds = 60) => {
        setTimer({ ...timer, targetTime: targetTimeInSeconds, activeResend: false });
        const finalTime = Date.now() + targetTimeInSeconds * 1000;
        resendTimerInterval = setInterval(() => {
            calculateTimeLeft(finalTime);
        }, 1000);
        const calculateTimeLeft = (finalTime) => {
            const difference = finalTime - Date.now();
            if (difference > 0) {
                setTimer({ ...timer, timeLeft: Math.floor(difference / 1000), activeResend: false });
            } else {
                setTimer({ ...timer, timeLeft: null, activeResend: true });
                clearInterval(resendTimerInterval);
            }
        };
    };
    return (
        <AppStoreContext.Provider
            value={{
                appStore,
                goalCreationStore,
                groupCreationStore,
                newUserOnBoardingStore,
                paymentStore,
                appLoading,
                setAppLoading,
                timer,
                resendTimerInterval,
                triggerTimer,
            }}
        >
            {children}
        </AppStoreContext.Provider>
    );
};
export { AppStoreContext, AppStoreProvider };
