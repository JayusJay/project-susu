import React, {useContext} from 'react'
import {View, Text, ImageBackground, Image, TouchableOpacity} from 'react-native'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AuthContext } from './AuthContext';

const CustomDrawer = (props) => {
  const { loginValidation } = useContext(AuthContext);
  const {handleLogOut} = loginValidation()
  return (
    <View style = {{flex: 1}} >
        <DrawerContentScrollView {...props} contentContainerStyle = {{backgroundColor: "#7966FF"}}>
            <ImageBackground 
            source = {require("../assets/images/background1.jpg")} 
            style = {{padding: 20}}>
                <Image source={require("../assets/images/profile.jpg")} 
                style = {{height: 80, width: 80, borderRadius: 40, marginBottom: 10}}/>
                <Text style = {{color: "#fff"}}>Jayus Jay</Text>
            </ImageBackground>
            <View style = {{flex: 1, backgroundColor: "#fff", paddingTop: 10}}>
                <DrawerItemList {...props}/>
            </View>
        </DrawerContentScrollView>
        <View style={{padding: 20, borderTopWidth: 1, borderColor: "#ccc"}}>
            <TouchableOpacity onPress = {() => {}}>
                <View style ={{flexDirection: "row", alignItems: "center"}}>
                    <Ionicons name='share-social-outline' color="#000" size={20}/>
                    <Text style = {{color: "#000", marginLeft: 5}}>Share</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress = {() => {handleLogOut()}} style = {{ marginTop: 15, marginBottom: -15}}>
                <View style ={{flexDirection: "row", alignItems: "center"}}>
                    <Ionicons name='exit-outline' color="#000" size={20}/>
                    <Text style = {{color: "#000", marginLeft: 5}}>Log Out</Text>
                </View>
            </TouchableOpacity>
        </View>
    </View>
  )
}
export default CustomDrawer