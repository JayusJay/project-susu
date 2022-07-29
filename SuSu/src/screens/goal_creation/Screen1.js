import React, { useContext } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { action } from 'mobx';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AppStoreContext } from '../../components/AppStoreContext';
import Screen1Styles from '../../styles/goal_creation/screen1Styles';

const Screen1 = ({ navigation }) => {
    const { goalCreationStore } = useContext(AppStoreContext);
    //Do not destructure goalCreationStore here, it will cause state issues with mobx
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <SafeAreaView style={Screen1Styles.container}>
                <View style={Screen1Styles.header}>
                    <View style={Screen1Styles.headerContentView}>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.goBack();
                            }}
                            style={Screen1Styles.backButton}
                        >
                            <Ionicons name="arrow-back-outline" size={30} color="white" />
                        </TouchableOpacity>
                    </View>
                    <View style={Screen1Styles.headerContentView.textView}>
                        <View style={Screen1Styles.headerContentView.textView.innerView}>
                            <Text style={Screen1Styles.headerContentView.textView.innerView.stepsText}>Step 1/5</Text>
                            <Text style={Screen1Styles.headerContentView.text}>Make your Goal</Text>
                        </View>
                    </View>
                </View>
                <View style={Screen1Styles.footer}>
                    <Text style={Screen1Styles.footer.text}>Select a goal</Text>

                    <View style={Screen1Styles.goalView}>
                        <View style={Screen1Styles.goalView.innerViews}>
                            <TouchableOpacity
                                onPress={action(() => {
                                    goalCreationStore.setGoalCreationData(
                                        'image',
                                        '../../assets/images/goal_creation/home.png'
                                    );
                                    goalCreationStore.setGoalCreationData('title', 'Home');
                                    navigation.navigate('Screen2');
                                })}
                            >
                                <Image
                                    source={require('../../assets/images/goal_creation/home.png')}
                                    style={Screen1Styles.goalView.image}
                                />
                                <Text style={Screen1Styles.goalView.text}>Home</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={Screen1Styles.goalView.innerViews}>
                            <TouchableOpacity
                                onPress={() => {
                                    goalCreationStore.setGoalCreationData(
                                        'image',
                                        '../../assets/images/goal_creation/phone.jpg'
                                    );
                                    goalCreationStore.setGoalCreationData('title', 'Phone');
                                    navigation.navigate('Screen2');
                                }}
                            >
                                <Image
                                    source={require('../../assets/images/goal_creation/phone.jpg')}
                                    style={Screen1Styles.goalView.image}
                                />
                                <Text style={Screen1Styles.goalView.text}>Phone</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={Screen1Styles.goalView.innerViews}>
                            <TouchableOpacity
                                onPress={() => {
                                    goalCreationStore.setGoalCreationData(
                                        'image',
                                        '../../assets/images/goal_creation/vacation.png'
                                    );
                                    goalCreationStore.setGoalCreationData('title', 'Vacation');
                                    navigation.navigate('Screen2');
                                }}
                            >
                                <Image
                                    source={require('../../assets/images/goal_creation/vacation.png')}
                                    style={Screen1Styles.goalView.image}
                                />
                                <Text style={Screen1Styles.goalView.text}>Vacation</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={Screen1Styles.goalView.innerViews}>
                            <TouchableOpacity
                                onPress={() => {
                                    goalCreationStore.setGoalCreationData(
                                        'image',
                                        '../../assets/images/goal_creation/car.png'
                                    );
                                    goalCreationStore.setGoalCreationData('title', 'Car');
                                    navigation.navigate('Screen2');
                                }}
                            >
                                <Image
                                    source={require('../../assets/images/goal_creation/car.png')}
                                    style={Screen1Styles.goalView.image}
                                />
                                <Text style={Screen1Styles.goalView.text}>Car</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={Screen1Styles.goalView.innerViews}>
                            <TouchableOpacity
                                onPress={() => {
                                    goalCreationStore.setGoalCreationData(
                                        'image',
                                        '../../assets/images/goal_creation/motorcycle.jpg'
                                    );
                                    goalCreationStore.setGoalCreationData('title', 'Motorcycle');
                                    navigation.navigate('Screen2');
                                }}
                            >
                                <Image
                                    source={require('../../assets/images/goal_creation/motorcycle.jpg')}
                                    style={Screen1Styles.goalView.image}
                                />
                                <Text style={[Screen1Styles.goalView.text, { paddingBottom: -10 }]}>Motor</Text>
                                <Text style={Screen1Styles.goalView.text}>cycle</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={Screen1Styles.goalView.innerViews}>
                            <TouchableOpacity
                                onPress={() => {
                                    goalCreationStore.setGoalCreationData(
                                        'image',
                                        '../../assets/images/goal_creation/piggybank.jpg'
                                    );
                                    goalCreationStore.setGoalCreationData('title', 'Emergency Fund');
                                    navigation.navigate('Screen2');
                                }}
                            >
                                <Image
                                    source={require('../../assets/images/goal_creation/piggybank.jpg')}
                                    style={Screen1Styles.goalView.image}
                                />
                                <Text style={[Screen1Styles.goalView.text, { paddingBottom: -10 }]}>Emergency</Text>
                                <Text style={Screen1Styles.goalView.text}>Fund</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('CustomGoalCreation');
                            }}
                        >
                            <View style={Screen1Styles.addGoalView}>
                                <Text style={Screen1Styles.addGoalView.text}>Create my own goal</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </ScrollView>
    );
};

export default Screen1;
