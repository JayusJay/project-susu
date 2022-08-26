import { makeObservable, observable, action } from 'mobx';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
//import storage from '@react-native-firebase/storage';

class AppStore {
    user = null;
    investmentGroups = [];
    constructor() {
        makeObservable(this, {
            user: observable,
            investmentGroups: observable,
            setStateValue: action,
        });
        this.user = auth().currentUser;
    }
    setStateValue(state, value) {
        this[state] = value;
    }
    getUserData = async () => {
        try {
            const userData = await firestore().collection('users').doc(this.user.uid).get();
            console.log('userData: ', userData.data());
            return userData.data();
        } catch (error) {
            console.log('getUsers error: ', error);
        }
    };
    getInvestmentGroups = async () => {
        try {
            const groups = await firestore()
                .collection('investmentGroups')
                //.where('members', 'array-contains', this.user.uid)
                .where('members', 'array-contains', {
                    imageUri: this.user.imageUri,
                    name: this.user.firstName,
                    phoneNumber: this.user.phoneNumber,
                    seedMoney: '0',
                    uid: this.user.uid,
                })
                .get();
            groups.docs.map((doc) => {
                this.setStateValue('investmentGroups', [...this.investmentGroups, doc.data()]);
            });
            //return this.investmentGroups;
        } catch (error) {
            console.log('getGroups error: ', error);
        }
    };
}
export default AppStore;
