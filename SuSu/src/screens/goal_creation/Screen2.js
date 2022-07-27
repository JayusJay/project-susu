import React, { useState, useContext } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Snackbar from 'react-native-snackbar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { action } from 'mobx';
import { observer } from 'mobx-react';
import { AppStoreContext } from '../../components/AppStoreContext';
//import goalCreationStore from '../../stores/goalCreation';
import Screen2Styles from '../../styles/goal_creation/screen2Styles';

const Screen2 = observer(({ navigation }) => {
    const { goalCreationStore } = useContext(AppStoreContext);
    //Do not destructure goalCreationStore here, it will cause state issues with mobx
    //console.log(goalCreationStore.goalCreationData);
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
            goalCreationStore.setGoalCreationData('amount', amount.value);
            navigation.navigate('Screen3');
        } else {
            Snackbar.show({
                text: 'Please enter a valid amount',
                duration: Snackbar.LENGTH_LONG,
                backgroundColor: 'red',
            });
        }
    };

    //write a regex function to validate the amount
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <SafeAreaView style={Screen2Styles.container}>
                <View style={Screen2Styles.header}>
                    <View style={Screen2Styles.headerContentView}>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.goBack();
                            }}
                            style={Screen2Styles.backButton}
                        >
                            <Ionicons name="arrow-back-outline" size={30} color="white" />
                        </TouchableOpacity>
                    </View>
                    <View style={Screen2Styles.headerContentView.textView}>
                        <View style={Screen2Styles.headerContentView.textView.innerView}>
                            <Text style={Screen2Styles.headerContentView.textView.innerView.stepsText}>Step 2/5</Text>
                            <Text style={Screen2Styles.headerContentView.text}>Goal Amount</Text>
                        </View>
                    </View>
                </View>
                <View style={Screen2Styles.footer}>
                    <View style={{ paddingTop: 100 }}>
                        <Text style={{ alignSelf: 'center', color: '#000', fontSize: 16 }}>
                            How much would you like to save{' '}
                        </Text>
                        <Text style={{ alignSelf: 'center', color: '#000', fontSize: 16 }}>
                            for a {goalCreationStore.title}?
                        </Text>
                    </View>
                    <View
                        style={{
                            marginTop: 20,
                            alignSelf: 'center',
                            alignItems: 'center',
                            borderWidth: 1,
                            borderRadius: 40,
                            borderColor: '#ccc',
                            width: '90%',
                        }}
                    >
                        <TextInput
                            style={{ color: '#000', fontSize: 20 }}
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
                        style={{
                            padding: 20,
                            backgroundColor: '#7966FF',
                            borderRadius: 40,
                            marginTop: 30,
                        }}
                    >
                        <Text style={{ fontSize: 20, color: '#fff', alignSelf: 'center', fontWeight: '700' }}>
                            Next
                        </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </ScrollView>
    );
});

export default Screen2;
