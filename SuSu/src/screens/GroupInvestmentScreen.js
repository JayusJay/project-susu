import React, { useState, useContext, useEffect } from 'react';
import { Text, ScrollView, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import { observer } from 'mobx-react';
import { AppStoreContext } from '../services/AppStoreContext';
//import { AuthContext } from '../services/AuthContext';
import GroupComponent from '../components/GroupComponent';
import groupData from '../assets/groupData';
import GroupInvestmentStyle from '../styles/groupInvestmentStyle';

//let dummy = [];
const GroupInvestmentScreen = observer(({ navigation }) => {
    //const { user } = useContext(AuthContext);
    const { appStore } = useContext(AppStoreContext);
    useEffect(() => {
        appStore.getInvestmentGroups();
    }, []);
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={GroupInvestmentStyle.scrollable}>
            <SafeAreaView style={GroupInvestmentStyle.container}>
                <View style={GroupInvestmentStyle.header}>
                    <View style={GroupInvestmentStyle.profileView}>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.goBack();
                            }}
                            style={GroupInvestmentStyle.backButton}
                        >
                            <Ionicons name="arrow-back-outline" size={30} color="white" />
                        </TouchableOpacity>
                        <View style={GroupInvestmentStyle.profileView.textView}>
                            <Text style={GroupInvestmentStyle.profileView.text}>Group Investment</Text>
                        </View>
                    </View>
                </View>
                <View style={GroupInvestmentStyle.footer}>
                    <View style={GroupInvestmentStyle.createGroupView}>
                        <View style={GroupInvestmentStyle.createGroupView.textView}>
                            <Text style={GroupInvestmentStyle.createGroupView.textView.text1}>Create a new group</Text>
                            <Text style={GroupInvestmentStyle.createGroupView.textView.text2}>Join more groups</Text>
                        </View>

                        <View style={GroupInvestmentStyle.createGroupView.buttonView}>
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate('Group Creation');
                                }}
                            >
                                <Feather name="plus" size={25} color="#177AD5" style={{ padding: 12 }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Text style={GroupInvestmentStyle.yourGroupsText}>Your Groups</Text>
                    <View style={GroupInvestmentStyle.groupView}>
                        <GroupComponent navigation={navigation} data={appStore.investmentGroups} />
                    </View>
                </View>
            </SafeAreaView>
        </ScrollView>
    );
});

export default GroupInvestmentScreen;
