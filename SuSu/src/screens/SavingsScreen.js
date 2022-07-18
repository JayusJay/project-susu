import React from 'react';
import { Text, View, ScrollView, useWindowDimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { BarChart } from 'react-native-gifted-charts';
import barData from '../assets/bardata';
import SavingsStyle from '../styles/savingsStyle';

const SavingsScreen = ({ navigation }) => {
    const { width, height } = useWindowDimensions();
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <SafeAreaView style={SavingsStyle.container}>
                <View style={SavingsStyle.header}>
                    <View style={SavingsStyle.profileView}>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.goBack();
                            }}
                            style={SavingsStyle.backButton}
                        >
                            <Ionicons
                                name="arrow-back-outline"
                                size={30}
                                color="white"
                                style={{ justifyContent: 'flex-start' }}
                            />
                        </TouchableOpacity>
                    </View>
                    <Text style={{ color: 'red', marginTop: 6, justifyContent: 'center' }}>Savings Screen</Text>
                </View>
                <View style={SavingsStyle.footer}>
                    {/* <Text style={{ color: '#000' }}>Savings Screen</Text> */}
                    <View style={SavingsStyle.barChartView}>
                        <View style={{ marginLeft: -40, marginTop: 10 }}>
                            <BarChart
                                data={barData}
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
                    <View style={SavingsStyle.gridContainerView}>
                        <Text style={{ color: '#000', fontSize: 30 }}>Overview</Text>

                        <View style={SavingsStyle.gridContainerView.rowView}>
                            <View style={[SavingsStyle.overview, { marginBottom: 0.02 * width }]}>
                                <Text style={{ color: '#fff' }}>Something 1 </Text>
                            </View>
                            <View style={[SavingsStyle.overview, { marginBottom: 0.02 * width }]}>
                                <Text style={{ color: '#fff' }}>Something 2</Text>
                            </View>
                        </View>
                        <View style={SavingsStyle.gridContainerView.rowView}>
                            <View style={[SavingsStyle.overview, { marginBottom: 0.02 * width }]}>
                                <Text style={{ color: '#fff' }}>Something 3</Text>
                            </View>
                            <View style={[SavingsStyle.overview, { marginBottom: 0.02 * width }]}>
                                <Text style={{ color: '#fff' }}>Something 4</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </ScrollView>
    );
};
//export
export default SavingsScreen;
