import React, { useContext } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Animatable from 'react-native-animatable';
import { AuthContext } from '../components/AuthContext';
import HomeStyle from '../styles/homeStyle';

const HomeScreen = ({ navigation }) => {
    // const { loginValidation } = useContext(AuthContext);
    // const { handleLogOut } = loginValidation();
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
                    {/* <Text style={{ fontSize: 80, color: 'red' }}>Footer</Text> */}
                    <View style={{ padding: 40, backgroundColor: '#9FB7FF', borderRadius: 10, marginBottom: 15 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View>
                                <Text style={{ fontSize: 20, color: '#000', fontWeight: '500', marginTop: -20 }}>
                                    Instant
                                </Text>
                                <Text style={{ color: '#504C6B', paddingTop: 10 }}>Cash available</Text>
                            </View>
                            <Text>{'\u20B5'} 1000.00</Text>
                        </View>
                    </View>
                    <View style={{ padding: 40, backgroundColor: '#A6CAF0', borderRadius: 10, marginBottom: 15 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View>
                                <Text style={{ fontSize: 20, color: '#000', fontWeight: '500', marginTop: -20 }}>
                                    Savings
                                </Text>
                                <Text style={{ color: '#504C6B', paddingTop: 10 }}>Cash available</Text>
                            </View>
                            <Text>{'\u20B5'} 12000.00</Text>
                        </View>
                    </View>
                    <View style={{ padding: 40, backgroundColor: '#FFC466', borderRadius: 10, marginBottom: 15 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View>
                                <Text style={{ fontSize: 20, color: '#000', fontWeight: '500', marginTop: -20 }}>
                                    Investment
                                </Text>
                                <Text style={{ color: '#504C6B', paddingTop: 10 }}>Cash available</Text>
                            </View>
                            <Text>{'\u20B5'} 210000.00</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};
export default HomeScreen;
