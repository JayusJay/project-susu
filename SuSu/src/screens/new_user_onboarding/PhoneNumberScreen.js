import React, { useState, useContext } from 'react';
import { View, Text, Image, TextInput, ScrollView, useWindowDimensions, TouchableOpacity, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Snackbar from 'react-native-snackbar';
import PhoneNumberStyle from '../../styles/new_user_onBoarding/phoneNumberStyle';

const PhoneNumberScreen = () => {
    const { width } = useWindowDimensions();
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleButton = () => {
        let phoneNum = phoneNumber.replace(/\D/g, '');
        if (phoneNum.length >= 9) {
            if (phoneNum.length == 9) {
                if (phoneNum.startsWith('0')) {
                    Snackbar.show({
                        text: 'Please enter a valid phone number',
                        duration: Snackbar.LENGTH_LONG,
                        backgroundColor: 'red',
                    });
                    return;
                }
                phoneNum = `0${phoneNum}`;
            }

            //set state
        } else {
            Snackbar.show({
                text: 'Please enter a valid phone number',
                duration: Snackbar.LENGTH_LONG,
                backgroundColor: 'red',
            });
        }
        console.log('Phone number', phoneNum);
    };
    const validatePhoneNumber = (number) => {
        const formatedNumber = formatPhoneNumber(number);
        setPhoneNumber(formatedNumber);
    };
    const formatPhoneNumber = (number) => {
        number = number.replace(/[^\d]/g, '');
        const numberLength = number.length;

        if (numberLength < 4) return number;
        if (numberLength < 7) {
            return `(${number.slice(0, 3)}) ${number.slice(3)}`;
        }
        if (numberLength == 10) {
            return `(${number.slice(0, 1)})${number.slice(1, 3)} ${number.slice(3, 6)} ${number.slice(6)}`;
        }
        return `(${number.slice(0, 3)}) ${number.slice(3, 6)}-${number.slice(6, 9)}`;
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={PhoneNumberStyle.scrollable}>
            <SafeAreaView style={PhoneNumberStyle.container}>
                <Text style={PhoneNumberStyle.topText}>Hold up, we need a few more details to continue...</Text>
                <Text style={PhoneNumberStyle.titleText}>Mobile Number</Text>
                <Text style={PhoneNumberStyle.text}>
                    Please enter your registered MTN MobileMoney number to continue.
                </Text>
                <View style={PhoneNumberStyle.mainView}>
                    <View style={[PhoneNumberStyle.mainView.innerViews, PhoneNumberStyle.mainView.flagView]}>
                        <Image
                            source={require('../../assets/images/GhanaFlag.png')}
                            style={{ height: 18, width: 20 }}
                        />
                        <Text style={PhoneNumberStyle.mainView.flagView.text}>+233</Text>
                    </View>
                    <View
                        style={[
                            PhoneNumberStyle.mainView.innerViews,
                            PhoneNumberStyle.mainView.numberInputView,
                            { width: width - 119 },
                        ]}
                    >
                        <TextInput
                            style={PhoneNumberStyle.mainView.numberInputView.textInput}
                            placeholder="Phone Number"
                            placeholderTextColor="#8a8a8a"
                            keyboardType="number-pad"
                            value={phoneNumber}
                            onChangeText={(number) => {
                                validatePhoneNumber(number);
                            }}
                        />
                    </View>
                </View>
                <TouchableOpacity
                    onPress={() => {
                        handleButton();
                    }}
                    style={PhoneNumberStyle.buttonTouchable}
                >
                    <View style={PhoneNumberStyle.buttonTouchable.innerView}>
                        <Text style={PhoneNumberStyle.buttonTouchable.innerView.text}>Send code</Text>
                    </View>
                </TouchableOpacity>
                <Text style={[PhoneNumberStyle.text, { marginTop: 10 }]}>
                    By clicking continue you agree to our{' '}
                    <Text style={PhoneNumberStyle.urlText} onPress={() => Linking.openURL('https://google.com')}>
                        Privacy policy
                    </Text>{' '}
                    and{' '}
                    <Text style={PhoneNumberStyle.urlText} onPress={() => Linking.openURL('https://bing.com')}>
                        Terms and Conditions.
                    </Text>
                </Text>
            </SafeAreaView>
        </ScrollView>
    );
};
export default PhoneNumberScreen;
//add box shadow style around view
