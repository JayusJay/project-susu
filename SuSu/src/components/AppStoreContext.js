import React, { createContext } from 'react';
import { GoalCreationStore } from '../stores/goalCreation';

const AppStoreContext = createContext();

const goalCreationStore = new GoalCreationStore();

const AppStoreProvider = ({ children }) => {
    return <AppStoreContext.Provider value={{ goalCreationStore }}>{children}</AppStoreContext.Provider>;
};
export { AppStoreContext, AppStoreProvider };
