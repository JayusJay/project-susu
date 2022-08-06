import React, { useContext } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AppStoreContext } from '../../components/AppStoreContext';
import Screen5Styles from '../../styles/goal_creation/screen5Styles';

const Screen5 = ({ navigation }) => {
    const { goalCreationStore } = useContext(AppStoreContext);
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
                        <View style={Screen5Styles.headerContentView.textView.innerView}>
                            <Text style={Screen5Styles.headerContentView.textView.innerView.stepsText}>Step 5/5</Text>
                            <Text style={Screen5Styles.headerContentView.text}>Done</Text>
                        </View>
                    </View>
                </View>
                <View style={Screen5Styles.footer}>
                    <View>
                        {/* <Text style={{ color: '#000', fontSize: 20 }}> */}
                        {Object.values(goalCreationStore.goalCreationData).map((value, index) => (
                            <Text key={index} style={{ color: '#000' }}>
                                {value}
                            </Text>
                        ))}

                        {/* </Text> */}
                    </View>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Savings');
                        }}
                        style={{
                            padding: 20,
                            backgroundColor: '#7966FF',
                            borderRadius: 40,
                            marginTop: 30,
                        }}
                    >
                        <Text style={{ fontSize: 20, color: '#fff', alignSelf: 'center', fontWeight: '700' }}>
                            Done
                        </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </ScrollView>
    );
};

export default Screen5;
