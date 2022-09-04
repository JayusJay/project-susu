import { makeObservable, observable, action } from 'mobx';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

class GroupCreation {
    name = '';
    seedMoney = '0';
    imageUri = '';
    frequency = null;
    startDate = null;
    groupLink = '';
    constructor() {
        makeObservable(this, {
            name: observable,
            seedMoney: observable,
            imageUri: observable,
            frequency: observable,
            startDate: observable,
            groupLink: observable,
            setStateValue: action,
        });
    }
    setStateValue(state, value) {
        this[state] = value;
    }
    uploadImage = async () => {
        try {
            console.log('local imageUri: ', this.imageUri);
            const reference = `groupImages/${this.imageUri.split('/').pop()}`; //pick the last part of the image uri
            const imageRef = storage().ref(reference);
            await imageRef.putFile(this.imageUri);
            const url = await imageRef.getDownloadURL();
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
            uid: auth().currentUser.uid,
            phoneNumber: userData.phoneNumber,
            name: `${userData.firstName} ${userData.lastName}`,
            imageUri: userData.imageUri,
            seedMoney: '0',
            amountOwed: this.seedMoney,
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
                startDate: this.startDate,
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
            await firestore()
                .collection('investmentGroups')
                .doc(group.id)
                .update({
                    groupLink: `susu://join-group/${group.id}`,
                });
            this.setStateValue('groupLink', `susu://join-group/${group.id}`);
            return true;
        } catch (error) {
            console.log('createGroup error: ', error);
            return false;
        }
    };
    //the user must be logged in to join a group
    addGroupMember = async (groupID) => {
        try {
            const group = await firestore().collection('investmentGroups').doc(groupID).get();
            const groupData = group.data();
            if (groupData.memberIDs.includes(auth().currentUser.uid)) return false;
            const { groupMembers, memberIDs } = await this.setGroupMemberData();
            const newMembers = [...groupData.members, ...groupMembers];
            const newMemberIDs = [...groupData.memberIDs, ...memberIDs];
            await firestore().collection('investmentGroups').doc(groupID).update({
                members: newMembers,
                memberIDs: newMemberIDs,
            });
            //a3ActxF0Bwws9TVdl4wB;
            await firestore()
                .collection('users')
                .doc(auth().currentUser.uid)
                .update({
                    groups: firestore.FieldValue.arrayUnion(groupID),
                });
            //console.log('addGroupMember success');
            return true;
        } catch (error) {
            console.log('addGroupMember error: ', error);
            return false;
        }
    };
}
export default GroupCreation;
