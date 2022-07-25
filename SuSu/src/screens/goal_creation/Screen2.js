import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Snackbar from 'react-native-snackbar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Screen2Styles from '../../styles/goal_creation/screen2Styles';

const Screen2 = ({ route, navigation }) => {
    const [isValidAmount, setIsValidAmount] = useState(true);
    const [amount, setAmount] = useState(0);
    const { goalCreationData } = route.params;

    function handleAmountChange(text) {
        //if (text === 0) setIsValidAmount(false);
        let reg = new RegExp(/^\d*\.?\d{0,2}$/).test(text);
        if (reg) {
            setAmount(text);
            setIsValidAmount(true);
            goalCreationData.amount = amount;
        } else setIsValidAmount(false);
    }

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
                            for a {goalCreationData.name}?
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
                            placeholder={isValidAmount ? 'Enter Amount' : 'Invalid Amount'}
                            placeholderTextColor={isValidAmount ? '#ccc' : 'red'}
                            value={amount}
                            keyboardType="numeric"
                            onChangeText={(text) => handleAmountChange(text)}
                        />
                    </View>
                    <TouchableOpacity
                        onPress={() => {
                            isValidAmount && amount != 0
                                ? navigation.navigate('Screen3', { goalCreationData })
                                : Snackbar.show({
                                      text: 'Please enter a valid amount',
                                      duration: Snackbar.LENGTH_LONG,
                                      backgroundColor: 'red',
                                  });
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
};

export default Screen2;
