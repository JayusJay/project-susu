import React from 'react';
import { ScrollView, Text, View, TextInput, TouchableOpacity, useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PaymentSummaryStyle from '../styles/paymentSummaryStyle';
import { PayWithMomo } from '../core/payment_apis/mtn-momo/momo';

const PaymentSummaryScreen = () => {
    const { width } = useWindowDimensions();
    return (
        <ScrollView style={PaymentSummaryStyle.scrollable}>
            <SafeAreaView style={PaymentSummaryStyle.container}>
                <Text style={{ color: '#7966FF', fontSize: 25, alignSelf: 'center', padding: 20 }}>
                    Payment Summary
                </Text>
                <View style={{}}>
                    <Text style={{ color: '#7966FF', fontSize: 20, marginBottom: 5, fontWeight: '500' }}>Amount</Text>
                    <TextInput
                        style={PaymentSummaryStyle.textInput}
                        placeholder="Enter amount"
                        placeholderTextColor="#8A8A8A"
                        keyboardType="numeric"
                        value="4000"
                        editable={false}
                    />
                </View>
                <Text style={{ color: '#7966FF', marginTop: 20, marginBottom: 5, fontSize: 20, fontWeight: '500' }}>
                    Payment Method
                </Text>
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
                <View style={{}}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'column', alignSelf: 'center' }}>
                            <Text style={{ fontSize: 16, color: '#000' }}>MTN MobileMoney</Text>
                            <Text style={{ color: '#8A8A8A', fontSize: 12 }}>0596462013</Text>
                        </View>
                        {/* <View style={{ marginLeft: 'auto', marginBottom: 'auto', padding: 5 }}>
                            <Text style={{ color: '#7966FF', fontSize: 16 }}>Edit</Text>
                        </View> */}
                    </View>
                </View>
                <Text style={{ color: '#7966FF', marginTop: 20, marginBottom: 5, fontSize: 20, fontWeight: '600' }}>
                    Payment Date
                </Text>
                <View style={{}}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'column', alignSelf: 'center' }}>
                            <Text style={{ fontSize: 16, color: '#000' }}>Today</Text>
                            <Text style={{ color: '#8A8A8A', fontSize: 12 }}>05/09/2022</Text>
                        </View>
                    </View>
                </View>

                <Text style={{ color: '#7966FF', marginTop: 20, marginBottom: 5, fontSize: 20, fontWeight: '600' }}>
                    Purpose
                </Text>
                <View style={{}}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'column', alignSelf: 'center' }}>
                            <Text style={{ fontSize: 16, color: '#000' }}>Seed money payment for group #94930</Text>
                        </View>
                    </View>
                </View>
                <TouchableOpacity onPress={() => {PayWithMomo('a','b')}} style={{ marginTop: 70 }}>
                    <View style={{ backgroundColor: '#7966FF', borderRadius: 10, padding: 20, width: width - 40 }}>
                        <Text style={{ color: '#fff', fontSize: 16, alignSelf: 'center' }}>Pay</Text>
                    </View>
                </TouchableOpacity>
            </SafeAreaView>
        </ScrollView>
    );
};
export default PaymentSummaryScreen;
