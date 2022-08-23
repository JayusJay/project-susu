import React, { useContext } from 'react';
import { ScrollView, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AppStoreContext } from '../../services/AppStoreContext';
import ConfirmationCodeFieldComponent from '../../components/ConfirmationCodeFieldComponent';
import OTPConfirmationStyle from '../../styles/new_user_onBoarding/OTPConfirmationStyle';

const OTPConfirmationScreen = ({ navigation }) => {
    const { newUserOnBoardingStore } = useContext(AppStoreContext);
    return (
        <ScrollView style={OTPConfirmationStyle.scrollable}>
            <SafeAreaView style={OTPConfirmationStyle.container}>
                <Ionicons name="arrow-back-outline" size={30} color="#000" onPress={() => navigation.goBack()} />
                <Text style={OTPConfirmationStyle.titleText}>Verification</Text>
                <Text style={OTPConfirmationStyle.text}>
                    Enter the verification code sent to {newUserOnBoardingStore.phoneNumber}
                </Text>
                <ConfirmationCodeFieldComponent navigation={navigation} CELL_COUNT={6} type={'OTP'} />
            </SafeAreaView>
        </ScrollView>
    );
};
export default OTPConfirmationScreen;
