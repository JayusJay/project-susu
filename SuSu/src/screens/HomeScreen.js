import React, {useContext} from 'react'
import { SafeAreaView, Text, TouchableOpacity} from 'react-native'
import { AuthContext } from '../components/AuthContext';
import HomeStyle from '../styles/homeStyle'


const HomeScreen = () => {
  const { loginValidation } = useContext(AuthContext);
  const {handleLogOut} = loginValidation()
  return (
    <SafeAreaView style = {HomeStyle.SafeAreaView}>
        <Text style = {HomeStyle.Text}>HomeScreen</Text>
        <TouchableOpacity onPress={() => {handleLogOut()}} style = {HomeStyle.logoutOpacity}>
        <Text style = {{color: "#fff"}}>Log Out</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}
export default HomeScreen