import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { CircularProgressBase } from 'react-native-circular-progress-indicator';
import GoalComponentStyle from '../styles/goalComponentStyle';

const GoalComponent = ({ navigation, data }) => {
    return data.map((item, index) => (
        <TouchableOpacity
            key={index}
            onPress={() => {
                navigation.navigate('Goal Detail', item); //passing data to GoalDetailScreen
            }}
        >
            <View style={GoalComponentStyle.container}>
                <CircularProgressBase {...GoalComponentStyle.CircularProgressBaseProps} value={item.value}>
                    <Image source={item.image} style={GoalComponentStyle.container.image} />
                </CircularProgressBase>
                <View style={GoalComponentStyle.container.textView}>
                    <Text style={GoalComponentStyle.container.nameText}>{item.name}</Text>
                    <Text style={GoalComponentStyle.container.amountText}>
                        {'\u20B5 '}
                        {item.amountSaved}
                    </Text>
                </View>
                <Text style={GoalComponentStyle.container.timeLeftText}>{item.timeLeft}</Text>
            </View>
        </TouchableOpacity>
    ));
};

export default GoalComponent;
