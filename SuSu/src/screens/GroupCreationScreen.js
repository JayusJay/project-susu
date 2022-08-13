import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, TextInput, Image, PermissionsAndroid } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Dialog from 'react-native-dialog';
import DatePicker from 'react-native-date-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import errors from '../utils/errors';
import GroupCreationStyle from '../styles/groupCreationStyle';

const photoOptions = {
    mediaType: 'photo',
    cameraType: 'back',
    maxWidth: 500,
    maxHeight: 500,
    //saveToPhotos: true,
};
const GoalCreationScreen = ({ navigation }) => {
    const { RNImagePickerError } = errors();
    const [groupData, setGroupData] = useState({
        name: '',
        seedAmount: 0,
        imageUri: '../assets/images/group.png',
        epoch: new Date(),
        isName: true,
        isSeedAmount: true,
    });
    const [dialogVisible, setDialogVisible] = useState(false);
    const [open, setOpen] = useState(false);
    const [DoBLabel, setDoBLabel] = useState('Savings epoch');
    const handleValidation = (type, text) => {
        if (type === 'name') {
            let reg = new RegExp(/^[a-zA-Z0-9 ]+$/).test(text);
            if (reg) {
                setGroupData({ ...groupData, name: text, isName: true });
            } else {
                setGroupData({ ...groupData, name: text, isName: false });
            }
        } else {
            let reg = new RegExp(/^\d*\.?\d{0,2}$/).test(text);
            if (reg) {
                setGroupData({ ...groupData, seedAmount: text, isSeedAmount: true });
            } else {
                setGroupData({ ...groupData, seedAmount: text, isSeedAmount: false });
            }
        }
    };
    const handlePhoto = (type) => {
        if (type === 'camera') {
            PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA, {})
                .then(() => {
                    launchCamera(photoOptions, (response) => {
                        if (
                            response.errorCode == 'camera_unavailable' ||
                            response.errorCode == 'permission' ||
                            response.errorCode == 'others' ||
                            response.didCancel
                        ) {
                            RNImagePickerError(response);
                        } else {
                            setGroupData({
                                ...groupData,
                                imageUri: response.assets[0].uri,
                                isImage: true,
                            });
                            setDialogVisible(false);
                        }
                    });
                })
                .catch((err) => {
                    Snackbar.show({
                        text: 'ImagePicker Error: ' + err,
                        duration: Snackbar.LENGTH_LONG,
                        backgroundColor: 'red',
                    });
                });
        } else {
            launchImageLibrary(photoOptions, (response) => {
                if (
                    response.errorCode == 'camera_unavailable' ||
                    response.errorCode == 'permission' ||
                    response.errorCode == 'others' ||
                    response.didCancel
                ) {
                    RNImagePickerError(response);
                } else {
                    setGroupData({
                        ...groupData,
                        imageUri: response.assets[0].uri,
                        isImage: true,
                    });
                    setDialogVisible(false);
                }
            });
        }
    };
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={GroupCreationStyle.scrollable}>
            <SafeAreaView style={GroupCreationStyle.container}>
                <View style={GroupCreationStyle.header}>
                    <View style={GroupCreationStyle.profileView}>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.goBack();
                            }}
                            style={GroupCreationStyle.backButton}
                        >
                            <Ionicons name="arrow-back-outline" size={30} color="white" />
                        </TouchableOpacity>
                        <View style={GroupCreationStyle.profileView.textView}>
                            <Text style={GroupCreationStyle.profileView.text}>Create Group</Text>
                        </View>
                    </View>
                </View>
                <View style={GroupCreationStyle.footer}>
                    <View style={{ alignSelf: 'center', marginTop: 10, marginBottom: 10 }}>
                        <Image
                            source={
                                require('../assets/images/group.png')
                                // !groupData.isImage
                                //     ? goalCreationStore.image === '' ||
                                //       goalCreationStore.image.startsWith('../../assets')
                                //         ? { uri: 'https://placehold.jp/150x150.png' }
                                //         : { uri: goalCreationStore.image }
                                //     : { uri: groupData.image }
                            }
                            style={GroupCreationStyle.image}
                        />
                    </View>
                    <View style={GroupCreationStyle.imageView}>
                        <TouchableOpacity
                            onPress={() => {
                                setDialogVisible(true);
                            }}
                            style={GroupCreationStyle.imageView.imageTouchable}
                        >
                            <MaterialIcons name="add-a-photo" size={35} color="#7966FF" />
                        </TouchableOpacity>
                    </View>
                    <Text style={{ color: '#7966FF', alignSelf: 'center' }}>Add a group picture</Text>
                    <View style={GroupCreationStyle.textInputView}>
                        <MaterialIcons name="groups" size={25} color="#7966FF" style={{ padding: 12 }} />
                        <TextInput
                            underlineColorAndroid="transparent"
                            placeholder="Group name"
                            value={groupData.name}
                            onChangeText={(text) => {
                                handleValidation('name', text);
                            }}
                            placeholderTextColor="#8A8A8A"
                            style={GroupCreationStyle.textInputView.textInput}
                            onBlur={() => {
                                handleValidation('name', groupData.name);
                            }}
                        />
                    </View>
                    {!groupData.isName ? <Text style={{ color: 'red' }}>Please enter a valid name</Text> : null}

                    <View style={GroupCreationStyle.textInputView}>
                        <Text style={GroupCreationStyle.textInputView.cediSymbol}>{'\u20B5'}</Text>
                        <TextInput
                            underlineColorAndroid="transparent"
                            placeholder="Seed amount"
                            value={groupData.seedAmount}
                            onChangeText={(text) => {
                                handleValidation('seedAmount', text);
                            }}
                            placeholderTextColor="#8A8A8A"
                            keyboardType="numeric"
                            style={GroupCreationStyle.textInputView.textInput}
                            onBlur={() => {
                                groupData.seedAmount === 0 || groupData.seedAmount === ''
                                    ? setGroupData({ ...groupData, seedAmount: 0, isSeedAmount: false })
                                    : null;
                            }}
                        />
                    </View>
                    {!groupData.isSeedAmount ? (
                        <Text style={{ color: 'red' }}>Please enter a valid seed amount</Text>
                    ) : null}
                    <View style={GroupCreationStyle.textInputView}>
                        <Ionicons
                            name="calendar-outline"
                            size={20}
                            color={'#7966FF'}
                            style={{ padding: 10, paddingTop: -10 }}
                        />
                        <TouchableOpacity onPress={() => setOpen(true)}>
                            <Text style={{ color: '#000' }}>{DoBLabel}</Text>
                            <DatePicker
                                modal
                                open={open}
                                date={groupData.epoch}
                                mode={'date'}
                                androidVariant={'nativeAndroid'}
                                onConfirm={(date) => {
                                    setOpen(false);
                                    //handleDateOfBirth(date);
                                    setDoBLabel(date.toDateString());
                                }}
                                onCancel={() => {
                                    setOpen(false);
                                }}
                            />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={() => {}} style={{ alignSelf: 'center' }}>
                        <View
                            style={{
                                marginTop: 50,
                                padding: 20,
                                backgroundColor: '#7966FF',
                                borderRadius: 20,
                            }}
                        >
                            <Text style={{ color: '#fff', alignSelf: 'center', fontSize: 20, fontWeight: '500' }}>
                                Create group
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <View>
                        <Dialog.Container visible={dialogVisible} onBackdropPress={() => setDialogVisible(false)}>
                            <Dialog.Description>
                                Select a photo from your device to upload for your goal
                            </Dialog.Description>
                            <View style={GroupCreationStyle.dialogInnerView}>
                                <View style={GroupCreationStyle.dialogInnerView.innerView}>
                                    <Ionicons
                                        name="camera-outline"
                                        size={20}
                                        color="#7966FF"
                                        style={GroupCreationStyle.dialogInnerView.innerView.icon}
                                    />
                                    <Dialog.Button
                                        label="Camera"
                                        color="#7966FF"
                                        onPress={() => {
                                            handlePhoto('camera');
                                        }}
                                    />
                                </View>
                                <View style={GroupCreationStyle.dialogInnerView.innerView}>
                                    <Ionicons
                                        name="image-outline"
                                        size={20}
                                        color="#7966FF"
                                        style={GroupCreationStyle.dialogInnerView.innerView.icon}
                                    />
                                    <Dialog.Button
                                        label="Gallery"
                                        color="#7966FF"
                                        onPress={() => {
                                            handlePhoto('gallery');
                                        }}
                                    />
                                </View>
                            </View>
                        </Dialog.Container>
                    </View>
                </View>
            </SafeAreaView>
        </ScrollView>
    );
};
export default GoalCreationScreen;
