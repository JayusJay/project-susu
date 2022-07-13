import React, { useContext } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Animatable from 'react-native-animatable';
import { BarChart } from 'react-native-gifted-charts';
import Carousel from 'react-native-reanimated-carousel';
import { AuthContext } from '../components/AuthContext';
import HomeStyle from '../styles/homeStyle';
import BannerSlider from '../components/BannerSlider';

const barData = [
    {
        value: 40,
        label: 'Jan',
        spacing: 2,
        labelWidth: 30,
        labelTextStyle: { color: 'gray' },
        frontColor: '#177AD5',
    },
    { value: 20, frontColor: '#ED6665' },
    {
        value: 50,
        label: 'Feb',
        spacing: 2,
        labelWidth: 30,
        labelTextStyle: { color: 'gray' },
        frontColor: '#177AD5',
    },
    { value: 40, frontColor: '#ED6665' },
    {
        value: 75,
        label: 'Mar',
        spacing: 2,
        labelWidth: 30,
        labelTextStyle: { color: 'gray' },
        frontColor: '#177AD5',
    },
    { value: 25, frontColor: '#ED6665' },
    {
        value: 30,
        label: 'Apr',
        spacing: 2,
        labelWidth: 30,
        labelTextStyle: { color: 'gray' },
        frontColor: '#177AD5',
    },
    { value: 20, frontColor: '#ED6665' },
    {
        value: 60,
        label: 'May',
        spacing: 2,
        labelWidth: 30,
        labelTextStyle: { color: 'gray' },
        frontColor: '#177AD5',
    },
    { value: 40, frontColor: '#ED6665' },
    {
        value: 65,
        label: 'Jun',
        spacing: 2,
        labelWidth: 30,
        labelTextStyle: { color: 'gray' },
        frontColor: '#177AD5',
    },
    { value: 30, frontColor: '#ED6665' },
];
const cards = [
    {
        image: require('../assets/images/mtn-momo.png'),
        title: 'MTN MOMO',
    },
    {
        image: require('../assets/images/creditCard.jpg'),
        title: 'Credit Card',
    },
];

const HomeScreen = ({ navigation }) => {
    // const { loginValidation } = useContext(AuthContext);
    // const { handleLogOut } = loginValidation();
    const { width } = useWindowDimensions();
    const renderBanner = ({ item, index }) => {
        return <BannerSlider data={item} />;
    };
    return (
        <SafeAreaView style={HomeStyle.container}>
            <ScrollView stickyHeaderIndices={[0]}>
                <View style={HomeStyle.header}>
                    <View style={HomeStyle.profileView}>
                        <View>
                            <Text style={HomeStyle.headerText}>Hi,</Text>
                            <Text style={{ fontSize: 30, color: '#fff', fontWeight: '800' }}>Jayus</Text>
                        </View>
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
                        <View style={{ marginBottom: 10 }}>
                            <Carousel
                                width={width - 40}
                                height={115}
                                data={cards}
                                sliderWidth={width}
                                itemHorizontalMargin={0}
                                mode="parallax"
                                modeConfig={{
                                    parallaxScrollingScale: 0.9,
                                    parallaxScrollingOffset: 50,
                                }}
                                loop={true}
                                autoplay={true}
                                autoplayDelay={3000}
                                autoplayInterval={3000}
                                onSnapToItem={(index) => {}}
                                renderItem={({ item, index }) => renderBanner({ item, index })}
                            />
                        </View>
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
                    </ScrollView>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
export default HomeScreen;
