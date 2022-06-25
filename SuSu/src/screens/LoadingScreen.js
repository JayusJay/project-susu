import React from "react";
import { SafeAreaView, View, StyleSheet, useColorScheme } from "react-native";
import LottieView from 'lottie-react-native'

const LoadingScreen = () => {
    const colorScheme = useColorScheme();
    const color = colorScheme === 'dark' ? '#fff' : '#000';
    return (
        <SafeAreaView style={[StyleSheet.absoluteFillObject,{ flex: 1, backgroundColor: color }]}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <LottieView source={require('../assets/loader.json')} autoPlay loop />
            </View>
        </SafeAreaView>  
    );
}

export default LoadingScreen;