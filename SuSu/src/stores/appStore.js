import { makeObservable, observable, action } from 'mobx';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
//import storage from '@react-native-firebase/storage';

class AppStore {
    //user = null;
    investmentGroups = [];
    constructor() {
        makeObservable(this, {
            //user: observable,
            investmentGroups: observable,
            setStateValue: action,
            resetValues: action,
        });
        // this.user = auth().currentUser;
    }
    setStateValue(state, value) {
        this[state] = value;
    }
    // resetValues = () => {
    //     this.name = '';
    //     this.seedMoney = '0';
    //     this.imageUri = '';
    //     this.frequency = null;
    //     //this.user = null;
    //     this.investmentGroups = [];
    // };
    getUserData = async () => {
        try {
            const userData = await firestore().collection('users').doc(auth().currentUser.uid).get();
            console.log('userData: ', userData.data());
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
            //console.log('investmentGroups: ', this.investmentGroups);
        } catch (error) {
            console.log('getGroups error: ', error);
        }
    };
}
export default AppStore;
