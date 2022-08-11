import React from 'react';
import { Text, ScrollView, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import GroupComponent from '../components/GroupComponent';
import groupImages from '../assets/groupImages';
import GroupInvestmentStyle from '../styles/groupInvestmentStyle';

//let dummy = [];
const GroupInvestmentScreen = ({ navigation }) => {
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
                                    //navigation.navigate('Goal Creation Nav');
                                }}
                            >
                                <Feather name="plus" size={25} color="#177AD5" style={{ padding: 12 }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Text style={GroupInvestmentStyle.yourGroupsText}> Your Groups</Text>
                    <View style={GroupInvestmentStyle.groupView}>
                        <GroupComponent navigation={navigation} data={groupImages} />
                    </View>
                </View>
            </SafeAreaView>
        </ScrollView>
    );
};

export default GroupInvestmentScreen;
