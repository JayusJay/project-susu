import React, { useState, useContext } from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AppStoreContext } from '../../services/AppStoreContext';
import OTPConfirmationStyle from '../../styles/new_user_onBoarding/OTPConfirmationStyle';

const OTPConfirmationScreen = ({ navigation }) => {
    const { newUserOnBoardingStore } = useContext(AppStoreContext);
    const [OTP, setOTP] = useState();
    const handleOnChange = (res) => {
        setOTP(res);
    };
    return (
        <ScrollView>
            <SafeAreaView style={OTPConfirmationStyle.container}>
                <Ionicons name="arrow-back-outline" size={30} color="#000" /*onPress={() => navigation.goBack()}*/ />
                <Text style={OTPConfirmationStyle.titleText}>Verification</Text>
                <Text style={OTPConfirmationStyle.text}>
                    Enter the verification code sent to {newUserOnBoardingStore.phoneNumber}
                </Text>
                <TouchableOpacity onPress={() => {}} style={OTPConfirmationStyle.buttonTouchable}>
                    <View style={OTPConfirmationStyle.buttonTouchable.innerView}>
                        <Text style={OTPConfirmationStyle.buttonTouchable.innerView.text}>Continue</Text>
                    </View>
                </TouchableOpacity>
            </SafeAreaView>
        </ScrollView>
    );
};
export default OTPConfirmationScreen;
