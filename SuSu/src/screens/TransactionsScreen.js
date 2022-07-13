import React from 'react';
import { Text, SafeAreaView, View } from 'react-native';
import TransactionStyle from '../styles/transactionStyle';

const TransactionScreen = () => {
    return (
        <SafeAreaView style={TransactionStyle.container}>
            <View style={TransactionStyle.header}></View>
            <View style={TransactionStyle.footer}></View>
        </SafeAreaView>
    );
};

export default TransactionScreen;
