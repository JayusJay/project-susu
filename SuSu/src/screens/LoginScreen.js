import React, {useState, useEffect, useContext} from "react"
import {View, Text, TextInput, TouchableOpacity, ScrollView, SafeAreaView} from "react-native"
import LoginStyle from "../styles/loginStyle"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Ionicons from "react-native-vector-icons/Ionicons"
import LoginSVG from "../assets/images/sampleLogo.svg"
import GoogleSVG from "../assets/images/google.svg"
import {AuthContext} from "../components/AuthContext"
import asyncStorage from "../components/AsyncStorage"
import DialogScreen from "./DialogScreen"


const LoginScreen = ({navigation}) => {
    const [visibility, setVisibility] = useState(true)
    const { loginValidation, dialogData } = useContext(AuthContext)
    const {handleEmail, handleLogin, handleGoogleSignIn, loginData, setLoginData} = loginValidation()
    const {loginRetrieve} = asyncStorage()
    
    useEffect(() => {
        loginRetrieve().then(data => setLoginData({
            ...loginData,
            email: data.email,
            password: data.password
        }))
        .catch(err => console.log(err))
    }, [])

    if(dialogData.showDialog) return <DialogScreen/>
    return(
        <SafeAreaView style={LoginStyle.SafeAreaView}>
            <ScrollView>
                <View style={LoginStyle.view1}>
                    <View style = {LoginStyle.view2}>
                        <TouchableOpacity onPress={() => navigation.navigate('Landing')}>
                            <LoginSVG height = {200} width = {200}/>
                        </TouchableOpacity>
                    </View>

                    <Text style = {LoginStyle.text}>Login</Text>

                    <View style = {LoginStyle.view3}>
                        <MaterialIcons name ='alternate-email' size={20} style = {LoginStyle.icon}/>
                        <TextInput 
                            underlineColorAndroid="transparent"
                            placeholder="Email"
                            value={loginData.email}
                            onChangeText={(text) => handleEmail(text)}
                            placeholderTextColor='#8A8A8A'
                            style = {LoginStyle.textInput} 
                            keyboardType = "email-address"
                            onBlur={() => {loginData.email.length == 0 ? setLoginData({...loginData, isValidEmail: false}) : null}}
                        />

                    </View>
                    {loginData.isValidEmail ? null :
                        <Text style = {LoginStyle.errorText}>
                            Enter a valid email address
                        </Text>
                    }
                    <View style = {LoginStyle.view3}>
                        <Ionicons name ='lock-closed-outline' size={20} style = {LoginStyle.icon}/>
                        <TextInput
                            underlineColorAndroid="transparent"
                            placeholder="Password"
                            value={loginData.password}
                            onChangeText={(text) => setLoginData({...loginData, password: text})}
                            placeholderTextColor='#8A8A8A'
                            style = {LoginStyle.textInput}
                            secureTextEntry = {visibility}
                        />
                        <TouchableOpacity onPress={() => {setVisibility(!visibility)}}>
                            {visibility? <MaterialIcons name="visibility-off" size ={20} style = {LoginStyle.icon}/>:
                            <MaterialIcons name="visibility" size ={20} style = {LoginStyle.icon}/>}
                        </TouchableOpacity>
                    </View>
                    <View style = {LoginStyle.view6}>
                    <TouchableOpacity onPress={() => {navigation.navigate('ResetPassword')}} style = {LoginStyle.forgotOpacity}>
                        <Text style = {LoginStyle.forgotPassword}>Forgot Password?</Text>
                    </TouchableOpacity>
                    </View>
                    <View style = {LoginStyle.view4}>
                        <Text style = {LoginStyle.view4Text}>Don't have an account?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Register')} style = {LoginStyle.signupOpacity}>
                            <Text style = {LoginStyle.signupText}> Sign up</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={() => {handleLogin()}} style = {LoginStyle.loginOpacity} >
                        <Text style = {LoginStyle.loginText}>Login</Text>
                    </TouchableOpacity>
                    <Text style = {LoginStyle.alternate}>Or login with ...</Text>
                    <View style = {LoginStyle.view5}>
                        <TouchableOpacity onPress={() => {handleGoogleSignIn()}}>
                            <GoogleSVG height = {40} width = {40}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default LoginScreen