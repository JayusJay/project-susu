import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
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
