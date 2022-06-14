import React from "react";
import { SafeAreaView, View, StyleSheet,useColorScheme } from "react-native";
import registrationValidation from "../components/registrationValidation";
import LottieView from 'lottie-react-native'

const LoadingScreen = ({navigation}) => {
    const {validData} = registrationValidation()
    const colorScheme = useColorScheme();
    const color = colorScheme === 'dark' ? '#fff' : '#000';
    return (
        // validData.isLoading ?
        <SafeAreaView style={[StyleSheet.absoluteFillObject,{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.3)' }]}>
            
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <LottieView source={require('../assets/loader.json')} autoPlay loop />
            </View>
        </SafeAreaView>
        // : validData.authenticated? navigation.navigate('Home') : navigation.navigate('Login')
        
    );
}

export default LoadingScreen;