import { useState } from "react"
import register from "./register"
import login from "./login"

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
        loader: false,
    })
    
    const handleFirstName = (name) => {
        let reg = new RegExp(/^[a-zA-Z]{3,16}$/).test(name)
        if(reg){
            setValidData({...validData, firstName: name, isValidFirstName: true})
        }
        else{
            setValidData({...validData, firstName: name, isValidFirstName: false})
        }
    }

    const handleLastName = (name) => {
        let reg = new RegExp(/^[a-zA-Z]{3,16}$/).test(name)
        if(reg){
            setValidData({...validData, lastName: name, isValidLastName: true})
        }
        else{
            setValidData({...validData, lastName: name, isValidLastName: false})
        }
    }

    const handleEmail = (email) => {
        let reg = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(email)
        if(reg){
            setValidData({...validData, email: email, isValidEmail: true})
        }
        else{
            setValidData({...validData, email: email, isValidEmail: false})
        }
    }

    const handlePassword = (password) => {
        let reg = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&,.])[A-Za-z\d@$!%*?&,.]{8,}$/).test(password)
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
        if(validData.isValidFirstName &&
            validData.isValidLastName && 
            validData.isValidEmail && 
            validData.isValidPassword && 
            validData.isValidConfirmPassword && 
            validData.isValidPhoneNumber && 
            validData.isValidDateOfBirth &&
            validData.firstName !== '' && 
            validData.lastName !== '' && 
            validData.email !== '' && 
            validData.password !== '' && 
            validData.confirmPassword !== '' && 
            validData.phoneNumber !== '' && 
            validData.dateOfBirth !== ''){
            validData.loader = true
            register(
                validData.firstName, 
                validData.lastName, 
                validData.email, 
                validData.password, 
                validData.phoneNumber, 
                validData.dateOfBirth
            )
            setValidData({...validData, loader: false})

        }
        else{
            alert('Please fill all the fields correctly')
        }
    }


    return {
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
    }
}

const loginValidation = (data) => {

}
export {registrationValidation, loginValidation}