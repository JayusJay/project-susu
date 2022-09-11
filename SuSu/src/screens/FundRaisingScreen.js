import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import notifee from '@notifee/react-native';

const FundRaisingScreen = () => {
    async function onDisplayNotification() {
        // Request permissions (required for iOS)
        //await notifee.requestPermission();

        // Create a channel (required for Android)
        const channelId = await notifee.createChannel({
            id: 'default',
            name: 'Default Channel',
        });

        // Display a notification
        await notifee.displayNotification({
            title: 'New Contact',
            body: 'Jonathan has joined SaveApp, invite them to save with you.',
            android: {
                channelId,
                //smallIcon: 'name-of-a-small-icon', // optional, defaults to 'ic_launcher'.
                // pressAction is needed if you want the notification to open the app when pressed
                actions: [
                    {
                        title: 'Invite',
                        pressAction: {
                            id: 'default',
                        },
                    },
                    {
                        title: 'Dismiss',
                        pressAction: {
                            id: 'default',
                        },
                    },
                ],
            },
        });
    }
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: 'red' }}>FundRaiser Screen</Text>
            <TouchableOpacity
                onPress={() => {
                    onDisplayNotification();
                }}
            >
                <Text style={{ color: 'white', padding: 20, backgroundColor: '#7966FF' }}>CONTACTS</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default FundRaisingScreen;
