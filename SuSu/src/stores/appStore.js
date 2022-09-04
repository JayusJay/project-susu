import { makeObservable, observable, action } from 'mobx';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
//import storage from '@react-native-firebase/storage';

class AppStore {
    userData = null;
    investmentGroups = [];
    constructor() {
        makeObservable(this, {
            userData: observable,
            investmentGroups: observable,
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
    getServerTime = () => {
        return firestore.Timestamp.now();
    };
    getUserData = async () => {
        try {
            const userData = await firestore().collection('users').doc(auth().currentUser.uid).get();
            this.setStateValue('userData', userData.data());
            return userData.data();
        } catch (error) {
            console.log('getUsers error: ', error);
        }
    };
    getInvestmentGroups = async () => {
        try {
            if (this.investmentGroups.length > 0) this.setStateValue('investmentGroups', []);
            const userData = await this.getUserData();
            if (userData.groups === undefined) return;
            userData.groups.map(async (groupID) => {
                const groups = await firestore().collection('investmentGroups').doc(groupID).get();
                this.setStateValue('investmentGroups', [...this.investmentGroups, groups.data()]);
            });
        } catch (error) {
            console.log('getGroups error: ', error);
        }
        return true;
    };
}
export default AppStore;
