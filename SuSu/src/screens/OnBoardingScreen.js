import React from "react";
import { Image } from "react-native";
import OnBoarding from "react-native-onboarding-swiper";

const OnBoardingScreen = ({navigation}) => {
    return(
        <OnBoarding 
            onSkip={() => navigation.replace("Login")}
            onDone={() => navigation.replace("Login")}
            pages={[
                {
                backgroundColor: '#A6D1F2',
                image: <Image source={require('../assets/images/onBoardingImages/img1.png')} />,
                title: 'Onboarding',
                subtitle: 'Done with React Native Onboarding Swiper',
                },
                {
                backgroundColor: '#A6E4D0',
                image: <Image source={require('../assets/images/onBoardingImages/img2.png')} />,
                title: 'Onboarding',
                subtitle: 'Done with React Native Onboarding Swiper',
                },
                {
                backgroundColor: '#AD40AF',
                image: <Image source={require('../assets/images/onBoardingImages/img3.png')} />,
                title: 'Onboarding',
                subtitle: 'Done with React Native Onboarding Swiper',
                },
            ]}
        />
    )
    // return (
    //     <SafeAreaView style={OnBoardingStyle.SafeAreaView}>
    //         <View>
    //             <Text style = {OnBoardingStyle.header}>Welcome to SaveApp</Text>
    //         </View>
    //         <View style = {OnBoardingStyle.view2}>
    //         </View>
    //         <TouchableOpacity style = {OnBoardingStyle.starterOpacity} onPress={() => navigation.navigate('Login')}> 
    //            <Text style = {OnBoardingStyle.text}>Get Started</Text>
    //            <MaterialIcons name = 'arrow-forward' size={22} color="#fff"/>
    //         </TouchableOpacity>
    //     </SafeAreaView>

    // );
}
export default OnBoardingScreen;
