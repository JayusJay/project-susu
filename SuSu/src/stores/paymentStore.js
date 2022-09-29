import { makeObservable, observable, action } from 'mobx';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import messaging from '@react-native-firebase/messaging';

class PaymentStore {
    constructor() {
        makeObservable(this, {
            setStateValue: action,
        });
    }
    setStateValue(state, value) {
        this[state] = value;
    }
    setPaymentInfo = async (paymentInfo) => {};

    updatePaymentStatus = async (accountTo, amount) => {
        const userId = auth().currentUser.uid;
        const userRef = firestore().collection('users').doc(userId);
        const userSnapshot = await userRef.get();
        const userData = userSnapshot.data();
        const accountFrom = userData.account;
        const transactionRef = firestore().collection('transactions').doc();
        const transactionId = transactionRef.id;
        const transactionData = {
            accountFrom,
            accountTo,
            amount,
            transactionId,
            userId,
        };
        await transactionRef.set(transactionData);
        await userRef.update({
            account: accountFrom - amount,
        });
        return transactionData;
    };
}
export default PaymentStore;
