import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Screen1Styles from '../../styles/goal_creation/screen1Styles';

const Screen1 = ({ navigation }) => {
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
                        <View style={{ marginTop: -15 }}>
                            <Text style={{ color: '#fff', alignSelf: 'center' }}>Step 1/5</Text>
                            <Text style={Screen1Styles.headerContentView.text}>Select a Goal</Text>
                        </View>
                    </View>
                </View>
                <View style={Screen1Styles.footer}>
                    <View style={Screen1Styles.goalView}>
                        <TouchableOpacity onPress={() => {}}>
                            <Image
                                source={require('../../assets/images/goal_creation/home.png')}
                                style={Screen1Styles.goalView.image}
                            />
                            <Text style={Screen1Styles.goalView.text}>Home</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {}}>
                            <Image
                                source={require('../../assets/images/goal_creation/phone.jpg')}
                                style={Screen1Styles.goalView.image}
                            />
                            <Text style={Screen1Styles.goalView.text}>Phone</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {}}>
                            <Image
                                source={require('../../assets/images/goal_creation/vacation.png')}
                                style={Screen1Styles.goalView.image}
                            />
                            <Text style={Screen1Styles.goalView.text}>Vacation</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {}}>
                            <Image
                                source={require('../../assets/images/goal_creation/car.png')}
                                style={Screen1Styles.goalView.image}
                            />
                            <Text style={Screen1Styles.goalView.text}>Car</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {}}>
                            <Image
                                source={require('../../assets/images/goal_creation/motorcycle.jpg')}
                                style={Screen1Styles.goalView.image}
                            />
                            <Text style={Screen1Styles.goalView.text}>Motorcycle</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {}}>
                            <Image
                                source={require('../../assets/images/goal_creation/piggybank.jpg')}
                                style={Screen1Styles.goalView.image}
                            />
                            <Text style={Screen1Styles.goalView.text}>Emergency</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={Screen1Styles.addGoalView}>
                        <TouchableOpacity onPress={() => {}}>
                            <Text style={Screen1Styles.addGoalView.text}>Create my own goal</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Screen 2');
                        }}
                        style={{
                            padding: 20,
                            backgroundColor: '#7966FF',
                            borderRadius: 40,
                            marginTop: 30,
                        }}
                    >
                        <Text style={{ fontSize: 20, color: '#fff', alignSelf: 'center', fontWeight: '700' }}>
                            Next
                        </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </ScrollView>
    );
};

export default Screen1;
