import { makeObservable, observable, computed, action } from 'mobx';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

class NewUserOnBoardingStore {
    onBoarded = null;
    phoneNumber = '';
    isOTPSent = false;
    confirmationCode = null;
    userInputCode = null;
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
            console.log(error);
        }
    };
    sendFirebaseOTP = async () => {
        try {
            const confirmation = await auth().verifyPhoneNumber(this.phoneNumber);
            this.setStateValue('confirmationCode', confirmation);
            console.log('confirmation', confirmation);
        } catch {
            console.log('error');
        }
        return true;
    };
    verifyOTPCode = async () => {
        try {
            const credential = auth.PhoneAuthProvider.credential(
                this.confirmationCode.verificationId,
                this.userInputCode
            );
            await auth().currentUser.linkWithCredential(credential);
        } catch (error) {
            console.log(error);
            // if (error.code == 'auth/invalid-verification-code') {
            //     console.log('Invalid code.');
            // } else {
            //     console.log('Account linking error');
            // }
        }
    };
}
export { NewUserOnBoardingStore };
