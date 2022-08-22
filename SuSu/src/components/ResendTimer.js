import React, { useState, useContext } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import Snackbar from 'react-native-snackbar';
import { AppStoreContext } from '../services/AppStoreContext';
import ResendTimerComponentStyle from '../styles/resendTimerComponentStyle';

const ResendTimer = ({}) => {
    const { newUserOnBoardingStore, timer, triggerTimer } = useContext(AppStoreContext);
    const [resendLoading, setResendLoading] = useState(false);
    const [resendCount, setResendCount] = useState(1);

    const resendCode = async () => {
        console.log('resendCount', resendCount);
        if (resendCount > 3) {
            Snackbar.show({
                text: 'You have reached the maximum number of resends, try again later',
                duration: Snackbar.LENGTH_LONG,
                backgroundColor: 'red',
            });
            return;
        }
        setResendLoading(true);
        if (await newUserOnBoardingStore.sendFirebaseOTP('resend')) {
            triggerTimer();
            setResendLoading(false);
            setResendCount(resendCount + 1);
            Snackbar.show({
                text: 'Code sent successfully',
                duration: Snackbar.LENGTH_SHORT,
                backgroundColor: '#7966FF',
            });
        }
    };
    return (
        <View>
            <Text style={ResendTimerComponentStyle.resendText}>
                Resend verification code in{' '}
                {timer.activeResend ? ( //we can resend code
                    resendLoading ? (
                        <ActivityIndicator size="small" color="#7966FF" />
                    ) : (
                        <Text style={ResendTimerComponentStyle.urlText} onPress={resendCode}>
                            Resend
                        </Text>
                    )
                ) : (
                    <Text>{timer.timeLeft}s</Text>
                )}
            </Text>
        </View>
    );
};
export default ResendTimer;
