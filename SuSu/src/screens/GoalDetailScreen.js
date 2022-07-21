import React from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CircularProgressBase } from 'react-native-circular-progress-indicator';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import GoalDetailScreenStyle from '../styles/goalDetailScreenStyle';

const GoalDetailScreen = ({ route, navigation }) => {
    const { image, name, amountSaved, totalAmount, timeLeft, value } = route.params;
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', padding: 20 }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons name="close-outline" size={30} color="#000" />
                    </TouchableOpacity>
                </View>
                <View style={GoalDetailScreenStyle.circularBaseView}>
                    <CircularProgressBase {...GoalDetailScreenStyle.CircularProgressBaseProps} value={value}>
                        <Image source={image} style={GoalDetailScreenStyle.circularImage} />
                    </CircularProgressBase>
                </View>
                <Text style={GoalDetailScreenStyle.goalNameText}>{name}</Text>
                <View style={GoalDetailScreenStyle.amountSavedView}>
                    <View style={GoalDetailScreenStyle.amountSavedView.innerView1}>
                        <Text style={GoalDetailScreenStyle.amountSavedView.innerView1.currencyText}>{'\u20B5 '}</Text>
                        <Text style={GoalDetailScreenStyle.amountSavedView.innerView1.amountSavedText}>
                            {amountSaved}
                        </Text>
                    </View>
                    <View style={GoalDetailScreenStyle.amountSavedView.innerView2}>
                        <Text style={GoalDetailScreenStyle.amountSavedView.innerView2.totalAmountText}>
                            of {'\u20B5 '}
                            {totalAmount}
                        </Text>
                    </View>
                </View>
                <Text style={GoalDetailScreenStyle.subHeaderText}>Goal</Text>
                <View style={GoalDetailScreenStyle.detailsComponentView}>
                    <Text style={GoalDetailScreenStyle.detailsComponentView.descriptionText}>Name</Text>
                    <TouchableOpacity
                        style={GoalDetailScreenStyle.detailsComponentView.touchableOpacity}
                        onPress={() => {}}
                    >
                        <Text style={GoalDetailScreenStyle.detailsComponentView.touchableOpacity.contentText}>
                            {name}
                        </Text>
                        <EvilIcons
                            name="chevron-right"
                            size={30}
                            color="#8A8A8A"
                            style={GoalDetailScreenStyle.detailsComponentView.touchableOpacity.evilIcon}
                        />
                    </TouchableOpacity>
                </View>
                <View style={GoalDetailScreenStyle.detailsComponentView}>
                    <Text style={GoalDetailScreenStyle.detailsComponentView.descriptionText}>Image</Text>
                    <TouchableOpacity
                        style={[GoalDetailScreenStyle.detailsComponentView.touchableOpacity, { paddingLeft: 20 }]}
                        onPress={() => {}}
                    >
                        <EvilIcons
                            name="chevron-right"
                            size={30}
                            color="#8A8A8A"
                            style={GoalDetailScreenStyle.detailsComponentView.touchableOpacity.evilIcon}
                        />
                    </TouchableOpacity>
                </View>
                <View style={GoalDetailScreenStyle.detailsComponentView}>
                    <Text style={GoalDetailScreenStyle.detailsComponentView.descriptionText}>Amount</Text>
                    <TouchableOpacity
                        style={GoalDetailScreenStyle.detailsComponentView.touchableOpacity}
                        onPress={() => {}}
                    >
                        <Text style={GoalDetailScreenStyle.detailsComponentView.touchableOpacity.contentText}>
                            {['\u20B5 ', amountSaved]}
                        </Text>
                        <EvilIcons
                            name="chevron-right"
                            size={30}
                            color="#8A8A8A"
                            style={GoalDetailScreenStyle.detailsComponentView.touchableOpacity.evilIcon}
                        />
                    </TouchableOpacity>
                </View>

                <Text style={GoalDetailScreenStyle.subHeaderText}>Utilities</Text>

                <View style={GoalDetailScreenStyle.detailsComponentView}>
                    <Text style={GoalDetailScreenStyle.detailsComponentView.descriptionText}>Add Funds</Text>
                    <TouchableOpacity
                        style={[GoalDetailScreenStyle.detailsComponentView.touchableOpacity, { paddingLeft: 20 }]}
                        onPress={() => {}}
                    >
                        <EvilIcons
                            name="chevron-right"
                            size={30}
                            color="#8A8A8A"
                            style={GoalDetailScreenStyle.detailsComponentView.touchableOpacity.evilIcon}
                        />
                    </TouchableOpacity>
                </View>
                <View style={GoalDetailScreenStyle.detailsComponentView}>
                    <Text style={GoalDetailScreenStyle.detailsComponentView.descriptionText}>Withdraw Funds</Text>
                    <TouchableOpacity
                        style={[GoalDetailScreenStyle.detailsComponentView.touchableOpacity, { paddingLeft: 20 }]}
                        onPress={() => {}}
                    >
                        <EvilIcons
                            name="chevron-right"
                            size={30}
                            color="#8A8A8A"
                            style={GoalDetailScreenStyle.detailsComponentView.touchableOpacity.evilIcon}
                        />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default GoalDetailScreen;
