import React from "react";
import { ActivityIndicator, SafeAreaView, useColorScheme} from "react-native";
import activityIndicatorStyle from "../styles/activityIndicatorStyle";

const LoadingScreen = () => {
    const colorScheme = useColorScheme();
    const color = colorScheme === 'dark' ? '#fff' : '#000';
    return (
        <SafeAreaView style = {[activityIndicatorStyle.container, activityIndicatorStyle.horizontal, {backgroundColor: color}]}>
            <ActivityIndicator size="large" color="#AD40AF" />
        </SafeAreaView>
    );
}
export default LoadingScreen;