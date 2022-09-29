import React, { useEffect, useContext } from 'react';
import { Text, View, ScrollView, useWindowDimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import { BarChart } from 'react-native-gifted-charts';
import { observer } from 'mobx-react';
import { AppStoreContext } from '../services/AppStoreContext';
import GoalComponent from '../components/GoalComponent';
import savingBarData from '../assets/savingBarData';
import goalData from '../assets/goalData';
import SavingsStyle from '../styles/savingsStyle';

const SavingsScreen = observer(({ navigation }) => {
    const { width } = useWindowDimensions();
    const { appStore } = useContext(AppStoreContext);
    useEffect(() => {
        appStore.getPersonalSavings();
    }, []);
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <SafeAreaView style={SavingsStyle.container}>
                <View style={SavingsStyle.header}>
                    <View style={SavingsStyle.profileView}>
                        <View style={SavingsStyle.backButtonView}>
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.goBack();
                                }}
                                style={SavingsStyle.backButton}
                            >
                                <Ionicons name="arrow-back-outline" size={30} color="white" />
                            </TouchableOpacity>
                        </View>
                        <View style={SavingsStyle.profileView.textView}>
                            <Text style={SavingsStyle.profileView.text}>Savings</Text>
                        </View>
                    </View>
                </View>
                <View style={SavingsStyle.footer}>
                    <View style={SavingsStyle.createGoalView}>
                        <View style={SavingsStyle.createGoalView.textView}>
                            <Text style={SavingsStyle.createGoalView.textView.text1}>Create a new goal</Text>
                            <Text style={SavingsStyle.createGoalView.textView.text2}>Reach more goals</Text>
                        </View>

                        <View style={SavingsStyle.createGoalView.buttonView}>
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate('GoalCreationNav');
                                }}
                            >
                                <Feather name="plus" size={25} color="#177AD5" style={{ padding: 12 }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Text style={SavingsStyle.yourGoalsText}> Your Goals</Text>
                    <View style={SavingsStyle.goalView}>
                        <GoalComponent navigation={navigation} data={appStore.personalSavings} />
                    </View>
                    <View style={SavingsStyle.gridContainerView}>
                        <Text style={SavingsStyle.gridContainerView.text}>Overview</Text>

                        <View style={SavingsStyle.gridContainerView.rowView}>
                            <View style={[SavingsStyle.overview, { marginBottom: 0.02 * width /* 2% of width */ }]}>
                                <View style={SavingsStyle.overview.innerView}>
                                    <Ionicons name="star-outline" size={20} color="#fff" />
                                    <Text style={SavingsStyle.overview.innerView.text}>4</Text>
                                </View>
                                <Text style={SavingsStyle.overview.overviewText}> Active Goals </Text>
                            </View>
                            <View style={[SavingsStyle.overview, { marginBottom: 0.02 * width }]}>
                                <View style={SavingsStyle.overview.innerView}>
                                    <Ionicons name="card-outline" size={20} color="#fff" />
                                    <Text style={SavingsStyle.overview.innerView.text}>12</Text>
                                </View>
                                <Text style={SavingsStyle.overview.overviewText}> Transactions </Text>
                            </View>
                        </View>
                        <View style={SavingsStyle.gridContainerView.rowView}>
                            <View style={[SavingsStyle.overview, { marginBottom: 0.02 * width }]}>
                                <View style={SavingsStyle.overview.innerView}>
                                    <Text style={SavingsStyle.overview.innerView.text}>{'\u20B5'}</Text>
                                    <Text style={SavingsStyle.overview.innerView.text}>2200</Text>
                                </View>
                                <Text style={SavingsStyle.overview.overviewText}> Money saved </Text>
                            </View>
                            <View style={[SavingsStyle.overview, { marginBottom: 0.02 * width }]}>
                                <View style={SavingsStyle.overview.innerView}>
                                    <Feather name="download" size={20} color="#fff" />
                                    <Text style={SavingsStyle.overview.innerView.text}> + 10%</Text>
                                </View>
                                <Text style={SavingsStyle.overview.overviewText}> Revenue </Text>
                            </View>
                        </View>
                    </View>
                    <Text style={SavingsStyle.barChartView.text}>History</Text>

                    <View style={SavingsStyle.barChartView}>
                        <View style={SavingsStyle.barChartView.innerView}>
                            <BarChart
                                data={savingBarData}
                                barWidth={8}
                                spacing={24}
                                roundedTop
                                roundedBottom
                                hideRules
                                xAxisThickness={0}
                                yAxisThickness={0}
                                yAxisLabelPrefix={'\u20B5'}
                                yAxisTextStyle={{ color: 'gray' }}
                                noOfSections={3}
                                maxValue={75}
                            />
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </ScrollView>
    );
});
export default SavingsScreen;
