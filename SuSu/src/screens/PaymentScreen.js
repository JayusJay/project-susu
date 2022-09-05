import React, { useState } from 'react';
import { View, ScrollView, Text, Image, TouchableOpacity, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';
import PaymentStyle from '../styles/paymentStyle';

const PaymentScreen = ({ navigation, route }) => {
    if (typeof route.params.amountOwed === 'undefined') {
    }
    const [disabled, setDisabled] = useState(true);
    return (
        <ScrollView style={PaymentStyle.scrollable}>
            <SafeAreaView style={PaymentStyle.container}>
                <Text style={PaymentStyle.container.text}>Pay with...</Text>
                <Pressable
                    onPress={() => {
                        // console.log('Pressed pressable');
                        navigation.navigate('PaymentSummary');
                    }}
                >
                    <View style={PaymentStyle.optionsViews}>
                        <Image
                            source={require('../assets/images/mtn-momo.png')}
                            style={PaymentStyle.optionsViews.imageStyle}
                        />
                        <View style={PaymentStyle.optionsViews.innerView}>
                            <Text style={PaymentStyle.optionsViews.innerView.text1}>MTN Mobile Money</Text>
                            <Text style={PaymentStyle.optionsViews.innerView.text2}>Pay with MTN Mobile Money</Text>
                        </View>
                        <TouchableOpacity style={PaymentStyle.optionsViews.innerView.editIcon}>
                            <AntDesign name="edit" size={20} color="#8A8A8A" />
                        </TouchableOpacity>
                    </View>
                </Pressable>
                <Pressable onPress={() => {}} disabled={disabled}>
                    <View style={[PaymentStyle.optionsViews, disabled ? { opacity: 0.5 } : null]}>
                        <Image
                            source={require('../assets/images/visa-1.jpg')}
                            style={PaymentStyle.optionsViews.imageStyle}
                        />
                        <View style={PaymentStyle.optionsViews.innerView}>
                            <Text style={PaymentStyle.optionsViews.innerView.text1}>Credit Card</Text>

                            <Text style={PaymentStyle.optionsViews.innerView.text2}>Pay with Visa or MasterCard</Text>
                        </View>
                        <TouchableOpacity style={PaymentStyle.optionsViews.innerView.editIcon}>
                            <AntDesign name="edit" size={20} color="#8A8A8A" />
                        </TouchableOpacity>
                    </View>
                </Pressable>
            </SafeAreaView>
        </ScrollView>
    );
};
export default PaymentScreen;
