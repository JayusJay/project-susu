import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import RegisterStyle from '../styles/RegisterStyle';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SVG from '../assets/images/sampleLogo.svg';
import GoogleSVG from '../assets/images/google.svg';
import { AuthContext } from '../components/AuthContext';
import DatePicker from 'react-native-date-picker';
import asyncStorage from '../components/AsyncStorage';

const RegisterScreen = ({ navigation }) => {
    const { registrationValidation, loginValidation } = useContext(AuthContext);

    const {
        handleFirstName,
        handleLastName,
        handleEmail,
        handlePassword,
        handleConfirmPassword,
        handlePhoneNumber,
        handleDateOfBirth,
        handleSubmit,
        registerData,
        setRegisterData,
    } = registrationValidation();
    const { handleGoogleSignIn } = loginValidation();
    const [open, setOpen] = useState(false);
    const [DoBLabel, setDoBLabel] = useState('Date of Birth');
    const [visibility, setVisibility] = useState(true);
    const { registrationRetrieve } = asyncStorage();
    useEffect(() => {
        registrationRetrieve()
            .then((data) =>
                setRegisterData({
                    ...registerData,
                    firstName: data.firstName,
                    lastName: data.lastName,
                    email: data.email,
                    password: data.password,
                    confirmPassword: data.confirmPassword,
                    phoneNumber: data.phoneNumber,
                })
            )
            .catch(() => null); // if data is null error should be ignored
    }, []);

    return (
        <SafeAreaView style={RegisterStyle.SafeAreaView}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={RegisterStyle.view1}>
                    <SVG width={80} height={80} />
                    <Text style={RegisterStyle.welcomeText}>SaveApp</Text>
                </View>
                <View style={RegisterStyle.view2}>
                    <Text style={RegisterStyle.text}>Register</Text>
                    <View style={RegisterStyle.view3}>
                        <MaterialIcons name="person-outline" size={20} style={RegisterStyle.icon} />
                        <TextInput
                            underlineColorAndroid="transparent"
                            placeholder="FirstName"
                            value={registerData.firstName}
                            onChangeText={(text) => handleFirstName(text)}
                            placeholderTextColor="#8A8A8A"
                            style={RegisterStyle.textInput}
                            onBlur={() => {
                                handleFirstName(registerData.firstName);
                            }}
                        />
                    </View>
                    {registerData.isValidFirstName ? null : (
                        <Text style={RegisterStyle.errorText}>
                            First Name must be at least 3 characters long and contain no numbers
                        </Text>
                    )}

                    <View style={RegisterStyle.view3}>
                        <MaterialIcons name="person-outline" size={20} style={RegisterStyle.icon} />
                        <TextInput
                            underlineColorAndroid="transparent"
                            placeholder="LastName"
                            value={registerData.lastName}
                            onChangeText={(text) => handleLastName(text)}
                            placeholderTextColor="#8A8A8A"
                            style={RegisterStyle.textInput}
                            onBlur={() => {
                                handleLastName(registerData.lastName);
                            }}
                        />
                    </View>
                    {registerData.isValidLastName ? null : (
                        <Text style={RegisterStyle.errorText}>
                            Last Name must be at least 3 characters long and contain no numbers
                        </Text>
                    )}
                    <View style={RegisterStyle.view3}>
                        <MaterialIcons name="alternate-email" size={20} style={RegisterStyle.icon} />
                        <TextInput
                            underlineColorAndroid="transparent"
                            placeholder="Email"
                            value={registerData.email}
                            onChangeText={(text) => handleEmail(text)}
                            placeholderTextColor="#8A8A8A"
                            style={RegisterStyle.textInput}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            onBlur={() => {
                                handleEmail(registerData.email);
                            }}
                        />
                    </View>
                    {registerData.isValidEmail ? null : (
                        <Text style={RegisterStyle.errorText}>Enter a valid email address</Text>
                    )}
                    <View style={RegisterStyle.view3}>
                        <MaterialIcons name="call" size={20} style={RegisterStyle.icon} />
                        <TextInput
                            underlineColorAndroid="transparent"
                            placeholder="Phone Number"
                            value={registerData.phoneNumber}
                            onChangeText={(text) => handlePhoneNumber(text)}
                            placeholderTextColor="#8A8A8A"
                            style={RegisterStyle.textInput}
                            keyboardType="phone-pad"
                            onBlur={() => {
                                handlePhoneNumber(registerData.phoneNumber);
                            }}
                        />
                    </View>
                    {registerData.isValidPhoneNumber ? null : (
                        <Text style={RegisterStyle.errorText}>Enter a valid phone number</Text>
                    )}
                    <View style={RegisterStyle.view3}>
                        <Ionicons name="lock-closed-outline" size={20} style={RegisterStyle.icon} />
                        <TextInput
                            underlineColorAndroid="transparent"
                            placeholder="Password"
                            value={registerData.password}
                            onChangeText={(text) => handlePassword(text)}
                            placeholderTextColor="#8A8A8A"
                            style={RegisterStyle.textInput}
                            secureTextEntry={visibility}
                            onBlur={() => {
                                handlePassword(registerData.password);
                            }}
                        />
                        <TouchableOpacity
                            onPress={() => {
                                setVisibility(!visibility);
                            }}
                        >
                            {visibility ? (
                                <MaterialIcons name="visibility-off" size={20} style={RegisterStyle.icon} />
                            ) : (
                                <MaterialIcons name="visibility" size={20} style={RegisterStyle.icon} />
                            )}
                        </TouchableOpacity>
                    </View>
                    {registerData.isValidPassword ? null : (
                        <Text style={RegisterStyle.errorText}>
                            Password must be at least 8 characters long, contain at least one number and one special
                            character
                        </Text>
                    )}
                    <View style={RegisterStyle.view3}>
                        <Ionicons name="lock-closed-outline" size={20} style={RegisterStyle.icon} />
                        <TextInput
                            underlineColorAndroid="transparent"
                            placeholder="Confirm password"
                            value={registerData.confirmPassword}
                            onChangeText={(text) => handleConfirmPassword(text)}
                            placeholderTextColor="#8A8A8A"
                            style={RegisterStyle.textInput}
                            secureTextEntry={visibility}
                            onBlur={() => {
                                handleConfirmPassword(registerData.confirmPassword);
                            }}
                        />
                        <TouchableOpacity
                            onPress={() => {
                                setVisibility(!visibility);
                            }}
                        >
                            {visibility ? (
                                <MaterialIcons name="visibility-off" size={20} style={RegisterStyle.icon} />
                            ) : (
                                <MaterialIcons name="visibility" size={20} style={RegisterStyle.icon} />
                            )}
                        </TouchableOpacity>
                    </View>
                    {registerData.isValidConfirmPassword ? null : (
                        <Text style={RegisterStyle.errorText}>Password mismatch</Text>
                    )}
                    <View style={RegisterStyle.view3}>
                        <Ionicons name="calendar-outline" size={20} style={RegisterStyle.icon} />
                        <TouchableOpacity onPress={() => setOpen(true)}>
                            <Text style={RegisterStyle.DoBText}>{DoBLabel}</Text>
                            <DatePicker
                                modal
                                open={open}
                                date={registerData.dateOfBirth}
                                mode={'date'}
                                androidVariant={'nativeAndroid'}
                                onConfirm={(date) => {
                                    setOpen(false);
                                    handleDateOfBirth(date);
                                    setDoBLabel(date.toDateString());
                                }}
                                onCancel={() => {
                                    setOpen(false);
                                }}
                            />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity
                        onPress={() => {
                            handleSubmit();
                        }}
                        style={RegisterStyle.loginOpacity}
                    >
                        <Text style={RegisterStyle.loginText}>Register</Text>
                    </TouchableOpacity>
                    <Text style={RegisterStyle.alternate}>Or SignUp with ...</Text>
                    <View style={RegisterStyle.view5}>
                        <TouchableOpacity
                            onPress={() => {
                                handleGoogleSignIn();
                            }}
                        >
                            <GoogleSVG height={40} width={40} />
                        </TouchableOpacity>
                    </View>
                    <View style={RegisterStyle.view4}>
                        <Text style={RegisterStyle.view4Text}>Already have an account?</Text>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Login')}
                            style={RegisterStyle.RegisterOpacity}
                        >
                            <Text style={RegisterStyle.RegisterText}> Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
export default RegisterScreen;
