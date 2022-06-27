import React, {useState, useContext} from "react"
import { SafeAreaView, TouchableOpacity, View } from "react-native"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Dialog from "react-native-dialog"
import { AuthContext } from "../components/AuthContext"
import DialogStyle from "../styles/dialogStyle"

const DialogScreen = () => {
    const [visibility, setVisibility] = useState(true)
    const {dialogData, setDialogData, loginValidation} = useContext(AuthContext)
    const {handleDialog} = loginValidation()
    return(
        <SafeAreaView >
            <Dialog.Container visible={true} style={DialogStyle.container}>
                <Dialog.Title style = {{color: "#AD40AF"}}>Login</Dialog.Title>
                <Dialog.Description>
                    You have an existing account with this email. Please enter your password to link accounts. 
                </Dialog.Description>
                <View style = {DialogStyle.view}>
                <Dialog.Input 
                    underlineColorAndroid="transparent"
                    placeholder="password"
                    value={dialogData.password}
                    onChangeText={(text) => setDialogData({...dialogData, password: text})}
                    secureTextEntry= {visibility}
                    style = {DialogStyle.textInput}
                />
                
                <TouchableOpacity onPress={() => {setVisibility(!visibility)}}>
                    {visibility? <MaterialIcons name="visibility-off" size ={20} style = {DialogStyle.icon}/>:
                    <MaterialIcons name="visibility" size ={20} style = {DialogStyle.icon}/>}
                </TouchableOpacity>
                </View>
                <Dialog.Button label="Cancel" onPress={() => {setDialogData({...dialogData, showDialog: false})}} />
                <Dialog.Button label="Continue" onPress={() => {handleDialog()}} disabled = {dialogData.password.length == 0 ? true : false}/>
            </Dialog.Container>
        </SafeAreaView>
    )
}
export default DialogScreen