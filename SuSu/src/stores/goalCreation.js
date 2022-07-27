import { makeObservable, observable, computed, action } from 'mobx';

class GoalCreationStore {
    image = '';
    title = '';
    description = '';
    amount = '';
    startDate = '';
    endDate = '';
    frequency = '';
    goalType = '';
    goalCategory = '';
    goalStatus = '';
    constructor() {
        makeObservable(this, {
            image: observable,
            title: observable,
            description: observable,
            startDate: observable,
            endDate: observable,
            frequency: observable,
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
            amount: this.amount,
            startDate: this.startDate,
            endDate: this.endDate,
            frequency: this.frequency,
            goalType: this.goalType,
            goalCategory: this.goalCategory,
            goalStatus: this.goalStatus,
        };
    }
}

export { GoalCreationStore };
