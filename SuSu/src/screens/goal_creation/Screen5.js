import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Screen5Styles from '../../styles/goal_creation/screen5Styles';

const Screen5 = ({ navigation }) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <SafeAreaView style={Screen5Styles.container}>
                <View style={Screen5Styles.header}>
                    <View style={Screen5Styles.headerContentView}>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.goBack();
                            }}
                            style={Screen5Styles.backButton}
                        >
                            <Ionicons name="arrow-back-outline" size={30} color="white" />
                        </TouchableOpacity>
                    </View>
                    <View style={Screen5Styles.headerContentView.textView}>
                        <Text style={Screen5Styles.headerContentView.text}>Done</Text>
                    </View>
                </View>
                <View style={Screen5Styles.footer}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Savings');
                        }}
                        style={{ padding: 20, backgroundColor: '#7966FF', borderRadius: 20 }}
                    >
                        <Text style={{ fontSize: 20, color: '#fff', alignSelf: 'center' }}>Done</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </ScrollView>
    );
};

export default Screen5;
