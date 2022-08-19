import React, { useState, createContext } from 'react';
import { GoalCreationStore } from '../stores/goalCreation';
import { NewUserOnBoardingStore } from '../stores/newUserOnBoarding';

const AppStoreContext = createContext();

const goalCreationStore = new GoalCreationStore();
const newUserOnBoardingStore = new NewUserOnBoardingStore();

const AppStoreProvider = ({ children }) => {
    const [appLoading, setAppLoading] = useState(false);
    return (
        <AppStoreContext.Provider value={{ goalCreationStore, newUserOnBoardingStore, appLoading, setAppLoading }}>
            {children}
        </AppStoreContext.Provider>
    );
};
export { AppStoreContext, AppStoreProvider };
