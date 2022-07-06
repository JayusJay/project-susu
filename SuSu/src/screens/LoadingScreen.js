import React from "react";
import { ActivityIndicator, SafeAreaView, useColorScheme} from "react-native";
import loadingStyle from "../styles/loadingStyle";

const LoadingScreen = () => {
    const colorScheme = useColorScheme();
    const color = colorScheme === 'dark' ? '#fff' : '#000';
    return (
        <SafeAreaView style = {[loadingStyle.container, loadingStyle.horizontal, {backgroundColor: color}]}>
            <ActivityIndicator size="large" color="#7966FF" />
        </SafeAreaView>
    );
}
export default LoadingScreen;