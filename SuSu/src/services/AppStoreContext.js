import React, { createContext } from 'react';
import { GoalCreationStore } from '../stores/goalCreation';
import { NewUserOnBoardingStore } from '../stores/newUserOnBoarding';

const AppStoreContext = createContext();

const goalCreationStore = new GoalCreationStore();
const newUserOnBoardingStore = new NewUserOnBoardingStore();

const AppStoreProvider = ({ children }) => {
    return (
        <AppStoreContext.Provider value={{ goalCreationStore, newUserOnBoardingStore }}>
            {children}
        </AppStoreContext.Provider>
    );
};
export { AppStoreContext, AppStoreProvider };
