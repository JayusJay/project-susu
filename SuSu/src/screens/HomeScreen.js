import React, { useContext } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import * as Animatable from 'react-native-animatable';
import { BarChart } from 'react-native-gifted-charts';
import Carousel from 'react-native-reanimated-carousel';
import { CircularProgressBase } from 'react-native-circular-progress-indicator';
// import { AuthContext } from '../components/AuthContext';
import HomeStyle from '../styles/homeStyle';
import barData from '../assets/bardata';
import BannerSlider from '../components/BannerSlider';

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
    const CircularProgressBaseSavingProps = {
        activeStrokeWidth: 2,
        inActiveStrokeWidth: 2,
        inActiveStrokeOpacity: 0.2,
        activeStrokeColor: '#7966FF',
        inActiveStrokeColor: '#e84118',
        radius: 20,
    };
    const CircularProgressBaseInvestmentProps = {
        activeStrokeWidth: 0,
        inActiveStrokeWidth: 0,
        inActiveStrokeOpacity: 0,
        inActiveStrokeOpacity: 0.2,
        circleBackgroundColor: '#7966FF',
        radius: 20,
    };
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <SafeAreaView style={HomeStyle.container}>
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
                                <Text style={HomeStyle.savingsView.savingsText}>Smart savings is on</Text>
                            </View>
                            <Text>{'\u20B5'} 12000.00</Text>
                        </View>
                        <View style={HomeStyle.circularProgressBaseView}>
                            <TouchableOpacity onPress={() => {}}>
                                <CircularProgressBase {...CircularProgressBaseSavingProps} value={80}>
                                    <Ionicons name="home-outline" size={20} color="#7966FF" />
                                </CircularProgressBase>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {}}>
                                <CircularProgressBase {...CircularProgressBaseSavingProps} value={80}>
                                    <Ionicons name="gift-outline" size={20} color="#7966FF" />
                                </CircularProgressBase>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {}}>
                                <CircularProgressBase {...CircularProgressBaseSavingProps} value={60}>
                                    <FontAwesome5 name="umbrella-beach" size={20} color="#7966FF" />
                                </CircularProgressBase>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {}}>
                                <CircularProgressBase {...CircularProgressBaseSavingProps} value={90}>
                                    <Ionicons name="tv-outline" size={20} color="#7966FF" />
                                </CircularProgressBase>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {}}>
                                <CircularProgressBase {...CircularProgressBaseSavingProps} value={70}>
                                    <Ionicons name="add" size={30} color="#7966FF" />
                                </CircularProgressBase>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={HomeStyle.investmentView}>
                        <View style={HomeStyle.innerView}>
                            <View>
                                <Text style={HomeStyle.viewText}>Investment</Text>
                                <Text style={HomeStyle.investmentView.investmentText}>Auto-investing on</Text>
                            </View>
                            <Text>{'\u20B5'} 210000.00</Text>
                        </View>
                        <View style={HomeStyle.circularProgressBaseView}>
                            <TouchableOpacity onPress={() => {}}>
                                <CircularProgressBase {...CircularProgressBaseInvestmentProps}>
                                    <AntDesign name="barschart" size={30} color="#fff" />
                                </CircularProgressBase>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {}}>
                                <CircularProgressBase {...CircularProgressBaseInvestmentProps}>
                                    <MaterialCommunityIcons name="lightning-bolt-outline" size={30} color="#fff" />
                                </CircularProgressBase>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {}}>
                                <CircularProgressBase {...CircularProgressBaseInvestmentProps}>
                                    <Ionicons name="add" size={30} color="#fff" />
                                </CircularProgressBase>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={HomeStyle.transactionsOverview}>
                        <View style={HomeStyle.innerView}>
                            <Text style={HomeStyle.viewText}>Transactions Overview</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ color: '#177AD5', marginRight: 5 }}>{'\u2B24'}</Text>
                            <Text style={HomeStyle.transactionsOverview.transactionsText}>Savings</Text>
                            <Text style={{ color: '#ED6665', marginRight: 5 }}>{'\u2B24'}</Text>
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
                </View>
            </SafeAreaView>
        </ScrollView>
    );
};
export default HomeScreen;
