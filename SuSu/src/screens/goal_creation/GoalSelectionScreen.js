import React, { useEffect, useContext } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { observer } from 'mobx-react';
import LoadingScreen from '../LoadingScreen';
import { AppStoreContext } from '../../services/AppStoreContext';
import GoalSelectionStyles from '../../styles/goal_creation/goalSelectionStyle';

const GoalSelectionScreen = observer(({ navigation }) => {
    const { goalCreationStore } = useContext(AppStoreContext);
    useEffect(() => {
        goalCreationStore.fetchDefaultGoalImages();
    }, []);

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
                        {goalCreationStore.defaultGoalImagesURLs ? (
                            <>
                                <View style={GoalSelectionStyles.goalView.innerViews}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            goalCreationStore.setGoalCreationData(
                                                'image',
                                                goalCreationStore.defaultGoalImagesURLs.home
                                            );
                                            goalCreationStore.setGoalCreationData('name', 'Home');
                                            navigation.navigate('GoalTotalAmount');
                                        }}
                                    >
                                        <Image
                                            source={{ uri: goalCreationStore.defaultGoalImagesURLs.home }}
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
                                                goalCreationStore.defaultGoalImagesURLs.phone
                                            );
                                            goalCreationStore.setGoalCreationData('name', 'Phone');
                                            navigation.navigate('GoalTotalAmount');
                                        }}
                                    >
                                        <Image
                                            source={{ uri: goalCreationStore.defaultGoalImagesURLs.phone }}
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
                                                goalCreationStore.defaultGoalImagesURLs.vacation
                                            );
                                            goalCreationStore.setGoalCreationData('name', 'Vacation');
                                            navigation.navigate('GoalTotalAmount');
                                        }}
                                    >
                                        <Image
                                            source={{ uri: goalCreationStore.defaultGoalImagesURLs.vacation }}
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
                                                goalCreationStore.defaultGoalImagesURLs.car
                                            );
                                            goalCreationStore.setGoalCreationData('name', 'Car');
                                            navigation.navigate('GoalTotalAmount');
                                        }}
                                    >
                                        <Image
                                            source={{ uri: goalCreationStore.defaultGoalImagesURLs.car }}
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
                                                goalCreationStore.defaultGoalImagesURLs.motorcycle
                                            );
                                            goalCreationStore.setGoalCreationData('name', 'Motorcycle');
                                            navigation.navigate('GoalTotalAmount');
                                        }}
                                    >
                                        <Image
                                            source={{ uri: goalCreationStore.defaultGoalImagesURLs.motorcycle }}
                                            style={GoalSelectionStyles.goalView.image}
                                        />
                                        <Text style={[GoalSelectionStyles.goalView.text, { paddingBottom: -10 }]}>
                                            Motor
                                        </Text>
                                        <Text style={GoalSelectionStyles.goalView.text}>cycle</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={GoalSelectionStyles.goalView.innerViews}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            goalCreationStore.setGoalCreationData(
                                                'image',
                                                goalCreationStore.defaultGoalImagesURLs.piggybank
                                            );
                                            goalCreationStore.setGoalCreationData('name', 'Emergency Fund');
                                            navigation.navigate('GoalTotalAmount');
                                        }}
                                    >
                                        <Image
                                            source={{ uri: goalCreationStore.defaultGoalImagesURLs.piggybank }}
                                            style={GoalSelectionStyles.goalView.image}
                                        />
                                        <Text style={[GoalSelectionStyles.goalView.text, { paddingBottom: -10 }]}>
                                            Emergency
                                        </Text>
                                        <Text style={GoalSelectionStyles.goalView.text}>Fund</Text>
                                    </TouchableOpacity>
                                </View>
                            </>
                        ) : (
                            <LoadingScreen />
                        )}
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
});

export default GoalSelectionScreen;
