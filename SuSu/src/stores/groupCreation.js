import { makeObservable, observable, action } from 'mobx';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

class GroupCreation {
    name = '';
    seedMoney = '0';
    imageUri = '';
    frequency = null;
    constructor() {
        makeObservable(this, {
            name: observable,
            seedMoney: observable,
            imageUri: observable,
            frequency: observable,
            setStateValue: action,
        });
    }
    setStateValue(state, value) {
        this[state] = value;
    }
    uploadImage = async () => {
        try {
            console.log('local imageUri: ', this.imageUri);
            const reference = `groupImages/${this.imageUri.split('/').pop()}`;
            const imageRef = storage().ref(reference); //pick the last part of the image uri
            await imageRef.putFile(this.imageUri);
            const url = await imageRef.getDownloadURL();
            console.log('cloud bucket url: ', url);
            return url;
        } catch (error) {
            console.log('uploadImage error: ', error);
            return error;
        }
    };
    //fetch data of person joining group to add to members array in group doc
    setGroupMemberData = async () => {
        let groupMembers = [];
        let memberIDs = [];

        let user = await firestore().collection('users').doc(auth().currentUser.uid).get();
        let userData = user.data();
        groupMembers.push({
            phoneNumber: userData.phoneNumber,
            name: userData.firstName,
            imageUri: userData.imageUri,
            seedMoney: '0',
        });
        memberIDs.push(auth().currentUser.uid);
        return { groupMembers, memberIDs };
    };
    createGroup = async () => {
        try {
            const cloudStorageURL = await this.uploadImage();
            const { groupMembers, memberIDs } = await this.setGroupMemberData();
            const group = await firestore().collection('investmentGroups').add({
                name: this.name,
                seedMoneyPerMember: this.seedMoney,
                imageUri: cloudStorageURL,
                members: groupMembers,
                memberIDs: memberIDs,
                frequency: this.frequency,
                createdBy: auth().currentUser.uid,
                createdAt: firestore.FieldValue.serverTimestamp(),
                updatedAt: firestore.FieldValue.serverTimestamp(),
            });
            await firestore()
                .collection('users')
                .doc(auth().currentUser.uid)
                .update({
                    groups: firestore.FieldValue.arrayUnion(group.id),
                });
            return true;
        } catch (error) {
            console.log('createGroup error: ', error);
            return false;
        }
    };
}
export default GroupCreation;
