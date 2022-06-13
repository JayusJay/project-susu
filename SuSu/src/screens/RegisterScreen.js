import React, {useState} from "react"
import {
    View, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    ScrollView, 
    SafeAreaView
} from "react-native"
import RegisterStyle from "../styles/RegisterStyle"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Ionicons from "react-native-vector-icons/Ionicons"
import {registrationValidation} from '../components/inputValidation'
import LoadingScreen from "./LoadingScreen"
import SVG from "../assets/images/sampleLogo.svg"
import GoogleSVG from "../assets/images/google.svg"

import DatePicker from 'react-native-date-picker'
const RegisterScreen = ({navigation}) => {
    const {
        handleFirstName, 
        handleLastName, 
        handleEmail, 
        handlePassword, 
        handleConfirmPassword, 
        handlePhoneNumber, 
        handleDateOfBirth, 
        handleSubmit, 
        validData, 
        setValidData,
    } = registrationValidation()

    const [open, setOpen] = useState(false)
    const [DoBLabel, setDoBLabel] = useState("Date of Birth")
    return(
        <SafeAreaView style={RegisterStyle.SafeAreaView}>
            {validData.loader? <LoadingScreen/> : null}
            <ScrollView>
                <View style={RegisterStyle.view1}>
                    <View style = {RegisterStyle.view2}>
                        <TouchableOpacity onPress={() => navigation.navigate('Landing')}>
                            <SVG height = {200} width = {200}/>
                        </TouchableOpacity>
                    </View>
                    <Text style = {RegisterStyle.text}>Register</Text>
                    <View style = {RegisterStyle.view3}>
                        <MaterialIcons name ='person-outline' size={20} style = {RegisterStyle.icon}/>
                        <TextInput
                            underlineColorAndroid="transparent"
                            placeholder="FirstName"
                            value={validData.firstName}
                            onChangeText={(text) => handleFirstName(text)}
                            placeholderTextColor='#8A8A8A'
                            style = {RegisterStyle.textInput}
                            onBlur={() => {validData.firstName.length == 0 ? setValidData({...validData, isValidFirstName: false}) : null}}
                        />
                    </View>
                    {validData.isValidFirstName ? null : 
                        <Text style = {RegisterStyle.errorText}>
                            First Name must be at least 3 characters long and contain no numbers
                        </Text>
                    }
                    
                    <View style = {RegisterStyle.view3}>
                        <MaterialIcons name ='person-outline' size={20} style = {RegisterStyle.icon}/>
                        <TextInput
                            underlineColorAndroid="transparent"
                            placeholder="LastName"
                            value={validData.lastName}
                            onChangeText={(text) => handleLastName(text)}
                            placeholderTextColor='#8A8A8A'
                            style = {RegisterStyle.textInput}
                            onBlur={() => {validData.lastName.length == 0 ? setValidData({...validData, isValidLastName: false}) : null}}
                        />
                    </View>  
                    {validData.isValidLastName ? null : 
                        <Text style = {RegisterStyle.errorText}>
                            Last Name must be at least 3 characters long and contain no numbers
                        </Text>
                    }   
                    <View style = {RegisterStyle.view3}>
                        <MaterialIcons name ='alternate-email' size={20} style = {RegisterStyle.icon}/>
                        <TextInput 
                            underlineColorAndroid="transparent"
                            placeholder="Email"
                            value={validData.email}
                            onChangeText={(text) => handleEmail(text)}
                            placeholderTextColor='#8A8A8A'
                            style = {RegisterStyle.textInput} 
                            keyboardType = "email-address"
                            onBlur={() => {validData.email.length == 0 ? setValidData({...validData, isValidEmail: false}) : null}}
                        />
                    </View>
                    {validData.isValidEmail ? null :
                        <Text style = {RegisterStyle.errorText}>
                            Enter a valid email address
                        </Text>
                    }
                    <View style = {RegisterStyle.view3}>
                        <MaterialIcons name = 'call' size={20} style = {RegisterStyle.icon}/>
                        <TextInput
                            underlineColorAndroid="transparent"
                            placeholder="Phone Number"
                            value={validData.phoneNumber}
                            onChangeText={(text) => handlePhoneNumber(text)}
                            placeholderTextColor='#8A8A8A'
                            style = {RegisterStyle.textInput}
                            keyboardType = "phone-pad"
                            onBlur={() => {validData.phoneNumber.length == 0 ? setValidData({...validData, isValidPhoneNumber: false}) : null}}
                        />
                    </View> 
                    {validData.isValidPhoneNumber ? null :
                        <Text style = {RegisterStyle.errorText}>
                            Enter a valid phone number
                        </Text>
                    } 
                    <View style = {RegisterStyle.view3}>
                        <Ionicons name ='lock-closed-outline' size={20} style = {RegisterStyle.icon}/>
                        <TextInput
                            underlineColorAndroid="transparent"
                            placeholder="Password"
                            value={validData.password}
                            onChangeText={(text) => handlePassword(text)}
                            placeholderTextColor='#8A8A8A'
                            style = {RegisterStyle.textInput}
                            secureTextEntry = {true}
                            onBlur={() => {validData.password.length == 0 ? setValidData({...validData, isValidPassword: false}) : null}}
                        />
                    </View>
                    {validData.isValidPassword ? null :
                        <Text style = {RegisterStyle.errorText}>
                            Password must be at least 8 characters long, contain at least one number and one special character
                        </Text>
                    }
                    <View style = {RegisterStyle.view3}>
                        <Ionicons name ='lock-closed-outline' size={20} style = {RegisterStyle.icon}/>
                        <TextInput
                            underlineColorAndroid="transparent"
                            placeholder="Confirm password"
                            value={validData.confirmPassword}
                            onChangeText={(text) => handleConfirmPassword(text)}
                            placeholderTextColor='#8A8A8A'
                            style = {RegisterStyle.textInput}
                            secureTextEntry = {true}
                            onBlur={() => {validData.confirmPassword.length == 0 ? setValidData({...validData, isValidConfirmPassword: false}) : null}}
                        /> 
                    </View>
                    {validData.isValidConfirmPassword ? null :
                        <Text style = {RegisterStyle.errorText}>
                            Passwords do not match
                        </Text>
                    }
                    <View style = {RegisterStyle.view3}>
                        <Ionicons name ='calendar-outline' size={20} style = {RegisterStyle.icon}/>
                        <TouchableOpacity onPress={() => setOpen(true)}>
                            <Text style = {RegisterStyle.DoBText}>{DoBLabel}</Text>
                            <DatePicker
                                modal
                                open={open}
                                date={validData.dateOfBirth}
                                mode={"date"}
                                androidVariant={"nativeAndroid"}
                                onConfirm={(date) => {
                                setOpen(false)
                                handleDateOfBirth(date)
                                setDoBLabel(date.toDateString())
                                }}
                                onCancel={() => {
                                setOpen(false)
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style = {RegisterStyle.view4}>
                        <Text style = {RegisterStyle.view4Text}>Already have an account?</Text>
                        <TouchableOpacity onPress={() => navigation.goBack()} style = {RegisterStyle.RegisterOpacity}>
                            <Text style = {RegisterStyle.RegisterText}> Login</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={() => {handleSubmit()}} style = {RegisterStyle.loginOpacity}>
                        <Text style = {RegisterStyle.loginText}>Register</Text>
                    </TouchableOpacity>
                    <Text style = {RegisterStyle.alternate}>Or SignUp with ...</Text>
                    <View style = {RegisterStyle.view5}>
                        <TouchableOpacity onPress={() => {}}>
                            <GoogleSVG height = {40} width = {40}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default RegisterScreen 