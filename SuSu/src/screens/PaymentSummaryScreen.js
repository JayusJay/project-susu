import React, { useState, useContext } from 'react';
import { ScrollView, Text, View, TextInput, TouchableOpacity, useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Snackbar from 'react-native-snackbar';
import { AppStoreContext } from '../services/AppStoreContext';
import PaymentSummaryStyle from '../styles/paymentSummaryStyle';
import { PayWithMomo } from '../core/payment_apis/mtn-momo/momo';
import LoadingScreen from './LoadingScreen';

const PaymentSummaryScreen = ({ navigation, route }) => {
    const [amount, setAmount] = useState(`${route.params.amountOwed}`);
    const [loading, setLoading] = useState(false);
    const phoneNumber = route.params.phoneNumber;
    const { width } = useWindowDimensions();
    const { paymentStore } = useContext(AppStoreContext);

    const handleInput = (input) => {
        setAmount(input);
    };
    const handlePayment = async () => {
        setLoading(true);
        const paymentStatus = await PayWithMomo(amount, phoneNumber);
        setLoading(false);
        if (paymentStatus) {
            //paymentStore.updatePaymentStatus(accountTo, amount);
            Snackbar.show({
                text: 'Payment Successful',
                duration: Snackbar.LENGTH_SHORT,
                backgroundColor: '#7966FF',
            });
            navigation.popToTop();
        } else {
            Snackbar.show({
                text: 'Payment failed',
                duration: Snackbar.LENGTH_LONG,
                backgroundColor: 'red',
            });
        }
    };
    if (loading) return <LoadingScreen />;
    return (
        <ScrollView style={PaymentSummaryStyle.scrollable}>
            <SafeAreaView style={PaymentSummaryStyle.container}>
                <Text style={PaymentSummaryStyle.container.sumaryText}>Payment Summary</Text>
                <View>
                    <Text style={PaymentSummaryStyle.titleText}>Amount</Text>
                    <TextInput
                        style={PaymentSummaryStyle.textInput}
                        placeholder="Enter amount"
                        placeholderTextColor="#8A8A8A"
                        keyboardType="numeric"
                        value={amount}
                        onChangeText={(text) => {
                            handleInput(text);
                        }}
                        editable={route.params.amountOwed === 0 || route.params.amountOwed === '' ? true : false}
                    />
                </View>
                <Text style={[PaymentSummaryStyle.titleText, { marginTop: 20 }]}>Payment Method</Text>
                {/* <View style={{}}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'column', alignSelf: 'center' }}>
                            <Text style={{ fontSize: 16, fontWeight: '500', color: '#7966FF' }}>Credit Card</Text>
                            <Text style={{ color: '#8A8A8A', fontSize: 12 }}>**** **** **** 1234</Text>
                        </View>
                        <View style={{ marginLeft: 'auto', marginBottom: 'auto', padding: 5 }}>
                            <Text style={{ color: '#7966FF', fontSize: 16 }}>Edit</Text>
                        </View>
                    </View>
                </View> */}
                <View>
                    <View style={PaymentSummaryStyle.paymentView}>
                        <View>
                            <Text style={PaymentSummaryStyle.paymentView.text1}>MTN MobileMoney</Text>
                            <Text style={PaymentSummaryStyle.paymentView.text2}>{phoneNumber}</Text>
                        </View>
                        {/* <View style={{ marginLeft: 'auto', marginBottom: 'auto', padding: 5 }}>
                            <Text style={{ color: '#7966FF', fontSize: 16 }}>Edit</Text>
                        </View> */}
                    </View>
                </View>
                <Text style={[PaymentSummaryStyle.titleText, { marginTop: 20 }]}>Payment Date</Text>
                <View>
                    <View style={PaymentSummaryStyle.paymentView}>
                        <View>
                            <Text style={PaymentSummaryStyle.paymentView.text1}>Today</Text>
                            <Text style={PaymentSummaryStyle.paymentView.text2}>07/09/2022</Text>
                        </View>
                    </View>
                </View>

                <Text style={[PaymentSummaryStyle.titleText, { marginTop: 20 }]}>Purpose</Text>
                <View>
                    <View style={PaymentSummaryStyle.paymentView}>
                        <View>
                            <Text style={PaymentSummaryStyle.paymentView.text1}>
                                Seed money payment for group #94930
                            </Text>
                        </View>
                    </View>
                </View>
                <TouchableOpacity
                    onPress={() => {
                        handlePayment();
                    }}
                    style={{ marginTop: 70 }}
                >
                    <View style={[PaymentSummaryStyle.touchableView, { width: width - 40 }]}>
                        <Text style={PaymentSummaryStyle.touchableView.text}>Pay</Text>
                    </View>
                </TouchableOpacity>
            </SafeAreaView>
        </ScrollView>
    );
};
export default PaymentSummaryScreen;
