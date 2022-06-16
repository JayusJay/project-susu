import React, {useState, useEffect, createContext} from "react"
import Snackbar from 'react-native-snackbar';
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import errors from "./errors";

const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
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
                login(loginData.email, loginData.password)
            }
            else{
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
                Snackbar.show({
                    text: 'Login Successful',
                    duration: Snackbar.LENGTH_SHORT,
                    textColor: 'white',
                    backgroundColor: '#AD40AF',
                })
            })
            .catch(error => {
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
                resetPassword(resetEmail.email)
            }
            else{
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
            Snackbar.show({
                text: 'Password reset link has been sent to your email',
                duration: Snackbar.LENGTH_LONG,
                textColor: 'white',
                backgroundColor: '#AD40AF',
            })
        })
            .catch(error => {
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
        const [validData, setValidData] = useState({
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
        
        const handleFirstName = (name) => {
            let reg = new RegExp(/^[a-zA-Z ]{3,16}$/).test(name)
            if(reg){
                setValidData({...validData, firstName: name, isValidFirstName: true})
            }
            else{
                setValidData({...validData, firstName: name, isValidFirstName: false})
            }
        }
    
        const handleLastName = (name) => {
            let reg = new RegExp(/^[a-zA-Z ]{3,16}$/).test(name)
            if(reg){
                setValidData({...validData, lastName: name, isValidLastName: true})
            }
            else{
                setValidData({...validData, lastName: name, isValidLastName: false})
            }
        }
    
        const handleEmail = (email) => {
            email = email.trim()
            let reg = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(email)
            if(reg){
                setValidData({...validData, email: email, isValidEmail: true})
            }
            else{
                setValidData({...validData, email: email, isValidEmail: false})
            }
        }
    
        const handlePassword = (password) => {
            let reg = new RegExp(/^(?=.*[a-z ])(?=.*[A-Z ])(?=.*\d)(?=.*[@$!%*?&,.])[A-Za-z \d@$!%*?&,.]{8,}$/).test(password)
            if(reg){
                setValidData({...validData, password: password, isValidPassword: true})
            }
            else{
                setValidData({...validData, password: password, isValidPassword: false})
            }
        }
    
        const handleConfirmPassword = (password) => {
            if(password === validData.password){
                setValidData({...validData, confirmPassword: password, isValidConfirmPassword: true})
            }
            else{
                setValidData({...validData, confirmPassword: password, isValidConfirmPassword: false})
            }
        }
    
        const handlePhoneNumber = (phoneNumber) => {
            phoneNumber = phoneNumber.trim()
            let reg = new RegExp(/^[0-9]{10}$/).test(phoneNumber)
            if(reg){
                setValidData({...validData, phoneNumber: phoneNumber, isValidPhoneNumber: true})
            }
            else{
                setValidData({...validData, phoneNumber: phoneNumber, isValidPhoneNumber: false})
            }
        }
    
        const handleDateOfBirth = (dateOfBirth) => {
            setValidData({...validData, dateOfBirth: dateOfBirth, isValidDateOfBirth: true})
        }
    
        const handleSubmit = () => {
            if(validData.isValidFirstName && validData.isValidLastName && validData.isValidEmail && 
                validData.isValidPassword && validData.isValidConfirmPassword && validData.isValidPhoneNumber && 
                validData.isValidDateOfBirth && validData.firstName !== '' && validData.lastName !== '' && 
                validData.email !== '' && validData.password !== '' && validData.confirmPassword !== '' && 
                validData.phoneNumber !== '' && validData.dateOfBirth !== ''){
                    
                setLoading(true)
               // setTimeout(() => {
                    register(
                        validData.firstName, validData.lastName, validData.email, 
                        validData.password, validData.phoneNumber, validData.dateOfBirth
                    )
                //}, 5000)
            }
            else{
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
                    Snackbar.show({
                        text: 'Registration Successful',
                        duration: Snackbar.LENGTH_SHORT,
                        textColor: 'white',
                        backgroundColor: '#AD40AF',
                    })
                });
            })
            .catch(error => {
                firebaseAuthenticationError(error)   
            })
            .finally(() => {
                setLoading(false)
            })
        }
        
        return {
            handleFirstName, handleLastName, handleEmail, handlePassword, 
            handleConfirmPassword, handlePhoneNumber, handleDateOfBirth, 
            handleSubmit, validData, setValidData,
        }
    }

    return(
        <AuthContext.Provider value={{loginValidation, registrationValidation, loading, user}}>
            {children}
        </AuthContext.Provider>
    )
}
export {AuthContext, AuthProvider}