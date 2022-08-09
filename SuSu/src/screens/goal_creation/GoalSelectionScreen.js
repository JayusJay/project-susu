import React, { useContext } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AppStoreContext } from '../../components/AppStoreContext';
import GoalSelectionStyles from '../../styles/goal_creation/goalSelectionStyle';

const GoalSelectionScreen = ({ navigation }) => {
    const { goalCreationStore } = useContext(AppStoreContext);
    //Do not destructure goalCreationStore here, it will cause state issues with mobx
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <SafeAreaView style={GoalSelectionStyles.container}>
                <View style={GoalSelectionStyles.header}>
                    <View style={GoalSelectionStyles.headerContentView}>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.goBack();
                            }}
                            style={GoalSelectionStyles.backButton}
                        >
                            <Ionicons name="arrow-back-outline" size={30} color="white" />
                        </TouchableOpacity>
                    </View>
                    <View style={GoalSelectionStyles.headerContentView.textView}>
                        <View style={GoalSelectionStyles.headerContentView.textView.innerView}>
                            <Text style={GoalSelectionStyles.headerContentView.textView.innerView.stepsText}>
                                Step 1/5
                            </Text>
                            <Text style={GoalSelectionStyles.headerContentView.text}>Make your Goal</Text>
                        </View>
                    </View>
                </View>
                <View style={GoalSelectionStyles.footer}>
                    <Text style={GoalSelectionStyles.footer.text}>Select a goal</Text>

                    <View style={GoalSelectionStyles.goalView}>
                        <View style={GoalSelectionStyles.goalView.innerViews}>
                            <TouchableOpacity
                                onPress={() => {
                                    goalCreationStore.setGoalCreationData(
                                        'image',
                                        '../../assets/images/goal_creation/home.png'
                                    );
                                    goalCreationStore.setGoalCreationData('name', 'Home');
                                    navigation.navigate('GoalTotalAmount');
                                }}
                            >
                                <Image
                                    source={require('../../assets/images/goal_creation/home.png')}
                                    style={GoalSelectionStyles.goalView.image}
                                />
                                <Text style={GoalSelectionStyles.goalView.text}>Home</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={GoalSelectionStyles.goalView.innerViews}>
                            <TouchableOpacity
                                onPress={() => {
                                    goalCreationStore.setGoalCreationData(
                                        'image',
                                        '../../assets/images/goal_creation/phone.jpg'
                                    );
                                    goalCreationStore.setGoalCreationData('name', 'Phone');
                                    navigation.navigate('GoalTotalAmount');
                                }}
                            >
                                <Image
                                    source={require('../../assets/images/goal_creation/phone.jpg')}
                                    style={GoalSelectionStyles.goalView.image}
                                />
                                <Text style={GoalSelectionStyles.goalView.text}>Phone</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={GoalSelectionStyles.goalView.innerViews}>
                            <TouchableOpacity
                                onPress={() => {
                                    goalCreationStore.setGoalCreationData(
                                        'image',
                                        '../../assets/images/goal_creation/vacation.png'
                                    );
                                    goalCreationStore.setGoalCreationData('name', 'Vacation');
                                    navigation.navigate('GoalTotalAmount');
                                }}
                            >
                                <Image
                                    source={require('../../assets/images/goal_creation/vacation.png')}
                                    style={GoalSelectionStyles.goalView.image}
                                />
                                <Text style={GoalSelectionStyles.goalView.text}>Vacation</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={GoalSelectionStyles.goalView.innerViews}>
                            <TouchableOpacity
                                onPress={() => {
                                    goalCreationStore.setGoalCreationData(
                                        'image',
                                        '../../assets/images/goal_creation/car.png'
                                    );
                                    goalCreationStore.setGoalCreationData('name', 'Car');
                                    navigation.navigate('GoalTotalAmount');
                                }}
                            >
                                <Image
                                    source={require('../../assets/images/goal_creation/car.png')}
                                    style={GoalSelectionStyles.goalView.image}
                                />
                                <Text style={GoalSelectionStyles.goalView.text}>Car</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={GoalSelectionStyles.goalView.innerViews}>
                            <TouchableOpacity
                                onPress={() => {
                                    goalCreationStore.setGoalCreationData(
                                        'image',
                                        '../../assets/images/goal_creation/motorcycle.jpg'
                                    );
                                    goalCreationStore.setGoalCreationData('name', 'Motorcycle');
                                    navigation.navigate('GoalTotalAmount');
                                }}
                            >
                                <Image
                                    source={require('../../assets/images/goal_creation/motorcycle.jpg')}
                                    style={GoalSelectionStyles.goalView.image}
                                />
                                <Text style={[GoalSelectionStyles.goalView.text, { paddingBottom: -10 }]}>Motor</Text>
                                <Text style={GoalSelectionStyles.goalView.text}>cycle</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={GoalSelectionStyles.goalView.innerViews}>
                            <TouchableOpacity
                                onPress={() => {
                                    goalCreationStore.setGoalCreationData(
                                        'image',
                                        '../../assets/images/goal_creation/piggybank.jpg'
                                    );
                                    goalCreationStore.setGoalCreationData('name', 'Emergency Fund');
                                    navigation.navigate('GoalTotalAmount');
                                }}
                            >
                                <Image
                                    source={require('../../assets/images/goal_creation/piggybank.jpg')}
                                    style={GoalSelectionStyles.goalView.image}
                                />
                                <Text style={[GoalSelectionStyles.goalView.text, { paddingBottom: -10 }]}>
                                    Emergency
                                </Text>
                                <Text style={GoalSelectionStyles.goalView.text}>Fund</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity
                        style={GoalSelectionStyles.addGoalView}
                        onPress={() => {
                            navigation.navigate('CustomGoalCreation');
                        }}
                    >
                        <Text style={GoalSelectionStyles.addGoalView.text}>Create my own goal</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </ScrollView>
    );
};

export default GoalSelectionScreen;
