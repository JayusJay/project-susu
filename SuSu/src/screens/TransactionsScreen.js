import React from 'react';
import { Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import transactionData from '../assets/transactionData';
import TransactionStyle from '../styles/transactionStyle';

const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
};
const transactionMessage = (
    transactionID,
    transactionType,
    transactionStatus,
    amount,
    timeStamp,
    accountFrom,
    accountTo
) => {
    switch (transactionType) {
        case 'Deposit':
            if (transactionStatus === 'Successful')
                return (
                    'You have successfully deposited ' +
                    amount +
                    ' from ' +
                    accountFrom +
                    ' at ' +
                    formatDate(timeStamp) +
                    '. Transaction ID: ' +
                    transactionID
                );
            else if (transactionStatus === 'Pending')
                return (
                    'Your deposit of ' +
                    amount +
                    ' from ' +
                    accountFrom +
                    ' is pending awaiting confirmation. Time: ' +
                    formatDate(timeStamp)
                );
            else return 'Your deposit of ' + amount + ' from ' + accountFrom + ' failed at ' + formatDate(timeStamp);
        case 'Withdrawal':
            if (transactionStatus === 'Successful')
                return (
                    'You have successfully withdrawn ' +
                    amount +
                    ' to your ' +
                    accountTo +
                    '. Time ' +
                    formatDate(timeStamp) +
                    '. Transaction ID: ' +
                    transactionID
                );
            else if (transactionStatus === 'Pending')
                return (
                    'Your withdrawal of ' +
                    amount +
                    ' to your ' +
                    accountTo +
                    ' is pending awaiting confirmation. ' +
                    'Time: ' +
                    formatDate(timeStamp)
                );
            else
                return (
                    'Your withdrawal of ' + amount + ' to your ' + accountTo + ' failed. Time: ' + formatDate(timeStamp)
                );
    }
};
const TransactionScreen = ({ navigation }) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={TransactionStyle.scrollable}>
            <SafeAreaView style={TransactionStyle.container}>
                <View style={TransactionStyle.header}>
                    <View style={TransactionStyle.profileView}>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.openDrawer();
                            }}
                            style={TransactionStyle.backButton}
                        >
                            <Ionicons name="options" size={30} color="white" />
                        </TouchableOpacity>
                        <View style={TransactionStyle.profileView.textView}>
                            <Text style={TransactionStyle.profileView.text}>Transactions</Text>
                        </View>
                    </View>
                </View>
                <View style={TransactionStyle.footer}>
                    <Text style={TransactionStyle.transactionText}>Transaction History</Text>
                    <View style={TransactionStyle.transactionView}>
                        {transactionData.map((item, index) => {
                            return (
                                <View key={index}>
                                    <View style={TransactionStyle.detailsComponentView}>
                                        <View style={TransactionStyle.detailsComponentView.innerView}>
                                            <View style={TransactionStyle.detailsComponentView.innerView.innerView}>
                                                <Image
                                                    source={item.image}
                                                    style={
                                                        TransactionStyle.detailsComponentView.innerView.innerView.image
                                                    }
                                                />
                                            </View>
                                            <View style={TransactionStyle.detailsComponentView.innerView.secondView}>
                                                <Text
                                                    style={
                                                        TransactionStyle.detailsComponentView.innerView.secondView.text1
                                                    }
                                                >
                                                    Transfer to {item.accountTo}
                                                </Text>
                                                <Text
                                                    style={
                                                        TransactionStyle.detailsComponentView.innerView.secondView.text2
                                                    }
                                                >
                                                    {transactionMessage(
                                                        item.transactionID,
                                                        item.transactionType,
                                                        item.transactionStatus,
                                                        item.amount,
                                                        item.timeStamp,
                                                        item.accountFrom,
                                                        item.accountTo
                                                    )}
                                                </Text>
                                            </View>
                                        </View>
                                        <View style={TransactionStyle.detailsComponentView.secondView}>
                                            <View style={TransactionStyle.detailsComponentView.secondView.innerView}>
                                                <Text
                                                    style={
                                                        TransactionStyle.detailsComponentView.secondView.innerView.text1
                                                    }
                                                >
                                                    {item.amount}
                                                </Text>
                                                <Text
                                                    style={[
                                                        item.transactionStatus === 'Successful'
                                                            ? { color: 'green' }
                                                            : item.transactionStatus === 'Pending'
                                                            ? { color: '#FFC466' }
                                                            : { color: 'red' },
                                                        TransactionStyle.detailsComponentView.secondView.innerView
                                                            .text2,
                                                    ]}
                                                >
                                                    {item.transactionStatus}
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            );
                        })}
                    </View>
                </View>
            </SafeAreaView>
        </ScrollView>
    );
};

export default TransactionScreen;
