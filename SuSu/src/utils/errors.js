import Snackbar from 'react-native-snackbar';

const errors = () => {
    const firebaseAuthenticationError = (error) => {
        return error.code === 'auth/user-not-found'
            ? Snackbar.show({
                  text: 'User not found',
                  duration: Snackbar.LENGTH_LONG,
                  textColor: 'white',
                  backgroundColor: 'red',
              })
            : error.code === 'auth/wrong-password'
            ? Snackbar.show({
                  text: 'Wrong Password',
                  duration: Snackbar.LENGTH_LONG,
                  textColor: 'white',
                  backgroundColor: 'red',
              })
            : error.code === 'auth/too-many-requests'
            ? Snackbar.show({
                  text: 'Please try again later',
                  duration: Snackbar.LENGTH_LONG,
                  textColor: 'white',
                  backgroundColor: 'red',
              })
            : error.code === 'auth/network-request-failed'
            ? Snackbar.show({
                  text: 'Network request failed. Please check your internet connection',
                  duration: Snackbar.LENGTH_LONG,
                  textColor: 'white',
                  backgroundColor: 'red',
              })
            : error.code === 'auth/email-already-in-use'
            ? Snackbar.show({
                  text: 'Email already in use',
                  duration: Snackbar.LENGTH_LONG,
                  textColor: 'white',
                  backgroundColor: 'red',
              })
            : error.code === 'auth/invalid-email'
            ? Snackbar.show({
                  text: 'Invalid Email',
                  duration: Snackbar.LENGTH_LONG,
                  textColor: 'white',
                  backgroundColor: 'red',
              })
            : error.code === 'auth/invalid-verification-code'
            ? Snackbar.show({
                  text: 'Invalid code',
                  duration: Snackbar.LENGTH_LONG,
                  textColor: 'white',
                  backgroundColor: 'red',
              })
            : error.code === 'auth/session-expired'
            ? Snackbar.show({
                  text: 'Session expired, resend code',
                  duration: Snackbar.LENGTH_LONG,
                  backgroundColor: 'red',
              })
            : Snackbar.show({
                  text: 'Something went wrong, try again later',
                  duration: Snackbar.LENGTH_LONG,
                  backgroundColor: 'red',
              });
    };
    const RNImagePickerError = (response) => {
        return response.errorCode == 'camera_unavailable'
            ? Snackbar.show({
                  text: 'ImagePicker Error: Camera unavailable',
                  duration: Snackbar.LENGTH_LONG,
                  backgroundColor: 'red',
              })
            : response.errorCode == 'permission'
            ? Snackbar.show({
                  text: 'ImagePicker Error: Permission denied',
                  duration: Snackbar.LENGTH_LONG,
                  backgroundColor: 'red',
              })
            : response.errorCode == 'others'
            ? Snackbar.show({
                  text: 'An error occurred',
                  duration: Snackbar.LENGTH_LONG,
                  backgroundColor: 'red',
              })
            : response.didCancel
            ? Snackbar.show({
                  text: 'Select an image to continue',
                  duration: Snackbar.LENGTH_LONG,
                  backgroundColor: 'red',
              })
            : null;
    };
    return { firebaseAuthenticationError, RNImagePickerError };
};
export default errors;
