import React, {useState, useEffect, createContext} from "react"
import Snackbar from 'react-native-snackbar'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import errors from "./errors"
import asyncStorage from "./AsyncStorage"

const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    //This state navigates AuthStack's initial screen to the screen an error has occured on.
    const [screenError, setScreenError] = useState({
        loginError: false,
        resetError: false,
        registerError: false,
    });
    const firebaseAuthenticationError = errors()
    const onAuthStateChanged = (user) => {
      setUser(user);
      setLoading(false)
    }
    //prevent continous re-rendering
    useEffect(() => {
      const subscriber = auth().onAuthStateChanged(onAuthStateChanged)
      return subscriber
    } , [])
    

    /*#########################################################################################################
    #                                       LOGIN VALIDATIONS                                                 #
    #########################################################################################################*/
    const loginValidation = () => {
        const [loginData, setLoginData] = useState({
            email: '',
            password: '',
            isValidEmail: true,
        })
        const [resetEmail, setResetEmail] = useState({
            email: '',
            isValidEmail: true,
        });
        const {loginStore, loginRetrieve, loginRemove, resetStore, resetRetrieve, resetRemove} = asyncStorage()

        const handleEmail = (email) => {
            email = email.trim()
            let reg = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(email)
            if(reg){
                setLoginData({...loginData, email: email, isValidEmail: true})
            }
            else{
                setLoginData({...loginData, email: email, isValidEmail: false})
            }
        }

        const handleLogin = () => {
            if(loginData.isValidEmail && loginData.email !== '' && loginData.password !== ''){
                setLoading(true)
                loginStore(loginData)
                login(loginData.email, loginData.password)
            }
            else{
                setScreenError({loginError: true, resetError: false, registerError: false})
                loginRetrieve()
                .then(res => {
                    setLoginData({email: res.email, password: res.password, isValidEmail: true})
                })
                Snackbar.show({
                    text: 'Please fill all fields correctly',
                    duration: Snackbar.LENGTH_LONG,
                    textColor: 'white',
                    backgroundColor: 'red',
                })
            }
        }
        const login = (email, password) => {
            password = password.trim()
            auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                setScreenError({registerError: false, loginError: false, resetError: false})
                Snackbar.show({
                    text: 'Login Successful',
                    duration: Snackbar.LENGTH_SHORT,
                    textColor: 'white',
                    backgroundColor: '#AD40AF',
                })
            })
            .catch(error => {
                setScreenError({loginError: true, registerError: false, resetError: false})
                loginRetrieve()
                .then((res) => {
                    console.log(`Response: ${JSON.stringify(res.email)}`)

                    setLoginData({email: res.email, password: res.password, isValidEmail: true})
                })
                firebaseAuthenticationError(error)
            })
            .finally(() => {
                setLoading(false)
            })
        }

        //################################## RESET PASSWORD BEGINS #################################################

        const handleResetEmail = (email) => {
            email = email.trim()
            let reg = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(email)
            if(reg){
                setResetEmail({...resetEmail, email: email, isValidEmail: true})
            }
            else{
                setResetEmail({...resetEmail, email: email, isValidEmail: false})
            }   
        }
        const handleResetPassword = () => {
            if(resetEmail.isValidEmail && resetEmail.email !== ''){
                setLoading(true)
                resetStore(resetEmail)
                resetPassword(resetEmail.email)
            }
            else{
                setScreenError({resetError: true, registerError: false, loginError: false})
                Snackbar.show({
                    text: 'Please enter a valid email',
                    duration: Snackbar.LENGTH_LONG,
                    textColor: 'white',
                    backgroundColor: 'red',
                })
            }
        }
        const resetPassword = (email) => {
            auth().sendPasswordResetEmail(email)
            .then(() => {
                //reset error screen
                setScreenError({registerError: false, loginError: false, resetError: false})
                Snackbar.show({
                    text: 'Password reset link has been sent to your email',
                    duration: Snackbar.LENGTH_LONG,
                    textColor: 'white',
                    backgroundColor: '#AD40AF',
                })
            })
            .catch(error => {
                setScreenError({resetError: true, registerError: false, loginError: false})
                firebaseAuthenticationError(error)
            })
            .finally(() => {
                setLoading(false)
            })
        }

        //################################## RESET PASSWORD ENDS #################################################

        const handleLogOut = () => {
            auth()
            .signOut()
            .then(() => Snackbar.show({
                text: 'User signed out',
                duration: Snackbar.LENGTH_SHORT,
                textColor: 'white',
                backgroundColor: '#AD40AF',
            }));
        }
        return {handleEmail, handleLogin, handleLogOut, handleResetEmail, 
            handleResetPassword, loginData, setLoginData, resetEmail, setResetEmail
        }
    }


    /*#########################################################################################################
    #                                       REGISTRATION VALIDATIONS                                          #
    #########################################################################################################*/

    const registrationValidation = () => {
        const [registerData, setRegisterData] = useState({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            phoneNumber: '',
            dateOfBirth: new Date(),
            isValidFirstName: true,
            isValidLastName: true,
            isValidEmail: true,
            isValidPassword: true,
            isValidConfirmPassword: true,
            isValidPhoneNumber: true,
            isValidDateOfBirth: true,
        })

        const {registrationStore, registrationRetrieve, registrationRemove} = asyncStorage()
        
        const handleFirstName = (name) => {
            let reg = new RegExp(/^[a-zA-Z ]{3,16}$/).test(name)
            if(reg){
                setRegisterData({...registerData, firstName: name, isValidFirstName: true})
            }
            else{
                setRegisterData({...registerData, firstName: name, isValidFirstName: false})
            }
        }
    
        const handleLastName = (name) => {
            let reg = new RegExp(/^[a-zA-Z ]{3,16}$/).test(name)
            if(reg){
                setRegisterData({...registerData, lastName: name, isValidLastName: true})
            }
            else{
                setRegisterData({...registerData, lastName: name, isValidLastName: false})
            }
        }
    
        const handleEmail = (email) => {
            email = email.trim()
            let reg = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(email)
            if(reg){
                setRegisterData({...registerData, email: email, isValidEmail: true})
            }
            else{
                setRegisterData({...registerData, email: email, isValidEmail: false})
            }
        }
    
        const handlePassword = (password) => {
            let reg = new RegExp(/^(?=.*[a-z ])(?=.*[A-Z ])(?=.*\d)(?=.*[@$!%*?&,.])[A-Za-z \d@$!%*?&,.]{8,}$/).test(password)
            if(reg){
                setRegisterData({...registerData, password: password, isValidPassword: true})
            }
            else{
                setRegisterData({...registerData, password: password, isValidPassword: false})
            }
        }
    
        const handleConfirmPassword = (password) => {
            if(password === registerData.password){
                setRegisterData({...registerData, confirmPassword: password, isValidConfirmPassword: true})
            }
            else{
                setRegisterData({...registerData, confirmPassword: password, isValidConfirmPassword: false})
            }
        }
    
        const handlePhoneNumber = (phoneNumber) => {
            phoneNumber = phoneNumber.trim()
            let reg = new RegExp(/^[0-9]{10}$/).test(phoneNumber)
            if(reg){
                setRegisterData({...registerData, phoneNumber: phoneNumber, isValidPhoneNumber: true})
            }
            else{
                setRegisterData({...registerData, phoneNumber: phoneNumber, isValidPhoneNumber: false})
            }
        }
    
        const handleDateOfBirth = (dateOfBirth) => {
            setRegisterData({...registerData, dateOfBirth: dateOfBirth, isValidDateOfBirth: true})
        }
    
        const handleSubmit = () => {
            if(registerData.isValidFirstName && registerData.isValidLastName && registerData.isValidEmail && 
                registerData.isValidPassword && registerData.isValidConfirmPassword && registerData.isValidPhoneNumber && 
                registerData.isValidDateOfBirth && registerData.firstName !== '' && registerData.lastName !== '' && 
                registerData.email !== '' && registerData.password !== '' && registerData.confirmPassword !== '' && 
                registerData.phoneNumber !== '' && registerData.dateOfBirth !== ''){
                    
                setLoading(true)
                registrationStore(registerData)
               // setTimeout(() => {
                    register(
                        registerData.firstName, registerData.lastName, registerData.email, 
                        registerData.password, registerData.phoneNumber, registerData.dateOfBirth
                    )
                //}, 5000)
            }
            else{
                setScreenError({registerError: true, loginError: false, resetError: false})
                Snackbar.show({
                    text: 'Please fill all fields correctly',
                    duration: Snackbar.LENGTH_LONG,
                    textColor: 'white',
                    backgroundColor: 'red',
                })
            }
        }
        //register user to firebase 
        const register = (firstName, lastName, email, password, phoneNumber, dob) => {
            firstName = firstName.trim(); lastName = lastName.trim(); password = password.trim();
            auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
                firestore()
                .collection('users')
                .add({
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    phoneNumber: phoneNumber,
                    dob: dob,
                })
                .then(() => {
                    //reset error state
                    setScreenError({registerError: false, loginError: false, resetError: false})
                    Snackbar.show({
                        text: 'Registration Successful',
                        duration: Snackbar.LENGTH_SHORT,
                        textColor: 'white',
                        backgroundColor: '#AD40AF',
                    })
                });
            })
            .catch(error => {
                setScreenError({registerError: true, loginError: false, resetError: false})
                firebaseAuthenticationError(error)   
            })
            .finally(() => {
                setLoading(false)
            })
        }
        
        return {
            handleFirstName, handleLastName, handleEmail, handlePassword, 
            handleConfirmPassword, handlePhoneNumber, handleDateOfBirth, 
            handleSubmit, registerData, setRegisterData,
        }
    }

    return(
        <AuthContext.Provider value={{loginValidation, registrationValidation, loading, user, screenError}}>
            {children}
        </AuthContext.Provider>
    )
}
export {AuthContext, AuthProvider}