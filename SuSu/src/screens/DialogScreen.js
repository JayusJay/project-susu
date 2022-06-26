import React, {useContext} from "react"
import { SafeAreaView,  } from "react-native"
import Dialog from "react-native-dialog"
import { AuthContext } from "../components/authContext"

const DialogScreen = () => {
    const {showDialog, setShowDialog} = useContext(AuthContext)
    return(
        <SafeAreaView style={{flex: 1}}>
            <Dialog.Container visible={showDialog}>
                <Dialog.Title>Login</Dialog.Title>
                <Dialog.Description>
                    You have an existing account with this email. Please enter your password to link accounts. 
                </Dialog.Description>
                <Dialog.Input placeholder="password" />
                <Dialog.Button label="Cancel" onPress={() => {setShowDialog(false)}} />
                <Dialog.Button label="OK" onPress={() => {}} />
            </Dialog.Container>
        </SafeAreaView>
    )
}
export default DialogScreen