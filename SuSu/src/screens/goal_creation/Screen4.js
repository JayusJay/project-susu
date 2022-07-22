import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Screen4Styles from '../../styles/goal_creation/screen4Styles';

const Screen4 = ({ navigation }) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <SafeAreaView style={Screen4Styles.container}>
                <View style={Screen4Styles.header}>
                    <View style={Screen4Styles.headerContentView}>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.goBack();
                            }}
                            style={Screen4Styles.backButton}
                        >
                            <Ionicons name="arrow-back-outline" size={30} color="white" />
                        </TouchableOpacity>
                    </View>
                    <View style={Screen4Styles.headerContentView.textView}>
                        <Text style={Screen4Styles.headerContentView.text}>Select Amount</Text>
                    </View>
                </View>
                <View style={Screen4Styles.footer}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Screen 5');
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

export default Screen4;