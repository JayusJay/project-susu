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
                    <Text style={{ color: '#000', alignSelf: 'center', fontSize: 20, marginTop: 10 }}>
                        Transaction History
                    </Text>
                    <View style={TransactionStyle.transactionView}>
                        {transactionData.map((item, index) => {
                            return (
                                <TouchableOpacity
                                    key={index}
                                    onPress={() => {
                                        //navigation.navigate('Transaction Details', item);
                                    }}
                                >
                                    <View style={TransactionStyle.detailsComponentView}>
                                        <View style={{ flexDirection: 'row', width: '70%' }}>
                                            <View style={TransactionStyle.detailsComponentView.innerView}>
                                                <Image
                                                    source={item.image}
                                                    style={TransactionStyle.detailsComponentView.innerView.image}
                                                />
                                            </View>
                                            <View style={{ paddingLeft: 10 }}>
                                                <Text style={{ color: '#000', fontWeight: '600' }}>
                                                    Transfer to {item.accountTo}
                                                </Text>
                                                <Text
                                                    style={{
                                                        color: '#000',
                                                        //textAlign: 'left',
                                                    }}
                                                >
                                                    You have successfully {item.transactionType} from {item.accountFrom}{' '}
                                                    to {item.accountTo} at {formatDate(item.timeStamp)}
                                                </Text>
                                            </View>
                                        </View>
                                        <View>
                                            <Text style={{ color: '#000', fontWeight: '600', alignSelf: 'center' }}>
                                                {item.amount}
                                            </Text>
                                            <Text
                                                style={[
                                                    item.status === 'Successful'
                                                        ? { color: 'green' }
                                                        : item.status === 'Pending'
                                                        ? { color: '#FFC466' }
                                                        : { color: 'red' },
                                                    { fontWeight: '500', alignSelf: 'center' },
                                                ]}
                                            >
                                                {item.status}
                                            </Text>
                                        </View>
                                        {/* <Text style={{ color: '#000' }}>{item.timeStamp}</Text> */}
                                        {/* <Text style={{ color: '#000' }}>{item.description}</Text>
                                        <Text style={{ color: '#000' }}>{item.amount}</Text> */}
                                    </View>
                                </TouchableOpacity>
                            );
                        })}
                    </View>
                </View>
            </SafeAreaView>
        </ScrollView>
    );
};

export default TransactionScreen;
