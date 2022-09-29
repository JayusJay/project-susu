import { makeObservable, observable, computed, action } from 'mobx';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

class GoalCreationStore {
    imageUri = '';
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
    defaultGoalImagesURLs = null;
    constructor() {
        makeObservable(this, {
            imageUri: observable,
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
            const defaultGoalImagesRef = await storage().ref('goalCreationImages');
            const defaultGoalImagesSnapshot = await defaultGoalImagesRef.listAll();
            const defaultGoalImagesURLs = await Promise.all(
                defaultGoalImagesSnapshot.items.map(async (imageRef) => {
                    let url = await imageRef.getDownloadURL();
                    return url;
                })
            );
            const formattedURLs = this.formatImageURLs(defaultGoalImagesURLs);
            this.setGoalCreationData('defaultGoalImagesURLs', formattedURLs);
        } catch (error) {
            console.log('fetchDefaultGoalImages error: ', error);
            return error;
        }
    };
    formatImageURLs = (URLsArray) => {
        let formattedURLs = {};
        for (let i = 0; i < URLsArray.length; i++) {
            let url = URLsArray[i];
            let name = URLsArray[i].substr(URLsArray[i].lastIndexOf('F') + 1);
            name = name.slice(0, name.lastIndexOf('.'));
            formattedURLs[name] = url;
        }
        return formattedURLs;
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
            return true;
        } catch (error) {
            console.log('createGoal error: ', error);
            return error;
        }
    };
    get goalCreationData() {
        return {
            imageUri: this.imageUri,
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
