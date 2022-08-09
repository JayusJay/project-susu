import React from 'react';
import { View, Image, Text, TouchableOpacity, useWindowDimensions } from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import TextTicker from 'react-native-text-ticker';
import GroupComponentStyle from '../styles/groupComponentStyle';

const GroupComponent = ({ navigation, data }) => {
    const { width } = useWindowDimensions();

    return data.map((item, index) => (
        <View key={index} style={[GroupComponentStyle.container, { width: width - 40 }]}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={item.image} style={GroupComponentStyle.container.image} />
                    <View>
                        <Text style={GroupComponentStyle.container.nameText}>{item.name}</Text>
                        <TextTicker
                            style={{ paddingLeft: 20, marginTop: 5, fontSize: 16, width: 0.6 * width }}
                            duration={10000}
                            loop
                            bounce
                            repeatSpacer={50}
                            marqueeDelay={1000}
                        >
                            {item.members.map((member) => member.name).join(', ')}
                        </TextTicker>
                    </View>
                </View>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Goal Detail', item); /*passing data to GoalDetailScreen*/
                    }}
                    style={{ alignSelf: 'center' }}
                >
                    <EvilIcons name="chevron-right" size={30} color="#8A8A8A" style={{ padding: 10 }} />
                </TouchableOpacity>
            </View>
        </View>
    ));
};

export default GroupComponent;
