/*
Concept: https://dribbble.com/shots/5476562-Forgot-Password-Verification/attachments
*/
import { Animated, SafeAreaView, View, Text, TouchableOpacity, useWindowDimensions } from 'react-native';
import React, { useState, useContext, useEffect } from 'react';
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoadingScreen from '../screens/LoadingScreen';
import ResendTimer from './ResendTimer';
import { AppStoreContext } from '../services/AppStoreContext';
import errors from '../utils/errors';
import ConfirmationCodeFieldComponentStyle, {
    ACTIVE_CELL_BG_COLOR,
    CELL_BORDER_RADIUS,
    CELL_SIZE,
    DEFAULT_CELL_BG_COLOR,
    NOT_EMPTY_CELL_BG_COLOR,
} from '../styles/confirmationCodeFieldComponentStyle';
import Snackbar from 'react-native-snackbar';

const { Value, Text: AnimatedText } = Animated;

const ConfirmationCodeFieldComponent = ({ navigation, CELL_COUNT, type }) => {
    const { width } = useWindowDimensions();
    const { newUserOnBoardingStore, appLoading, setAppLoading, resendTimeInterval, triggerTimer } =
        useContext(AppStoreContext);
    const { firebaseAuthenticationError } = errors();

    useEffect(() => {
        triggerTimer();
        return () => {
            clearInterval(resendTimeInterval);
        };
    }, []); //trigger timer when page mounts
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
        if (value.length < CELL_COUNT) {
            Snackbar.show({
                text: 'Please fill all the fields',
                duration: Snackbar.LENGTH_LONG,
                backgroundColor: 'red',
            });
            return;
        }
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
            if (newUserOnBoardingStore.PINHash === null) {
                if (newUserOnBoardingStore.hashPINCode(value)) {
                    navigation.push('SetPIN', { type: 'PIN' });
                } else {
                    Snackbar.show({
                        text: 'An error occurred, try again later',
                        duration: Snackbar.LENGTH_LONG,
                        backgroundColor: 'red',
                    });
                    return;
                }
            } else {
                if (newUserOnBoardingStore.hashPINCode(value)) {
                    //user will be automatically navigated to the main app since onBoarding is complete
                } else {
                    Snackbar.show({
                        text: 'PIN code is not valid',
                        duration: Snackbar.LENGTH_LONG,
                        backgroundColor: 'red',
                    });
                    return;
                }
            }
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
            {type === 'OTP' ? <ResendTimer /> : null}

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
