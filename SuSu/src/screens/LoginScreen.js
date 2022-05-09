import React, {useState} from "react";
import {View, Text, Button, Image, StyleSheet, TextInput, TouchableOpacity, Keyboard, Alert, SafeAreaView} from "react-native";
//import MaterialIcons from "react-native-vector-icons/MaterialIcons"

import LoginSVG from "../assets/images/sampleLogo.svg"
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
                    <LoginSVG height = {300} width = {300}/>
                </View>
                <Text style = {LoginStyle.text}>Login </Text>
                <View /*style = {LoginStyle.view3}*/>
                    <TextInput></TextInput>
                </View>
            </View>
        </SafeAreaView>
    )
}
export default LoginScreen