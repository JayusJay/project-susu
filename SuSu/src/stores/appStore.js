import { makeObservable, observable, action } from 'mobx';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import messaging from '@react-native-firebase/messaging';
//import storage from '@react-native-firebase/storage';

class AppStore {
    userData = null;
    investmentGroups = [];
    personalSavings = [];
    constructor() {
        makeObservable(this, {
            userData: observable,
            investmentGroups: observable,
            personalSavings: observable,
            setStateValue: action,
            resetValues: action,
        });
    }
    setStateValue(state, value) {
        this[state] = value;
    }
    resetValues = () => {
        this.userData = null;
        this.investmentGroups = [];
    };
    saveFCMTokenToDatabase = async (token) => {
        if (auth().currentUser !== null) {
            const userId = auth().currentUser.uid;

            // Add the token to the users datastore
            await firestore()
                .collection('users')
                .doc(userId)
                .update({
                    tokens: firestore.FieldValue.arrayUnion(token),
                });
        }
    };
    appFCMToken = () => {
        messaging()
            .getToken()
            .then((token) => {
                return this.saveFCMTokenToDatabase(token);
            });
        // If using other push notification providers (ie Amazon SNS, etc)
        // you may need to get the APNs token instead for iOS:
        // if(Platform.OS == 'ios') { messaging().getAPNSToken().then(token => { return saveTokenToDatabase(token); }); }

        // Listen to whether the token changes
        return messaging().onTokenRefresh((token) => {
            this.saveFCMTokenToDatabase(token);
        });
    };
    removeFCMTokenFromDatabase = async () => {
        if (auth().currentUser !== null) {
            const userId = auth().currentUser.uid;
            const token = this.userData.tokens[0];
            // Remove the token from the users datastore
            await firestore()
                .collection('users')
                .doc(userId)
                .update({
                    tokens: firestore.FieldValue.arrayRemove(token),
                });
        }
    };
    getServerTime = () => {
        return firestore.Timestamp.now();
    };
    getUserData = async () => {
        try {
            const userData = await firestore().collection('users').doc(auth().currentUser.uid).get();
            this.setStateValue('userData', userData.data());
            //console.log('APPFCMTOKEN CALLED:', this.userData);

            return userData.data();
        } catch (error) {
            console.log('getUsers error: ', error);
        }
    };
    getInvestmentGroups = async () => {
        try {
            //if (this.investmentGroups.length > 0) this.setStateValue('investmentGroups', []);
            const userData = await this.getUserData();
            if (userData.groups === undefined) return;
            const promise = [];
            userData.groups.map(async (groupID) => {
                const groups = firestore().collection('investmentGroups').doc(groupID).get();
                promise.push(groups);
            });
            const groups = await Promise.all(promise);
            this.setStateValue('investmentGroups', groups);
        } catch (error) {
            console.log('getGroups error: ', error);
        }
        return true;
    };
    getPersonalSavings = async () => {
        try {
            const userData = await this.getUserData();
            if (userData.savingGoals === undefined) return;
            const promise = [];
            userData.savingGoals.map(async (goalID) => {
                const goals = firestore().collection('personal_savings').doc(goalID).get();
                promise.push(goals);
            });
            const goals = await Promise.all(promise);
            console.log('GOALS:', goals);
            this.setStateValue('personalSavings', goals);
        } catch (error) {
            console.log('getGoals error: ', error);
        }
        return true;
    };
}
export default AppStore;
