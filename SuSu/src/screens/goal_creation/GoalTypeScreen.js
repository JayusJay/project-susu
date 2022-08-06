import React, { useState, useContext } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import RadioButtonRN from 'radio-buttons-react-native';
import Snackbar from 'react-native-snackbar';
import { AppStoreContext } from '../../components/AppStoreContext';
import GoalTypeStyle from '../../styles/goal_creation/goalTypeStyles';

const data = [
    {
        label: 'Strict',
    },
    {
        label: 'Lenient',
    },
];
const strictData = [
    {
        label: 'Daily',
    },
    {
        label: 'Weekly',
    },
    {
        label: 'Monthly',
    },
];

const GoalTypeScreen = ({ navigation }) => {
    const { goalCreationStore } = useContext(AppStoreContext);

    const [selectedStyle, setSelectedStyle] = useState(null);
    const [selectedStrictPlan, setSelectedStrictPlan] = useState(null);

    const handleButton = () => {
        if (selectedStyle === 'Strict') {
            if (selectedStrictPlan === null) {
                Snackbar.show({
                    text: 'Please select a strict savings plan',
                    duration: Snackbar.LENGTH_LONG,
                    backgroundColor: 'red',
                });
            } else {
                goalCreationStore.setGoalCreationData('goalType', selectedStyle);
                goalCreationStore.setGoalCreationData('frequency', selectedStrictPlan);
                goalCreationStore.setGoalCreationData(
                    'epoch',
                    selectedStrictPlan === 'Daily' ? '1' : 'weekly' ? '7' : 'monthly' ? '30' : ''
                );
                setSelectedStyle(null);
                setSelectedStrictPlan(null);
                navigation.navigate('GoalSavingAmount');
            }
        } else if (selectedStyle === 'Lenient') {
            goalCreationStore.setGoalCreationData('goalType', selectedStyle);
            goalCreationStore.setGoalCreationData('frequency', 'sporadic');
            goalCreationStore.setGoalCreationData('epoch', 'none');
            navigation.navigate('Screen5');
        } else {
            Snackbar.show({
                text: 'Please select a savings type',
                duration: Snackbar.LENGTH_LONG,
                backgroundColor: 'red',
            });
        }
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <SafeAreaView style={GoalTypeStyle.container}>
                <View style={GoalTypeStyle.header}>
                    <View style={GoalTypeStyle.headerContentView}>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.goBack();
                            }}
                            style={GoalTypeStyle.backButton}
                        >
                            <Ionicons name="arrow-back-outline" size={30} color="white" />
                        </TouchableOpacity>
                    </View>
                    <View style={GoalTypeStyle.headerContentView.textView}>
                        <View style={GoalTypeStyle.headerContentView.textView.innerView}>
                            <Text style={GoalTypeStyle.headerContentView.textView.innerView.stepsText}>Step 3/5</Text>
                            <Text style={GoalTypeStyle.headerContentView.text}>Savings plan</Text>
                        </View>
                    </View>
                </View>
                <View style={GoalTypeStyle.footer}>
                    <View style={GoalTypeStyle.headingView}>
                        <Text style={GoalTypeStyle.headingView.headingText}>Select your saving style</Text>
                    </View>

                    <View>
                        <RadioButtonRN
                            data={data}
                            selectedBtn={(item) => {
                                setSelectedStyle(item.label);
                            }}
                            icon={<Ionicons name="rocket-outline" size={25} color="#7966FF" />}
                            animationTypes={['pulse']}
                            activeColor="#7966FF"
                            textStyle={{ fontSize: 16 }}
                        />
                    </View>
                    {selectedStyle === 'Strict' ? (
                        <View style={GoalTypeStyle.selectedStrictView}>
                            <Text style={GoalTypeStyle.selectedStrictView.innerText}> Select savings plan</Text>
                            <View>
                                <RadioButtonRN
                                    data={strictData}
                                    selectedBtn={(item) => {
                                        setSelectedStrictPlan(item.label);
                                    }}
                                    icon={<Ionicons name="rocket-outline" size={25} color="#7966FF" />}
                                    animationTypes={['pulse']}
                                    activeColor="#7966FF"
                                    textStyle={{ fontSize: 16 }}
                                />
                            </View>
                        </View>
                    ) : null}

                    <TouchableOpacity
                        onPress={() => {
                            handleButton();
                        }}
                        style={GoalTypeStyle.buttonTouchable}
                    >
                        <Text style={GoalTypeStyle.buttonTouchable.text}>Next</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </ScrollView>
    );
};

export default GoalTypeScreen;
