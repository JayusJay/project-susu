import React, { useContext } from 'react';
import { View, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../services/AuthContext';
import { AppStoreContext } from '../services/AppStoreContext';
import customDrawerStyle from '../styles/customDrawerStyle';

const CustomDrawer = (props) => {
    const { loginValidation } = useContext(AuthContext);
    const { appStore } = useContext(AppStoreContext);
    const { handleLogOut } = loginValidation();
    return (
        <View style={customDrawerStyle.view1}>
            <DrawerContentScrollView {...props} contentContainerStyle={{ backgroundColor: '#7966FF' }}>
                <View style={customDrawerStyle.imageView}>
                    <Image source={require('../assets/images/profile.jpg')} style={customDrawerStyle.image} />
                    <View style={customDrawerStyle.imageView.innerView}>
                        <Text style={customDrawerStyle.imageView.innerView.greetingText}>Welcome back,</Text>
                        <Text style={customDrawerStyle.imageView.innerView.nameText}>
                            {appStore.userData === null ? (
                                <ActivityIndicator size="small" color="#7966FF" />
                            ) : (
                                appStore.userData.firstName
                            )}
                        </Text>
                    </View>
                </View>
                <View style={customDrawerStyle.view2}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
            <View style={customDrawerStyle.view3}>
                <TouchableOpacity onPress={() => {}} style={customDrawerStyle.view3.shareTouchable}>
                    <View style={customDrawerStyle.touchableView}>
                        <Ionicons name="share-social-outline" color="#000" size={20} />
                        <Text style={customDrawerStyle.touchableText}>Share</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        handleLogOut();
                    }}
                    style={customDrawerStyle.view3.logoutTouchable}
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
