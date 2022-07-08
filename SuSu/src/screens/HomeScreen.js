import React, { useContext } from 'react';
import { SafeAreaView, Text, TouchableOpacity, ScrollView } from 'react-native';
import { AuthContext } from '../components/AuthContext';
import HomeStyle from '../styles/homeStyle';

const HomeScreen = ({ navigation }) => {
    // const { loginValidation } = useContext(AuthContext);
    // const { handleLogOut } = loginValidation();
    return (
        <SafeAreaView style={HomeStyle.SafeAreaView}>
            <ScrollView>
                <Text style={HomeStyle.Text}>HomeScreen</Text>
            </ScrollView>
        </SafeAreaView>
    );
};
export default HomeScreen;
