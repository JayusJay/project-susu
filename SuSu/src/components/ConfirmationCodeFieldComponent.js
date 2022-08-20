/*
Concept: https://dribbble.com/shots/5476562-Forgot-Password-Verification/attachments
*/
import { Animated, SafeAreaView, View, Text, TouchableOpacity, useWindowDimensions } from 'react-native';
import React, { useState, useContext } from 'react';
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoadingScreen from '../screens/LoadingScreen';
import { AppStoreContext } from '../services/AppStoreContext';
import errors from '../utils/errors';
import ConfirmationCodeFieldComponentStyle, {
    ACTIVE_CELL_BG_COLOR,
    CELL_BORDER_RADIUS,
    CELL_SIZE,
    DEFAULT_CELL_BG_COLOR,
    NOT_EMPTY_CELL_BG_COLOR,
} from '../styles/confirmationCodeFieldComponentStyle';

const { Value, Text: AnimatedText } = Animated;

const ConfirmationCodeFieldComponent = ({ navigation, CELL_COUNT, type }) => {
    const { width } = useWindowDimensions();
    const { newUserOnBoardingStore, appLoading, setAppLoading } = useContext(AppStoreContext);
    const { firebaseAuthenticationError } = errors();

    const animationsColor = [...new Array(CELL_COUNT)].map(() => new Value(0));
    const animationsScale = [...new Array(CELL_COUNT)].map(() => new Value(1));
    const animateCell = ({ hasValue, index, isFocused }) => {
        Animated.parallel([
            Animated.timing(animationsColor[index], {
                useNativeDriver: false,
                toValue: isFocused ? 1 : 0,
                duration: 250,
            }),
            Animated.spring(animationsScale[index], {
                useNativeDriver: false,
                toValue: hasValue ? 0 : 1,
                duration: hasValue ? 300 : 250,
            }),
        ]).start();
    };
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    const renderCell = ({ index, symbol, isFocused }) => {
        const hasValue = Boolean(symbol);
        const animatedCellStyle = {
            backgroundColor: hasValue
                ? animationsScale[index].interpolate({
                      inputRange: [0, 1],
                      outputRange: [NOT_EMPTY_CELL_BG_COLOR, ACTIVE_CELL_BG_COLOR],
                  })
                : animationsColor[index].interpolate({
                      inputRange: [0, 1],
                      outputRange: [DEFAULT_CELL_BG_COLOR, ACTIVE_CELL_BG_COLOR],
                  }),
            borderRadius: animationsScale[index].interpolate({
                inputRange: [0, 1],
                outputRange: [CELL_SIZE, CELL_BORDER_RADIUS],
            }),
            transform: [
                {
                    scale: animationsScale[index].interpolate({
                        inputRange: [0, 1],
                        outputRange: [0.2, 1],
                    }),
                },
            ],
        };

        // Run animation on next event loop tik
        // Because we need first return new style prop and then animate this value
        setTimeout(() => {
            animateCell({ hasValue, index, isFocused });
        }, 0);

        return (
            <AnimatedText
                key={index}
                style={[ConfirmationCodeFieldComponentStyle.cell, animatedCellStyle]}
                onLayout={getCellOnLayoutHandler(index)}
            >
                {symbol || (isFocused ? <Cursor /> : null)}
            </AnimatedText>
        );
    };
    const handleButton = async (type) => {
        if (type === 'OTP') {
            setAppLoading(true);
            const response = await newUserOnBoardingStore.verifyOTPCode(value);
            console.log('Response: ', response);
            try {
                setAppLoading(false);
                if (response.code.startsWith('auth/')) {
                    firebaseAuthenticationError(response);
                    return;
                }
            } catch (error) {} //ignore error
            setValue(''); //reset value
            newUserOnBoardingStore.setStateValue('confirmationCode', null); //reset confirmationCode
            AsyncStorage.setItem('initialScreen', 'SetPIN');

            navigation.replace('SetPIN'); //don't allow user to go back to previous screens
        } else {
            //type === PIN
        }
    };
    if (appLoading) return <LoadingScreen />;
    return (
        <SafeAreaView style={[ConfirmationCodeFieldComponentStyle.root, { width: width - 40 }]}>
            <CodeField
                ref={ref}
                {...props}
                value={value}
                onChangeText={setValue}
                cellCount={CELL_COUNT}
                rootStyle={ConfirmationCodeFieldComponentStyle.codeFieldRoot}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                renderCell={renderCell}
            />
            <Text style={ConfirmationCodeFieldComponentStyle.resendText}>Resend verification code in</Text>

            <TouchableOpacity
                onPress={async () => {
                    handleButton(type);
                }}
                style={ConfirmationCodeFieldComponentStyle.buttonTouchable}
            >
                <View style={ConfirmationCodeFieldComponentStyle.buttonTouchable.innerView}>
                    <Text style={ConfirmationCodeFieldComponentStyle.buttonTouchable.innerView.text}>Continue</Text>
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default ConfirmationCodeFieldComponent;
