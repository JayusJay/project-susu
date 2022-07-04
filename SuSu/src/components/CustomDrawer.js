import React from 'react'
import {View, Text, ImageBackground, Image} from 'react-native'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'

const CustomDrawer = (props) => {
  return (
    <View style = {{flex: 1}} >
        <DrawerContentScrollView {...props} contentContainerStyle = {{backgroundColor: "#8200D6"}}>
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
        <View>
            <Text style = {{color: 'red'}}>Custom Text</Text>
        </View>
    </View>
  )
}
export default CustomDrawer