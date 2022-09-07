import { makeObservable, observable, action } from 'mobx';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { JSHash, CONSTANTS } from 'react-native-hash';

class NewUserOnBoardingStore {
    onBoarded = null;
    phoneNumber = '';
    confirmationCode = null;
    PINHash = null;
    constructor() {
        makeObservable(this, {
            onBoarded: observable,
            phoneNumber: observable,
            PINHash: observable,
            setStateValue: action,
        });
        // this.checkOnBoarded();
    }
    setStateValue(state, value) {
        this[state] = value;
    }

    checkOnBoarded = async () => {
        try {
            if (auth().currentUser === null) {
                this.setStateValue('onBoarded', false);
                return;
            }
            const user = await firestore().collection('users').doc(auth().currentUser.uid).get();
            this.setStateValue('onBoarded', user.data().userOnBoarded);
        } catch (error) {
            this.setStateValue('onBoarded', false);
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
    };
    hashPINCode = async (pin) => {
        try {
            if (this.PINHash === null) {
                try {
                    const hash = await JSHash(pin, CONSTANTS.HashAlgorithms.sha256);
                    console.log('Hash: ', hash);
                    this.setStateValue('PINHash', hash);
                    return true;
                } catch {
                    return false;
                }
            } else {
                const hash = await JSHash(pin, CONSTANTS.HashAlgorithms.sha256);
                // pin match
                if (this.PINHash === hash) {
                    firestore().collection('users').doc(auth().currentUser.uid).update({
                        PINHash: this.PINHash,
                        userOnBoarded: true,
                    });
                    this.setStateValue('onBoarded', true);
                    return true;
                } else {
                    return false;
                }
            }
        } catch (err) {
            console.log('Hash error', err);
        }
    };
}
export default NewUserOnBoardingStore;
