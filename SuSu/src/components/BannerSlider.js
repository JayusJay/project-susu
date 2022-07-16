import React from 'react';
import { View, Image, useWindowDimensions } from 'react-native';

const BannerSlider = ({ data }) => {
    const { width } = useWindowDimensions();

    return (
        <View>
            <Image source={data.image} style={{ width: width - 50, height: 150, borderRadius: 10 }} />
        </View>
    );
};

export default BannerSlider;
