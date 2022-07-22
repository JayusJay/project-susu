import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Screen1Styles from '../../styles/goal_creation/screen1Styles';

const Screen1 = ({ navigation }) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <SafeAreaView style={Screen1Styles.container}>
                <View style={Screen1Styles.header}>
                    <View style={Screen1Styles.headerContentView}>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.goBack();
                            }}
                            style={Screen1Styles.backButton}
                        >
                            <Ionicons name="arrow-back-outline" size={30} color="white" />
                        </TouchableOpacity>
                    </View>
                    <View style={Screen1Styles.headerContentView.textView}>
                        <Text style={Screen1Styles.headerContentView.text}>Select a Goal</Text>
                    </View>
                </View>
                <View style={Screen1Styles.footer}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Screen 2');
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

export default Screen1;
