import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Screen2Styles from '../../styles/goal_creation/screen2Styles';

const Screen2 = ({ navigation }) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <SafeAreaView style={Screen2Styles.container}>
                <View style={Screen2Styles.header}>
                    <View style={Screen2Styles.headerContentView}>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.goBack();
                            }}
                            style={Screen2Styles.backButton}
                        >
                            <Ionicons name="arrow-back-outline" size={30} color="white" />
                        </TouchableOpacity>
                    </View>
                    <View style={Screen2Styles.headerContentView.textView}>
                        <Text style={Screen2Styles.headerContentView.text}>Savings Goal</Text>
                    </View>
                </View>
                <View style={Screen2Styles.footer}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Screen 3');
                        }}
                        style={{ padding: 20, backgroundColor: '#7966FF', borderRadius: 20 }}
                    >
                        <Text style={{ fontSize: 20, color: '#fff', alignSelf: 'center' }}>Next</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </ScrollView>
    );
};

export default Screen2;
