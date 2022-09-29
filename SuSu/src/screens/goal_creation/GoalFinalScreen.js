import React, { useContext } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AppStoreContext } from '../../services/AppStoreContext';
import LoadingScreen from '../LoadingScreen';
import CelebrationSVG from '../../assets/images/goal_creation/celebrating.svg';
import goalImages from '../../assets/goalData';
import goalFinalStyle from '../../styles/goal_creation/goalFinalStyle';

const GoalFinalScreen = ({ navigation }) => {
    const { goalCreationStore, appLoading, setAppLoading } = useContext(AppStoreContext);
    const achievementTime = () => {
        let time =
            goalCreationStore.frequency === 'Daily'
                ? 'day(s)'
                : goalCreationStore.frequency === 'Weekly'
                ? 'week(s)'
                : 'month(s)';
        if (goalCreationStore.frequency === 'Sporadic') {
            return 'at anytime';
        }
        return `in approximately, ${Math.ceil(goalCreationStore.totalAmount / goalCreationStore.savingAmount)} ${time}`;
    };
    const handleButton = async () => {
        //goalCreationStore.setGoalCreationData('amountSaved', 2000);
        //goalImages.push(goalCreationStore.goalCreationData);
        setAppLoading(true);
        response = await goalCreationStore.createGoal();
        setAppLoading(false);
        if (response) {
            Snackbar.show({
                text: 'Goal created successfully',
                duration: Snackbar.LENGTH_SHORT,
                backgroundColor: '#7966FF',
            });
            navigation.navigate('Savings');
        } else
            Snackbar.show({
                text: 'An error occured, please try again',
                duration: Snackbar.LENGTH_LONG,
                backgroundColor: 'red',
            });
    };
    if (appLoading) return <LoadingScreen />;
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <SafeAreaView style={goalFinalStyle.container}>
                <View style={goalFinalStyle.header}>
                    <View style={goalFinalStyle.headerContentView}>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.goBack();
                            }}
                            style={goalFinalStyle.backButton}
                        >
                            <Ionicons name="arrow-back-outline" size={30} color="white" />
                        </TouchableOpacity>
                    </View>
                    <View style={goalFinalStyle.headerContentView.textView}>
                        <View style={goalFinalStyle.headerContentView.textView.innerView}>
                            <Text style={goalFinalStyle.headerContentView.textView.innerView.stepsText}>Step 5/5</Text>
                            <Text style={goalFinalStyle.headerContentView.text}>Done</Text>
                        </View>
                    </View>
                </View>
                <View style={goalFinalStyle.footer}>
                    <CelebrationSVG height={200} width={200} style={{ alignSelf: 'center', marginTop: 10 }} />

                    <View style={{ alignItems: 'center', marginTop: 20 }}>
                        <Text style={{ fontSize: 20, color: '#000' }}>Hurray!</Text>
                        <Text style={{ color: '#7966FF', fontSize: 16, textAlign: 'center', padding: 10 }}>
                            You will be able to achieve your goal {achievementTime()}
                        </Text>
                    </View>

                    <View>
                        {Object.values(goalCreationStore.goalCreationData).map((value, index) => (
                            <Text key={index} style={{ color: '#000' }}>
                                {value}
                            </Text>
                        ))}
                    </View>
                    <TouchableOpacity
                        onPress={() => {
                            //should navigate to payments screen rather
                            //navigation.navigate('Savings');
                            handleButton();
                        }}
                        style={{
                            padding: 20,
                            backgroundColor: '#7966FF',
                            borderRadius: 40,
                            marginTop: 30,
                        }}
                    >
                        <Text style={{ fontSize: 20, color: '#fff', alignSelf: 'center', fontWeight: '700' }}>
                            Save goal
                        </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </ScrollView>
    );
};

export default GoalFinalScreen;
