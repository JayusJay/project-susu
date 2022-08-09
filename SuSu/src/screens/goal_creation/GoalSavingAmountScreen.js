import React, { useState, useContext } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { observer } from 'mobx-react';
import Snackbar from 'react-native-snackbar';
import { AppStoreContext } from '../../components/AppStoreContext';
import GoalSavingAmountStyle from '../../styles/goal_creation/goalSavingAmountStyle';

const GoalSavingAmountScreen = observer(({ navigation }) => {
    const { goalCreationStore } = useContext(AppStoreContext);
    const [amount, setAmount] = useState({
        isValid: false,
        value: '',
    });

    const handleAmountChange = (num) => {
        let reg = new RegExp(/^\d*\.?\d{0,2}$/).test(num);
        if (reg) {
            setAmount({ isValid: true, value: num });
        } else setAmount({ isValid: false, value: num });
    };

    const handleButton = () => {
        if (amount.isValid && amount.value != 0 && +amount.value < goalCreationStore.totalAmount) {
            goalCreationStore.setGoalCreationData('savingAmount', +amount.value);
            //+value is used to convert string to number
            navigation.navigate('GoalFinal');
        } else {
            Snackbar.show({
                text: 'Enter an amount less than your total savings goal.',
                duration: Snackbar.LENGTH_LONG,
                backgroundColor: 'red',
            });
        }
    };
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <SafeAreaView style={GoalSavingAmountStyle.container}>
                <View style={GoalSavingAmountStyle.header}>
                    <View style={GoalSavingAmountStyle.headerContentView}>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.goBack();
                            }}
                            style={GoalSavingAmountStyle.backButton}
                        >
                            <Ionicons name="arrow-back-outline" size={30} color="white" />
                        </TouchableOpacity>
                    </View>
                    <View style={GoalSavingAmountStyle.headerContentView.textView}>
                        <View style={GoalSavingAmountStyle.headerContentView.textView.innerView}>
                            <Text style={GoalSavingAmountStyle.headerContentView.textView.innerView.stepsText}>
                                Step 4/5
                            </Text>
                            <Text style={GoalSavingAmountStyle.headerContentView.text}>Select Amount</Text>
                        </View>
                    </View>
                </View>
                <View style={GoalSavingAmountStyle.footer}>
                    <View style={GoalSavingAmountStyle.headingView}>
                        <Text style={GoalSavingAmountStyle.headingView.innerText}>
                            How much can you save {goalCreationStore.frequency.toUpperCase()} towards this goal ?
                        </Text>
                    </View>
                    <View style={GoalSavingAmountStyle.inputView}>
                        <TextInput
                            style={GoalSavingAmountStyle.inputView.inputStyle}
                            placeholder="Enter Amount"
                            placeholderTextColor="#ccc"
                            value={amount.value}
                            keyboardType="numeric"
                            onChangeText={(num) => handleAmountChange(num)}
                        />
                    </View>
                    <TouchableOpacity
                        onPress={() => {
                            handleButton();
                        }}
                        style={GoalSavingAmountStyle.buttonTouchable}
                    >
                        <Text style={GoalSavingAmountStyle.buttonTouchable.innerText}>Next</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </ScrollView>
    );
});

export default GoalSavingAmountScreen;
