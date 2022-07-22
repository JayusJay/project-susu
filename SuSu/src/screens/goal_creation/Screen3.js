import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Screen3Styles from '../../styles/goal_creation/screen3Styles';

const Screen3 = ({ navigation }) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <SafeAreaView style={Screen3Styles.container}>
                <View style={Screen3Styles.header}>
                    <View style={Screen3Styles.headerContentView}>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.goBack();
                            }}
                            style={Screen3Styles.backButton}
                        >
                            <Ionicons name="arrow-back-outline" size={30} color="white" />
                        </TouchableOpacity>
                    </View>
                    <View style={Screen3Styles.headerContentView.textView}>
                        <Text style={Screen3Styles.headerContentView.text}>Savings plan</Text>
                    </View>
                </View>
                <View style={Screen3Styles.footer}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Screen 4');
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

export default Screen3;
