import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Share from 'react-native-share';
import Dialog from 'react-native-dialog';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import GroupCreationFinalStyle from '../styles/groupCreationFinalStyle';

const GroupCreationFinalScreen = ({ navigation }) => {
    const options = {
        title: 'Share via ',
        url: 'https://www.google.com/',
        message: `Jayus is inviting you to invest with them on SaveApp. Join them now!`,
    };
    const onShare = () => {
        Share.open(options)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    return (
        <SafeAreaView>
            <Dialog.Container
                visible={true}
                onBackdropPress={() => {
                    navigation.goBack();
                }}
            >
                <Dialog.Description style={GroupCreationFinalStyle.dialogInnerView.dialogDescription}>
                    You have successfully created your group, invite friends to invest with you.
                </Dialog.Description>
                <View style={GroupCreationFinalStyle.dialogInnerView}>
                    <View style={GroupCreationFinalStyle.dialogInnerView.innerView}>
                        <Ionicons
                            name="share-social-outline"
                            size={20}
                            color="#7966FF"
                            style={GroupCreationFinalStyle.dialogInnerView.innerView.icon}
                        />
                        <Dialog.Button
                            label="Invite friends"
                            color="#7966FF"
                            onPress={() => {
                                onShare();
                            }}
                        />
                    </View>
                    <View style={GroupCreationFinalStyle.dialogInnerView.innerView}>
                        <MaterialIcons
                            name="watch-later"
                            size={20}
                            color="#7966FF"
                            style={GroupCreationFinalStyle.dialogInnerView.innerView.icon}
                        />
                        <Dialog.Button
                            label="Later"
                            color="#7966FF"
                            onPress={() => {
                                navigation.popToTop();
                            }}
                        />
                    </View>
                </View>
            </Dialog.Container>
        </SafeAreaView>
    );
};

export default GroupCreationFinalScreen;
