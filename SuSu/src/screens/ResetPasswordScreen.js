import React, { useEffect, useContext } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { AuthContext } from '../services/AuthContext';
import ResetPasswordStyle from '../styles/resetPasswordStyle';
import asyncStorage from '../utils/AsyncStorage';

const ResetPasswordScreen = () => {
    const { loginValidation } = useContext(AuthContext);
    const { handleResetEmail, handleResetPassword, resetEmail, setResetEmail } = loginValidation();
    const { resetRetrieve } = asyncStorage();
    useEffect(() => {
        resetRetrieve()
            .then((data) => setResetEmail({ ...resetEmail, email: data.email }))
            .catch(() => null);
    }, []);
    return (
        <SafeAreaView style={ResetPasswordStyle.SafeAreaView}>
            <Text style={ResetPasswordStyle.text}>ResetPasswordScreen</Text>
            <View style={ResetPasswordStyle.view1}>
                <MaterialIcons name="alternate-email" size={20} style={ResetPasswordStyle.icon} />
                <TextInput
                    underlineColorAndroid="transparent"
                    placeholder="Email"
                    value={resetEmail.email}
                    onChangeText={(text) => handleResetEmail(text)}
                    placeholderTextColor="#8A8A8A"
                    style={ResetPasswordStyle.textInput}
                    keyboardType="email-address"
                    onBlur={() => {
                        resetEmail.email.length == 0 ? setResetEmail({ ...resetEmail, isValidEmail: false }) : null;
                    }}
                />
            </View>
            {resetEmail.isValidEmail ? null : (
                <Text style={ResetPasswordStyle.errorText}>Enter a valid email address</Text>
            )}
            <TouchableOpacity
                onPress={() => {
                    handleResetPassword();
                }}
                style={ResetPasswordStyle.resetOpacity}
            >
                <Text style={ResetPasswordStyle.resetText}>Reset Password</Text>
                <MaterialIcons name="arrow-forward" size={22} color="#fff" />
            </TouchableOpacity>
        </SafeAreaView>
    );
};
export default ResetPasswordScreen;
