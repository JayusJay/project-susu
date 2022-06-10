import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'

const login = () => {
    auth()
    .signInWithEmailAndPassword(email, password)
}
export default login