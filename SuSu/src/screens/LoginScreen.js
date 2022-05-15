import React, {useState} from "react"
import {
    View, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    ScrollView, 
    SafeAreaView
} from "react-native"
import LoginStyle from "../styles/loginStyle"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Ionicons from "react-native-vector-icons/Ionicons"
import LoginSVG from "../assets/images/sampleLogo.svg"
import GoogleSVG from "../assets/images/google.svg"

const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    
    return(
        <SafeAreaView style={LoginStyle.SafeAreaView}>
            <ScrollView>
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
                        placeholderTextColor='#8A8A8A'
                        style = {LoginStyle.textInput} 
                        keyboardType = "email-address"/>
                    </View>
                    <View style = {LoginStyle.view3}>
                        <Ionicons name ='lock-closed-outline' size={20} style = {LoginStyle.icon}/>
                        <TextInput
                        underlineColorAndroid="transparent"
                        placeholder="Password"
                        placeholderTextColor='#8A8A8A'
                        style = {LoginStyle.textInput}
                        secureTextEntry = {true}/>
                        <TouchableOpacity onPress={() => {}} style = {LoginStyle.forgotOpacity}>
                            <Text style = {LoginStyle.forgotPassword}>Forgot Password?</Text>
                        </TouchableOpacity>
                    </View>
                    <View style = {LoginStyle.view4}>
                    <Text style = {LoginStyle.view4Text}>Dont have an account?</Text>
                    <TouchableOpacity onPress={() => {}} style = {LoginStyle.signupOpacity}>
                        <Text style = {LoginStyle.signupText}> Sign up</Text>
                    </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={() => {}} style = {LoginStyle.loginOpacity}>
                        <Text style = {LoginStyle.loginText}>Login</Text>
                    </TouchableOpacity>
                    <Text style = {LoginStyle.alternate}>Or login with ...</Text>
                    <TouchableOpacity onPress={() => {}} style = {LoginStyle.googleOpacity}>
                        <GoogleSVG height = {40} width = {40}/>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default LoginScreen