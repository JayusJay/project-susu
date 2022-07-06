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
                backgroundColor: '#7966FF',
                image: <Image source={require('../assets/images/onBoardingImages/img3.png')} />,
                title: 'Onboarding',
                subtitle: 'Done with React Native Onboarding Swiper',
                },
            ]}
        />
    )
}
export default OnBoardingScreen;
