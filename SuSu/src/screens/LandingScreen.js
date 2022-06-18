import React from "react";
import { Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import LandingStyle  from "../styles/landingStyle";

const Landing = ({navigation}) => {
    return (
        <SafeAreaView style={LandingStyle.SafeAreaView}>
            <View>
                <Text style = {LandingStyle.header}>Welcome to SaveApp</Text>
            </View>
            <View style = {LandingStyle.view2}>
            </View>
            <TouchableOpacity style = {LandingStyle.starterOpacity} onPress={() => navigation.navigate('Login')}> 
               <Text style = {LandingStyle.text}>Get Started</Text>
               <MaterialIcons name = 'arrow-forward' size={22} color="#fff"/>
            </TouchableOpacity>
        </SafeAreaView>

    );
}
export default Landing;
