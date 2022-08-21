import { makeObservable, observable, computed, action } from 'mobx';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

class NewUserOnBoardingStore {
    onBoarded = null;
    phoneNumber = '';
    confirmationCode = null;
    constructor() {
        makeObservable(this, {
            onBoarded: observable,
            phoneNumber: observable,
            setStateValue: action,
        });
        this.checkOnBoarded();
    }
    setStateValue(state, value) {
        this[state] = value;
    }

    checkOnBoarded = async () => {
        try {
            const user = await firestore().collection('users').doc(auth().currentUser.uid).get();
            this.setStateValue('onBoarded', user.data().userOnBoarded);
        } catch (error) {
            console.log('checkOnBoarded error: ', error);
        }
    };
    sendFirebaseOTP = async (action) => {
        try {
            if (action === 'resend') {
                let storedPhoneNumber = await AsyncStorage.getItem('phoneNumber');
                this.setStateValue('phoneNumber', storedPhoneNumber);
                const confirmation = await auth().verifyPhoneNumber(this.phoneNumber);
                this.setStateValue('confirmationCode', confirmation);
                return true;
            } else {
                const confirmation = await auth().verifyPhoneNumber(this.phoneNumber);
                this.setStateValue('confirmationCode', confirmation);
                return true;
            }
        } catch (error) {
            console.log('sendFirebaseOTP error: ', error);
        }
    };
    verifyOTPCode = async (code) => {
        try {
            const credential = auth.PhoneAuthProvider.credential(this.confirmationCode.verificationId, code);
            await auth().currentUser.linkWithCredential(credential);
        } catch (error) {
            console.log('verifyOTPCode error: ', error);
            return error;
        }
        3;
    };
}
export { NewUserOnBoardingStore };
