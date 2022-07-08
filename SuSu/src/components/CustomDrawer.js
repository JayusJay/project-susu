import React, { useContext } from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AuthContext } from './AuthContext';
import customDrawerStyle from '../styles/customDrawerStyle';

const CustomDrawer = (props) => {
    const { loginValidation } = useContext(AuthContext);
    const { handleLogOut } = loginValidation();
    return (
        <View style={customDrawerStyle.view1}>
            <DrawerContentScrollView {...props} contentContainerStyle={{ backgroundColor: '#7966FF' }}>
                <ImageBackground
                    source={require('../assets/images/background1.jpg')}
                    style={customDrawerStyle.backgroundImage}
                >
                    <Image source={require('../assets/images/profile.jpg')} style={customDrawerStyle.image} />
                    <Text style={{ color: '#fff' }}>Jayus Jay</Text>
                </ImageBackground>
                <View style={customDrawerStyle.view2}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
            <View style={customDrawerStyle.view3}>
                <TouchableOpacity onPress={() => {}}>
                    <View style={customDrawerStyle.touchableView}>
                        <Ionicons name="share-social-outline" color="#000" size={20} />
                        <Text style={customDrawerStyle.touchableText}>Share</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        handleLogOut();
                    }}
                    style={{ marginTop: 15, marginBottom: -5 }}
                >
                    <View style={customDrawerStyle.touchableView}>
                        <Ionicons name="exit-outline" color="#000" size={20} />
                        <Text style={customDrawerStyle.touchableText}>Log Out</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};
export default CustomDrawer;
