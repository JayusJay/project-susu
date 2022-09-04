import React from 'react';
import { View, Image, Text, Pressable, useWindowDimensions } from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import TextTicker from 'react-native-text-ticker';
import GroupComponentStyle from '../styles/groupComponentStyle';

const GroupComponent = ({ navigation, data }) => {
    const { width } = useWindowDimensions();
    if (data.length === 0) {
        return (
            <View>
                <Text style={GroupComponentStyle.container.noGroupsText}>You have no groups at the moment</Text>
            </View>
        );
    }
    return data.map((item, index) => (
        <View key={index} style={[GroupComponentStyle.container, { width: width - 40 }]}>
            <Pressable
                onPress={() => {
                    navigation.navigate('GroupDetail', item);
                }}
            >
                <View style={GroupComponentStyle.container.innerView}>
                    <View style={GroupComponentStyle.container.innerView.innerView}>
                        <Image source={{ uri: item.imageUri }} style={GroupComponentStyle.container.image} />

                        <View>
                            <Text style={GroupComponentStyle.container.nameText}>{item.name}</Text>

                            <TextTicker
                                style={[
                                    GroupComponentStyle.container.innerView.innerView.textTicker,
                                    { width: 0.6 * width },
                                ]}
                                duration={10000}
                                loop
                                bounce
                                scroll
                                repeatSpacer={50}
                                marqueeDelay={1000}
                            >
                                {item.members.map((member) => member.name).join(', ')}
                            </TextTicker>
                        </View>
                    </View>

                    <EvilIcons
                        name="chevron-right"
                        size={30}
                        color="#8A8A8A"
                        style={GroupComponentStyle.container.chevronButton}
                    />
                </View>
            </Pressable>
        </View>
    ));
};

export default GroupComponent;
