import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CircularProgressBase } from 'react-native-circular-progress-indicator';
import Ionicons from 'react-native-vector-icons/Ionicons';
import GoalDetailScreenStyle from '../styles/goalDetailScreenStyle';

const GoalDetailScreen = ({ route, navigation }) => {
    const { image, name, amountSaved, totalAmount, timeLeft, value } = route.params;
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff', padding: 20 }}>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="close-outline" size={30} color="#000" />
                </TouchableOpacity>
            </View>
            <View style={{ padding: 40, alignItems: 'center' }}>
                <CircularProgressBase {...GoalDetailScreenStyle.CircularProgressBaseProps}>
                    <Image source={image} style={{ width: 150, height: 150, borderRadius: 80 }} />
                </CircularProgressBase>
            </View>
            <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#000', padding: 10 }}>{name}</Text>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: 40, fontWeight: 'bold', marginTop: 10, color: '#7966FF', padding: 10 }}>
                    {amountSaved}
                </Text>
                <Text style={{ fontSize: 20, marginTop: 10, color: '#000', padding: 25 }}> of {totalAmount}</Text>
            </View>
        </SafeAreaView>
    );
};

export default GoalDetailScreen;
