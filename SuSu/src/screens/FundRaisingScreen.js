import React from 'react';
import { Text, TouchableOpacity, PermissionsAndroid } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Contacts from 'react-native-contacts';

const button = () => {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {})
        .then((res) => {
            console.log('Permission: ', res);
            Contacts.getAll()
                .then((contacts) => {
                    // work with contacts
                    let phoneNumbers = [];
                    contacts.map((contact) => {
                        if (contact.phoneNumbers.length > 0) {
                            contact.phoneNumbers.map((number) => {
                                phoneNumbers.push(number.number);
                            });
                        }
                    });
                    console.log(phoneNumbers);
                    //send phone numbers to cloud functions
                })
                .catch((e) => {
                    console.log(e);
                });
        })
        .catch((error) => {
            console.error('Permission error: ', error);
        });
};
const FundRaisingScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: 'red' }}>FundRaiser Screen</Text>
            <TouchableOpacity
                onPress={() => {
                    button();
                }}
            >
                <Text style={{ color: 'red' }}>CONTACTS</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default FundRaisingScreen;
