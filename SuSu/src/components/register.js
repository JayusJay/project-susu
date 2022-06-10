import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'

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
                    alert('User added!');
                });
        console.log("User created")
    })
    .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }
    
        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
    
        console.error(error);
    })
}

export default register