import React from 'react';
import { Text, SafeAreaView, View, ScrollView } from 'react-native';
import SavingsStyle from '../styles/savingsStyle';

const SavingsScreen = () => {
    return (
        <ScrollView>
            <SafeAreaView style={SavingsStyle.container}>
                <View style={SavingsStyle.header}>
                    <View style={SavingsStyle.profileView}>
                        <Text style={{ color: 'red', paddingTop: 20 }}>Savings Screen</Text>
                    </View>
                </View>
                <View style={SavingsStyle.footer}>
                    <Text>Savings Screen</Text>
                </View>
            </SafeAreaView>
        </ScrollView>
    );
};

export default SavingsScreen;
