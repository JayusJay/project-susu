import React, {useState} from 'react'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import {registrationValidation} from './inputValidation'


const register = (firstName, lastName, email, password, phoneNumber, dob) => {
    const {validData, setValidData} = registrationValidation()
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
        console.log("User created")
    })
    .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          alert('That email address is already in use!');
        }
    
        if (error.code === 'auth/invalid-email') {
          alert('That email address is invalid!');
        }
    })
    .finally(() => {
        console.log(validData.loader)
        setValidData({...validData, loader: false})
    })
}

export default register