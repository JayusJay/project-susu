import React from 'react';
import { View, ScrollView, TouchableOpacity, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DefaultScreenLayoutStyle from '../styles/defaultScreenLayoutStyle';

const ScreenDefaultLayout = ({ children }) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={DefaultScreenLayoutStyle.scrollable}>
            <SafeAreaView style={DefaultScreenLayoutStyle.container}>
                <View style={DefaultScreenLayoutStyle.header}>
                    <View style={DefaultScreenLayoutStyle.profileView}>
                        <TouchableOpacity
                            onPress={() => {
                                //navigation.openDrawer();
                            }}
                            style={DefaultScreenLayoutStyle.backButton}
                        >
                            <Ionicons name="options-outline" size={30} color="white" />
                        </TouchableOpacity>
                        <View style={DefaultScreenLayoutStyle.profileView.textView}>
                            <Text style={DefaultScreenLayoutStyle.profileView.text}>Transactions</Text>
                        </View>
                    </View>
                </View>
                <View style={DefaultScreenLayoutStyle.footer}></View>
            </SafeAreaView>
        </ScrollView>
    );
};

export default ScreenDefaultLayout;
