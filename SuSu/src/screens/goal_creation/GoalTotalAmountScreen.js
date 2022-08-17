import React, { useState, useContext } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Snackbar from 'react-native-snackbar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { observer } from 'mobx-react';
import { AppStoreContext } from '../../services/AppStoreContext';
import GoalTotalAmountStyles from '../../styles/goal_creation/goalTotalAmountStyle';

const GoalTotalAmountScreen = observer(({ navigation }) => {
    const { goalCreationStore } = useContext(AppStoreContext);
    //Do not destructure goalCreationStore here, it will cause state issues with mobx
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

    const handleNext = () => {
        if (amount.isValid && amount.value != 0) {
            goalCreationStore.setGoalCreationData('totalAmount', +amount.value);
            //+value is used to convert string to number
            navigation.navigate('GoalType');
        } else {
            Snackbar.show({
                text: 'Please enter a valid amount',
                duration: Snackbar.LENGTH_LONG,
                backgroundColor: 'red',
            });
        }
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <SafeAreaView style={GoalTotalAmountStyles.container}>
                <View style={GoalTotalAmountStyles.header}>
                    <View style={GoalTotalAmountStyles.headerContentView}>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.goBack();
                            }}
                            style={GoalTotalAmountStyles.backButton}
                        >
                            <Ionicons name="arrow-back-outline" size={30} color="white" />
                        </TouchableOpacity>
                    </View>
                    <View style={GoalTotalAmountStyles.headerContentView.textView}>
                        <View style={GoalTotalAmountStyles.headerContentView.textView.innerView}>
                            <Text style={GoalTotalAmountStyles.headerContentView.textView.innerView.stepsText}>
                                Step 2/5
                            </Text>
                            <Text style={GoalTotalAmountStyles.headerContentView.text}>Goal Amount</Text>
                        </View>
                    </View>
                </View>
                <View style={GoalTotalAmountStyles.footer}>
                    <View style={GoalTotalAmountStyles.headingView}>
                        <Text style={GoalTotalAmountStyles.headingView.headingText}>
                            How much do you need to save in total towards {goalCreationStore.title}?
                        </Text>
                    </View>
                    <View style={GoalTotalAmountStyles.inputView}>
                        <TextInput
                            style={GoalTotalAmountStyles.inputView.inputStyle}
                            placeholder="Enter Amount"
                            placeholderTextColor="#ccc"
                            value={amount.value}
                            keyboardType="numeric"
                            onChangeText={(num) => handleAmountChange(num)}
                        />
                    </View>
                    <TouchableOpacity
                        onPress={() => {
                            handleNext();
                        }}
                        style={GoalTotalAmountStyles.buttonTouchable}
                    >
                        <Text style={GoalTotalAmountStyles.buttonTouchable.text}>Next</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </ScrollView>
    );
});

export default GoalTotalAmountScreen;
