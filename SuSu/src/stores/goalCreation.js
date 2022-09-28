import { makeObservable, observable, computed, action } from 'mobx';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

class GoalCreationStore {
    image = '';
    name = '';
    description = '';
    totalAmount = 0;
    savingAmount = 0;
    amountSaved = 0;
    startDate = '';
    endDate = '';
    timeLeft = '';
    frequency = '';
    epoch = '';
    goalType = '';
    goalCategory = '';
    goalStatus = '';
    value = 0;
    defaultGoalImagesURLs = [];
    constructor() {
        makeObservable(this, {
            image: observable,
            name: observable,
            description: observable,
            totalAmount: observable,
            savingAmount: observable,
            amountSaved: observable,
            startDate: observable,
            endDate: observable,
            timeLeft: observable,
            frequency: observable,
            epoch: observable,
            goalType: observable,
            goalCategory: observable,
            goalStatus: observable,
            defaultGoalImagesURLs: observable,
            value: computed,
            setGoalCreationData: action,
            goalCreationData: computed,
        });
    }

    setGoalCreationData(key, value) {
        this[key] = value;
    }

    get value() {
        return (this.amountSaved / this.totalAmount) * 100;
    }
    fetchDefaultGoalImages = async () => {
        try {
            //const defaultGoalImages = [];
            const defaultGoalImagesRef = await storage().ref('goalCreationImages');
            const defaultGoalImagesSnapshot = await defaultGoalImagesRef.listAll();
            const defaultGoalImagesURLs = await Promise.all(
                defaultGoalImagesSnapshot.items.map(async (imageRef) => {
                    let url = await imageRef.getDownloadURL();
                    return url;
                })
            );
            this.formatImageURLs(defaultGoalImagesURLs);
            this.setGoalCreationData('defaultGoalImagesURLs', defaultGoalImagesURLs);
            console.log('defaultGoalImagesURLs: ', defaultGoalImagesURLs);
            //console.log('defaultGoalImages: ', defaultGoalImages);
            return defaultGoalImagesURLs;
        } catch (error) {
            console.log('fetchDefaultGoalImages error: ', error);
            return error;
        }
    };
    formatImageURLs = (nameArray) => {
        for (let i = 0; i < nameArray.length; i++) {
            let url = nameArray[i];
            let name = name[i].substr(nameArray[i].lastIndexOf('F') + 1);
            name = name[i].slice(0, nameArray[i].lastIndexOf('.'));
            console.log('name', name);
            name[i] = name[i].replace(url, { name: url });
        }
        return nameArray;
    };

    uploadImage = async () => {
        try {
            console.log('local imageUri: ', this.image);
            const reference = `personal_savings/${this.image.split('/').pop()}`; //pick the last part of the image uri
            const imageRef = storage().ref(reference);
            await imageRef.putFile(this.image);
            const url = await imageRef.getDownloadURL();
            return url;
        } catch (error) {
            console.log('goal uploadImage error: ', error);
            return error;
        }
    };
    createGoal = async () => {
        try {
            const goalData = this.goalCreationData;
            const goal = await firestore()
                .collection('personal_savings')
                .add({ ...goalData, createdAt: firestore.FieldValue.serverTimestamp() });
            await firestore()
                .collection('users')
                .doc(auth().currentUser.uid)
                .update({
                    savingGoals: firestore.FieldValue.arrayUnion(goal.id),
                });
        } catch (error) {
            console.log('createGoal error: ', error);
            return error;
        }
    };
    get goalCreationData() {
        return {
            image: this.image,
            name: this.name,
            description: this.description,
            totalAmount: this.totalAmount,
            savingAmount: this.savingAmount,
            amountSaved: this.amountSaved,
            startDate: this.startDate,
            endDate: this.endDate,
            timeLeft: this.timeLeft,
            frequency: this.frequency,
            epoch: this.epoch,
            goalType: this.goalType,
            goalCategory: this.goalCategory,
            goalStatus: this.goalStatus,
            value: this.value,
        };
    }
}

export default GoalCreationStore;
