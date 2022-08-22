import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SetPINStyle from '../../styles/new_user_onBoarding/setPINStyle';
import ConfirmationCodeFieldComponent from '../../components/ConfirmationCodeFieldComponent';

const SetPINScreen = ({ navigation }) => {
    return (
        <ScrollView style={SetPINStyle.scrollable}>
            <SafeAreaView style={SetPINStyle.container}>
                <Text style={SetPINStyle.titleText}>Set your PIN</Text>
                <Text style={SetPINStyle.text}>You will use this PIN to authorize payments.</Text>
                <ConfirmationCodeFieldComponent navigation={navigation} CELL_COUNT={4} type={'PIN'} />
            </SafeAreaView>
        </ScrollView>
    );
};
export default SetPINScreen;
