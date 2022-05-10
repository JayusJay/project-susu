import React, {useState} from "react";
import {View, Text, Button, Image, StyleSheet, TextInput, TouchableOpacity, Keyboard, Alert, SafeAreaView} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Ionicons from "react-native-vector-icons/Ionicons"

import LoginSVG from "../assets/images/sampleLogo.svg"
import GoogleSVG from "../assets/images/google.svg"
import LoginStyle from "../styles/loginStyle";

const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    
    return(
        <SafeAreaView style={LoginStyle.SafeAreaView}>
            <View style={LoginStyle.view1}>
                <View style = {LoginStyle.view2}>
                    <LoginSVG height = {280} width = {280}/>
                </View>
                <Text style = {LoginStyle.text}>Login</Text>
                <View style = {LoginStyle.view3}>
                    <MaterialIcons name ='alternate-email' size={20} style = {LoginStyle.icon}/>
                    <TextInput 
                    underlineColorAndroid="transparent"
                    placeholder="Email"
                    style = {LoginStyle.textInput} 
                    keyboardType = "email-address"/>
                </View>
                <View style = {LoginStyle.view3}>
                    <Ionicons name ='lock-closed-outline' size={20} style = {LoginStyle.icon}/>
                    <TextInput
                    underlineColorAndroid="transparent"
                    placeholder="Password" 
                    style = {LoginStyle.textInput}
                    secureTextEntry = {true}/>
                    <TouchableOpacity onPress={() => {}} style = {LoginStyle.forgotOpacity}>
                        <Text style = {LoginStyle.forgotPassword}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => {}} style = {LoginStyle.signupOpacity}>
                    <Text style = {LoginStyle.signupText}>Don't have an account? Sign up</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {}} style = {LoginStyle.loginOpacity}>
                    <Text style = {LoginStyle.loginText}>Login</Text>
                </TouchableOpacity>
                <Text style = {LoginStyle.alternate}>Or login with ...</Text>
                <TouchableOpacity onPress={() => {}} style = {LoginStyle.googleOpacity}>
                    <GoogleSVG height = {40} width = {40}/>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}
export default LoginScreen