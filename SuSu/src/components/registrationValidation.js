import { useState, useContext } from "react"
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import { AuthContext } from "../components/AuthContext"

const registrationValidation = () => {
    const { setLoading, } = useContext(AuthContext);
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
        isLoading: false,
        user: null,
    })
    
    const handleFirstName = (name) => {
        name = name.trim()
        let reg = new RegExp(/^[a-zA-Z]{3,16}$/).test(name)
        if(reg){
            setValidData({...validData, firstName: name, isValidFirstName: true})
        }
        else{
            setValidData({...validData, firstName: name, isValidFirstName: false})
        }
    }

    const handleLastName = (name) => {
        name = name.trim()
        let reg = new RegExp(/^[a-zA-Z]{3,16}$/).test(name)
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
        password = password.trim()
        let reg = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&,.])[A-Za-z\d@$!%*?&,.]{8,}$/).test(password)
        if(reg){
            setValidData({...validData, password: password, isValidPassword: true})
        }
        else{
            setValidData({...validData, password: password, isValidPassword: false})
        }
    }

    const handleConfirmPassword = (password) => {
        password = password.trim()
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
            setTimeout(() => {
                register(
                    validData.firstName, validData.lastName, validData.email, 
                    validData.password, validData.phoneNumber, validData.dateOfBirth
                )
            }, 5000)
        }
        else{
            alert('Please fill all the fields correctly')
        }
    }

    const register = (firstName, lastName, email, password, phoneNumber, dob) => {
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
                alert('Registration Successful')
            });
        })
        .catch(error => {
            (error.code === 'auth/weak-password') ? alert('That password is too weak!') : 
            (error.code === 'auth/email-already-in-use') ? alert('That email address is already in use!') : 
            (error.code === 'auth/invalid-email') ? alert('That email address is invalid!') : alert('Registration Failed')
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


export default registrationValidation