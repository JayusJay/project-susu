import { makeObservable, observable, computed, action } from 'mobx';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

class NewUserOnBoardingStore {
    onBoarded = null;
    constructor() {
        makeObservable(this, {
            onBoarded: observable,
            setOnBoardedValue: action,
        });
        this.checkOnBoarded();
    }
    checkOnBoarded = async () => {
        try {
            const user = await firestore().collection('users').doc(auth().currentUser.uid).get();
            this.setOnBoardedValue(user.data().userOnBoarded);
        } catch (error) {
            console.log(error);
        }
    };
    setOnBoardedValue(value) {
        this.onBoarded = value;
    }
}
export { NewUserOnBoardingStore };
