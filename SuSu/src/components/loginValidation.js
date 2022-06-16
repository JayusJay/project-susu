import auth from '@react-native-firebase/auth';
const loginValidation = () => {
    
    const handleLogOut = () => {
        auth()
        .signOut()
        .then(() => alert('User signed out!'));
    }
    return handleLogOut;
}
export default loginValidation;