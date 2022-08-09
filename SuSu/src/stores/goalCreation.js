import { makeObservable, observable, computed, action } from 'mobx';

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

export { GoalCreationStore };
