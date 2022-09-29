import React, { useContext } from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CircularProgressBase } from 'react-native-circular-progress-indicator';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { AppStoreContext } from '../services/AppStoreContext';
import GoalDetailStyle from '../styles/goalDetailStyle';

const GoalDetailScreen = ({ route, navigation }) => {
    const { imageUri, name, amountSaved, totalAmount, timeLeft, value } = route.params;
    const { appStore } = useContext(AppStoreContext);
    const phoneNumber = appStore.userData.phoneNumber;

    return (
        <SafeAreaView style={GoalDetailStyle.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons name="close-outline" size={30} color="#000" />
                    </TouchableOpacity>
                </View>
                <View style={GoalDetailStyle.circularBaseView}>
                    <CircularProgressBase {...GoalDetailStyle.CircularProgressBaseProps} value={value}>
                        <Image source={{ uri: imageUri }} style={GoalDetailStyle.circularImage} />
                    </CircularProgressBase>
                </View>
                <Text style={GoalDetailStyle.goalNameText}>{name}</Text>
                <View style={GoalDetailStyle.amountSavedView}>
                    <View style={GoalDetailStyle.amountSavedView.innerView1}>
                        <Text style={GoalDetailStyle.amountSavedView.innerView1.currencyText}>{'\u20B5 '}</Text>
                        <Text style={GoalDetailStyle.amountSavedView.innerView1.amountSavedText}>{amountSaved}</Text>
                    </View>
                    <View style={GoalDetailStyle.amountSavedView.innerView2}>
                        <Text style={GoalDetailStyle.amountSavedView.innerView2.totalAmountText}>
                            of {['\u20B5 ', totalAmount]}
                        </Text>
                    </View>
                </View>
                <Text style={GoalDetailStyle.subHeaderText}>Goal</Text>
                <View style={GoalDetailStyle.detailsComponentView}>
                    <Text style={GoalDetailStyle.detailsComponentView.descriptionText}>Name</Text>
                    <TouchableOpacity style={GoalDetailStyle.detailsComponentView.touchableOpacity} onPress={() => {}}>
                        <Text style={GoalDetailStyle.detailsComponentView.touchableOpacity.contentText}>{name}</Text>
                        <EvilIcons
                            name="chevron-right"
                            size={30}
                            color="#8A8A8A"
                            style={GoalDetailStyle.detailsComponentView.touchableOpacity.evilIcon}
                        />
                    </TouchableOpacity>
                </View>
                <View style={GoalDetailStyle.detailsComponentView}>
                    <Text style={GoalDetailStyle.detailsComponentView.descriptionText}>Image</Text>
                    <TouchableOpacity
                        style={[GoalDetailStyle.detailsComponentView.touchableOpacity, { paddingLeft: 20 }]}
                        onPress={() => {}}
                    >
                        <EvilIcons
                            name="chevron-right"
                            size={30}
                            color="#8A8A8A"
                            style={GoalDetailStyle.detailsComponentView.touchableOpacity.evilIcon}
                        />
                    </TouchableOpacity>
                </View>
                <View style={GoalDetailStyle.detailsComponentView}>
                    <Text style={GoalDetailStyle.detailsComponentView.descriptionText}>Amount</Text>
                    <TouchableOpacity style={GoalDetailStyle.detailsComponentView.touchableOpacity} onPress={() => {}}>
                        <Text style={GoalDetailStyle.detailsComponentView.touchableOpacity.contentText}>
                            {['\u20B5 ', amountSaved]}
                        </Text>
                        <EvilIcons
                            name="chevron-right"
                            size={30}
                            color="#8A8A8A"
                            style={GoalDetailStyle.detailsComponentView.touchableOpacity.evilIcon}
                        />
                    </TouchableOpacity>
                </View>

                <Text style={GoalDetailStyle.subHeaderText}>Utilities</Text>

                <View style={GoalDetailStyle.detailsComponentView}>
                    <Text style={GoalDetailStyle.detailsComponentView.descriptionText}>Add Funds</Text>
                    <TouchableOpacity
                        style={[GoalDetailStyle.detailsComponentView.touchableOpacity, { paddingLeft: 20 }]}
                        onPress={() => {
                            navigation.navigate('Payment', { amountOwed: 0, phoneNumber });
                        }}
                    >
                        <EvilIcons
                            name="chevron-right"
                            size={30}
                            color="#8A8A8A"
                            style={GoalDetailStyle.detailsComponentView.touchableOpacity.evilIcon}
                        />
                    </TouchableOpacity>
                </View>
                <View style={GoalDetailStyle.detailsComponentView}>
                    <Text style={GoalDetailStyle.detailsComponentView.descriptionText}>Withdraw Funds</Text>
                    <TouchableOpacity
                        style={[GoalDetailStyle.detailsComponentView.touchableOpacity, { paddingLeft: 20 }]}
                        onPress={() => {}}
                    >
                        <EvilIcons
                            name="chevron-right"
                            size={30}
                            color="#8A8A8A"
                            style={GoalDetailStyle.detailsComponentView.touchableOpacity.evilIcon}
                        />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default GoalDetailScreen;
