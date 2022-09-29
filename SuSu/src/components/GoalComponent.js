import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { CircularProgressBase } from 'react-native-circular-progress-indicator';
import GoalComponentStyle from '../styles/goalComponentStyle';

const GoalComponent = ({ navigation, data }) => {
    if (data.length === 0) {
        return (
            <View>
                <Text style={GoalComponentStyle.container.noGroupsText}>You have no goals at the moment</Text>
            </View>
        );
    }

    return data.map((item, index) => (
        <TouchableOpacity
            key={index}
            onPress={() => {
                navigation.navigate('GoalDetail', item._data); //passing data to GoalDetailScreen
            }}
        >
            {console.log(item._data)}
            <View style={GoalComponentStyle.container}>
                <CircularProgressBase {...GoalComponentStyle.CircularProgressBaseProps} value={item._data.value}>
                    <Image source={{ url: item._data.imageUri }} style={GoalComponentStyle.container.image} />
                </CircularProgressBase>
                <View style={GoalComponentStyle.container.textView}>
                    <Text style={GoalComponentStyle.container.nameText}>{item._data.name}</Text>
                    <Text style={GoalComponentStyle.container.amountText}>
                        {'\u20B5 '}
                        {item._data.amountSaved}
                    </Text>
                </View>
                <Text style={GoalComponentStyle.container.timeLeftText}>{item._data.timeLeft}</Text>
            </View>
        </TouchableOpacity>
    ));
};

export default GoalComponent;
