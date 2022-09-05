import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import { AppStoreProvider } from '../services/AppStoreContext';
import DrawerStack from './DrawerStack';
import GoalDetailScreen from '../screens/GoalDetailScreen';
import GroupInvestmentScreen from '../screens/GroupInvestmentScreen';
import GroupDetailScreen from '../screens/GroupDetailScreen';
import GroupCreationScreen from '../screens/GroupCreationScreen';
import GroupCreationFinalScreen from '../screens/GroupCreationFinalScreen';
import GoalCreationNav from './GoalCreationNav';
import JoinGroupScreen from '../screens/JoinGroupScreen';
import PaymentScreen from '../screens/PaymentScreen';
import PaymentSummaryScreen from '../screens/PaymentSummaryScreen';

const appStack = createNativeStackNavigator();

const AppStack = () => {
    return (
        <appStack.Navigator>
            <appStack.Screen component={DrawerStack} name="Drawer" options={{ headerShown: false }} />
            <appStack.Screen component={GoalDetailScreen} name="GoalDetail" options={{ headerShown: false }} />
            <appStack.Screen component={GroupDetailScreen} name="GroupDetail" options={{ headerShown: false }} />
            {/* <appStack.Screen
                component={GroupInvestmentScreen}
                name="Group Investment"
                options={{ headerShown: false }}
            /> */}
            <appStack.Screen component={GroupCreationScreen} name="GroupCreation" options={{ headerShown: false }} />
            <appStack.Screen
                component={GroupCreationFinalScreen}
                name="GroupCreationFinal"
                options={{ headerShown: false }}
            />
            <appStack.Screen component={GoalCreationNav} name="GoalCreationNav" options={{ headerShown: false }} />
            <appStack.Screen component={JoinGroupScreen} name="JoinGroup" options={{ headerShown: false }} />
            <appStack.Screen component={PaymentScreen} name="Payment" options={{ headerShown: false }} />
            <appStack.Screen component={PaymentSummaryScreen} name="PaymentSummary" options={{ headerShown: false }} />
        </appStack.Navigator>
    );
};
export default AppStack;
