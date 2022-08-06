import { makeObservable, observable, computed, action } from 'mobx';

class GoalCreationStore {
    image = '';
    title = '';
    description = '';
    totalAmount = 0;
    savingAmount = 0;
    startDate = '';
    endDate = '';
    frequency = '';
    epoch = '';
    goalType = '';
    goalCategory = '';
    goalStatus = '';
    constructor() {
        makeObservable(this, {
            image: observable,
            title: observable,
            description: observable,
            totalAmount: observable,
            savingAmount: observable,
            startDate: observable,
            endDate: observable,
            frequency: observable,
            epoch: observable,
            goalType: observable,
            goalCategory: observable,
            goalStatus: observable,
            setGoalCreationData: action,
            goalCreationData: computed,
        });
    }

    setGoalCreationData(key, value) {
        this[key] = value;
    }
    get goalCreationData() {
        return {
            image: this.image,
            title: this.title,
            description: this.description,
            totalAmount: this.totalAmount,
            savingAmount: this.savingAmount,
            startDate: this.startDate,
            endDate: this.endDate,
            frequency: this.frequency,
            epoch: this.epoch,
            goalType: this.goalType,
            goalCategory: this.goalCategory,
            goalStatus: this.goalStatus,
        };
    }
}

export { GoalCreationStore };
