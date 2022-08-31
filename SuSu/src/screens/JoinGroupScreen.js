import React, { useContext } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Dialog from 'react-native-dialog';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Snackbar from 'react-native-snackbar';
import { AppStoreContext } from '../services/AppStoreContext';
import LoadingScreen from './LoadingScreen';
import JoinGroupStyle from '../styles/joinGroupStyle';

const JoinGroupScreen = ({ navigation, route }) => {
    const { groupCreationStore, appLoading, setAppLoading } = useContext(AppStoreContext);
    const groupID = route.params.id;

    if (appLoading) return <LoadingScreen />;
    return (
        <SafeAreaView>
            <Dialog.Container
                visible={true}
                onBackdropPress={() => {
                    // navigation.navigate('Drawer');
                }}
            >
                <Dialog.Description style={JoinGroupStyle.dialogInnerView.dialogDescription}>
                    You have been invited to join #name investment group.
                </Dialog.Description>
                <View style={JoinGroupStyle.dialogInnerView}>
                    <View style={JoinGroupStyle.dialogInnerView.innerView}>
                        <AntDesign
                            name="frowno"
                            size={20}
                            color="#7966FF"
                            style={JoinGroupStyle.dialogInnerView.innerView.icon}
                        />
                        <Dialog.Button
                            label="Can't make it"
                            color="#7966FF"
                            onPress={() => {
                                //onShare();
                            }}
                        />
                    </View>
                    <View style={JoinGroupStyle.dialogInnerView.innerView}>
                        <Ionicons
                            name="enter-outline"
                            size={20}
                            color="#7966FF"
                            style={JoinGroupStyle.dialogInnerView.innerView.icon}
                        />
                        <Dialog.Button
                            label="Join"
                            color="#7966FF"
                            onPress={async () => {
                                setAppLoading(true);
                                if (await groupCreationStore.addGroupMember(groupID)) {
                                    setAppLoading(false);
                                    Snackbar.show({
                                        text: 'You have successfully joined the group',
                                        duration: Snackbar.LENGTH_SHORT,
                                        backgroundColor: '#7966FF',
                                    });
                                    navigation.navigate('Drawer');
                                } else {
                                    setAppLoading(false);
                                    Snackbar.show({
                                        text: 'Something went wrong',
                                        duration: Snackbar.LENGTH_LONG,
                                        backgroundColor: 'red',
                                    });
                                }
                            }}
                        />
                    </View>
                </View>
            </Dialog.Container>
        </SafeAreaView>
    );
};

export default JoinGroupScreen;
