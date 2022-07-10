import React, { useContext } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Animatable from 'react-native-animatable';
import { BarChart } from 'react-native-chart-kit';
import { AuthContext } from '../components/AuthContext';
import HomeStyle from '../styles/homeStyle';

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
        {
            data: [20, 45, 28, 80, 99, 43],
        },
    ],
};
const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    //backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#08130D',
    //backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
};

const HomeScreen = ({ navigation }) => {
    // const { loginValidation } = useContext(AuthContext);
    // const { handleLogOut } = loginValidation();
    const { width } = useWindowDimensions();

    return (
        <SafeAreaView style={HomeStyle.container}>
            <View style={HomeStyle.header}>
                <View style={HomeStyle.profileView}>
                    <Text style={HomeStyle.headerText}>Hi, Jayus</Text>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.openDrawer();
                        }}
                    >
                        <Image source={require('../assets/images/profile.jpg')} style={HomeStyle.image} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={HomeStyle.footer}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={HomeStyle.instantView}>
                        <View style={HomeStyle.innerView}>
                            <View>
                                <Text style={HomeStyle.viewText}>Instant</Text>
                                <Text style={HomeStyle.instantView.instantText}>Cash available</Text>
                            </View>
                            <Text>{'\u20B5'} 1000.00</Text>
                        </View>
                    </View>
                    <View style={HomeStyle.savingsView}>
                        <View style={HomeStyle.innerView}>
                            <View>
                                <Text style={HomeStyle.viewText}>Savings</Text>
                                <Text style={HomeStyle.savingsView.savingsText}>Cash available</Text>
                            </View>
                            <Text>{'\u20B5'} 12000.00</Text>
                        </View>
                    </View>
                    <View style={HomeStyle.investmentView}>
                        <View style={HomeStyle.innerView}>
                            <View>
                                <Text style={HomeStyle.viewText}>Investment</Text>
                                <Text style={HomeStyle.investmentView.investmentText}>Cash available</Text>
                            </View>
                            <Text>{'\u20B5'} 210000.00</Text>
                        </View>
                    </View>
                    <View style={HomeStyle.transactionsOverview}>
                        <View style={HomeStyle.innerView}>
                            <Text style={HomeStyle.viewText}>Transactions Overview</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ color: '#7966FF', marginRight: 5 }}>{'\u2B24'}</Text>
                            <Text style={HomeStyle.transactionsOverview.transactionsText}>Savings</Text>
                            <Text style={{ color: '#FFCCFF', marginRight: 5 }}>{'\u2B24'}</Text>
                            <Text style={HomeStyle.transactionsOverview.transactionsText}>Expenses</Text>
                        </View>
                        <View
                            style={{
                                marginLeft: -40,
                                marginTop: 10,
                            }}
                        >
                            <BarChart
                                style={{ borderRadius: 10, backgroundColor: '#fff' }}
                                data={data}
                                width={width - 40} // footer has a horizontal padding of 20px
                                height={220}
                                yAxisLabel={'\u20B5'}
                                chartConfig={chartConfig}
                                verticalLabelRotation={30}
                            />
                        </View>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};
export default HomeScreen;
