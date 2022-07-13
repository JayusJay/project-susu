import React from 'react';
import { View, Image } from 'react-native';

const BannerSlider = ({ data }) => {
    return (
        <View>
            <Image source={data.image} style={{ width: '100%', height: 110, borderRadius: 20 }} />
        </View>
    );
};

export default BannerSlider;
