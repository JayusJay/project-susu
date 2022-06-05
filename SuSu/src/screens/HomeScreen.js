import React from "react";
import { Text, View, SafeAreaView, TouchableOpacity } from "react-native";
import HomeStyle  from "../styles/homeStyle";
const Home = ({navigation}) => {
    return (
        <SafeAreaView style={HomeStyle.SafeAreaView}>
            <View style = {HomeStyle.text}>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}> 
                <Text style = {{color: "red"}}>Login Screen</Text>
            </TouchableOpacity>
        </SafeAreaView>

    );
}
export default Home;

