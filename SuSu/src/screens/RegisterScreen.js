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
import SVG from "../assets/images/sampleLogo.svg"
import GoogleSVG from "../assets/images/google.svg"

import DatePicker from 'react-native-date-picker'
import register from '../components/register'

const RegisterScreen = ({navigation}) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [validData, setValidData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        phoneNumber: '',
        dateOfBirth: '',
        isValidFirstName: true,
        isValidLastName: true,
        isValidEmail: true,
        isValidPassword: true,
        isValidConfirmPassword: true,
        isValidPhoneNumber: true,
        isValidDateOfBirth: true,
    })

    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [DoBLabel, setDoBLabel] = useState("Date of Birth")
    return(
        <SafeAreaView style={RegisterStyle.SafeAreaView}>
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
                            value={firstName}
                            onChangeText={(text) => setFirstName(text)}
                            placeholderTextColor='#8A8A8A'
                            style = {RegisterStyle.textInput}
                        />
                    </View>
                    <View style = {RegisterStyle.view3}>
                        <MaterialIcons name ='person-outline' size={20} style = {RegisterStyle.icon}/>
                        <TextInput
                            underlineColorAndroid="transparent"
                            placeholder="LastName"
                            value={lastName}
                            onChangeText={(text) => setLastName(text)}
                            placeholderTextColor='#8A8A8A'
                            style = {RegisterStyle.textInput}
                        />
                    </View>     
                    <View style = {RegisterStyle.view3}>
                        <MaterialIcons name ='alternate-email' size={20} style = {RegisterStyle.icon}/>
                        <TextInput 
                            underlineColorAndroid="transparent"
                            placeholder="Email"
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                            placeholderTextColor='#8A8A8A'
                            style = {RegisterStyle.textInput} 
                            keyboardType = "email-address"
                        />
                    </View>
                    <View style = {RegisterStyle.view3}>
                        <MaterialIcons name = 'call' size={20} style = {RegisterStyle.icon}/>
                        <TextInput
                            underlineColorAndroid="transparent"
                            placeholder="Phone Number"
                            value={phoneNumber}
                            onChangeText={(text) => setPhoneNumber(text)}
                            placeholderTextColor='#8A8A8A'
                            style = {RegisterStyle.textInput}
                            keyboardType = "phone-pad"
                        />
                    </View>    
                    <View style = {RegisterStyle.view3}>
                        <Ionicons name ='lock-closed-outline' size={20} style = {RegisterStyle.icon}/>
                        <TextInput
                            underlineColorAndroid="transparent"
                            placeholder="Password"
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                            placeholderTextColor='#8A8A8A'
                            style = {RegisterStyle.textInput}
                            secureTextEntry = {true}
                        />
                    </View>
                    <View style = {RegisterStyle.view3}>
                        <Ionicons name ='lock-closed-outline' size={20} style = {RegisterStyle.icon}/>
                        <TextInput
                            underlineColorAndroid="transparent"
                            placeholder="Confirm password"
                            value={confirmPassword}
                            onChangeText={(text) => setConfirmPassword(text)}
                            placeholderTextColor='#8A8A8A'
                            style = {RegisterStyle.textInput}
                            secureTextEntry = {true}
                        /> 
                    </View>
                    <View style = {RegisterStyle.view3}>
                        <Ionicons name ='calendar-outline' size={20} style = {RegisterStyle.icon}/>
                        <TouchableOpacity onPress={() => setOpen(true)}>
                            <Text style = {RegisterStyle.DoBText}>{DoBLabel}</Text>
                            <DatePicker
                                modal
                                open={open}
                                date={date}
                                mode={"date"}
                                onConfirm={(date) => {
                                setOpen(false)
                                setDate(date)
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
                    <TouchableOpacity onPress={() => {register(firstName, lastName, email, password, phoneNumber, date)}} style = {RegisterStyle.loginOpacity}>
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