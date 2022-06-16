import Snackbar from 'react-native-snackbar';

const errors = () => {
    const firebaseAuthenticationError = (error) => {
        return(
            error.code === 'auth/user-not-found' ?  Snackbar.show({
                text: "User not found",
                duration: Snackbar.LENGTH_LONG,
                textColor: 'white',
                backgroundColor: 'red',
            }) : 
            error.code === 'auth/wrong-password' ?  Snackbar.show({
                text: "Wrong Password",
                duration: Snackbar.LENGTH_LONG,
                textColor: 'white',
                backgroundColor: 'red',
            }) :
            error.code === 'auth/too-many-requests' ?  Snackbar.show({
                text: "Please try again later",
                duration: Snackbar.LENGTH_LONG,
                textColor: 'white',
                backgroundColor: 'red',
            }) :
            error.code === 'auth/network-request-failed' ?  Snackbar.show({
                text: "Network request failed. Please check your internet connection",
                duration: Snackbar.LENGTH_LONG,
                textColor: 'white',
                backgroundColor: 'red',
            }) : 
            (error.code === 'auth/email-already-in-use') ? Snackbar.show({
                text: 'Email already in use',
                duration: Snackbar.LENGTH_LONG,
                textColor: 'white',
                backgroundColor: 'red',
            }) : 
            (error.code === 'auth/invalid-email') ? Snackbar.show({
                text: 'Invalid Email',
                duration: Snackbar.LENGTH_LONG,
                textColor: 'white',
                backgroundColor: 'red',
            }) : null
        )
    }
    return firebaseAuthenticationError
}
export default errors