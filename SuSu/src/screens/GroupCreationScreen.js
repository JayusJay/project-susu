import React, { useState } from 'react';
import {
    ScrollView,
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Image,
    PermissionsAndroid,
    useColorScheme,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { Dropdown } from 'react-native-element-dropdown';
import Dialog from 'react-native-dialog';
import Snackbar from 'react-native-snackbar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import errors from '../utils/errors';
import GroupCreationStyle from '../styles/groupCreationStyle';
import groupData from '../assets/groupData';

const photoOptions = {
    mediaType: 'photo',
    cameraType: 'back',
    maxWidth: 500,
    maxHeight: 500,
    //saveToPhotos: true,
};
const dropDownData = [
    { label: 'Daily', value: '1' },
    { label: 'Weekly', value: '7' },
    { label: 'Monthly', value: '30' },
    { label: 'Quarterly', value: '90' },
    { label: 'Semi-annual', value: '180' },
];
const GoalCreationScreen = ({ navigation }) => {
    const { RNImagePickerError } = errors();
    const [dialogVisible, setDialogVisible] = useState(false);
    const [openDropDown, setOpenDropDown] = useState(false);
    const [groupData, setGroupData] = useState({
        name: '',
        seedAmount: 0,
        imageUri: '../assets/images/group.png',
        frequency: null,
        isName: true,
        isSeedAmount: true,
    });
    const colorScheme = useColorScheme();
    const color = colorScheme === 'dark' ? '#000' : '#fff';

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
    const handleButton = () => {
        if (groupData.name !== '' && groupData.seedAmount != 0 && groupData.frequency !== null) {
            groupData.push({
                image: groupData.imageUri,
                name: groupData.name,
                seedMoneyPerMember: groupData.seedAmount,
                frequency: groupData.frequency,
                members: [
                    {
                        name: 'Jonathan',
                        id: '5',
                        image: require('../assets/images/profile.jpg'),
                        group_id: '#1',
                        seedMoney: 7000,
                    },
                ], //Group creator.
            });
            navigation.navigate('Group Creation Final');
        } else {
            Snackbar.show({
                text: 'Please fill all the fields',
                duration: Snackbar.LENGTH_LONG,
                backgroundColor: 'red',
            });
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
                    <View style={GroupCreationStyle.imageView}>
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
                    <Text style={GroupCreationStyle.addGroupPhotoText}>Add a group picture</Text>
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

                    <View style={[GroupCreationStyle.textInputView, { marginBottom: 20 }]}>
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
                            style={[GroupCreationStyle.textInputView.textInput]}
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

                    <View style={GroupCreationStyle.textInputView.dropDownView.container}>
                        {groupData.frequency || openDropDown ? (
                            <Text
                                style={[
                                    GroupCreationStyle.textInputView.dropDownView.label,
                                    openDropDown && { color: 'blue' },
                                ]}
                            >
                                Savings frequency
                            </Text>
                        ) : null}
                        <Dropdown
                            style={[
                                GroupCreationStyle.textInputView.dropDownView.dropdown,
                                openDropDown && { borderColor: 'blue' },
                            ]}
                            placeholderStyle={GroupCreationStyle.textInputView.dropDownView.placeholderStyle}
                            selectedTextStyle={GroupCreationStyle.textInputView.dropDownView.selectedTextStyle}
                            iconStyle={GroupCreationStyle.textInputView.dropDownView.iconStyle}
                            containerStyle={color === '#000' ? { backgroundColor: color } : null}
                            activeColor="#7966FF"
                            data={dropDownData}
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={!openDropDown ? 'Savings cycle' : '...'}
                            value={groupData.frequency}
                            onFocus={() => setOpenDropDown(true)}
                            onBlur={() => setOpenDropDown(false)}
                            onChange={(item) => {
                                setGroupData({ ...groupData, frequency: item.value });
                                setOpenDropDown(false);
                            }}
                            renderLeftIcon={() => (
                                <AntDesign
                                    style={GroupCreationStyle.textInputView.dropDownView.icon}
                                    color={groupData.frequency ? '#7966FF' : '#000'}
                                    name="Safety"
                                    size={20}
                                />
                            )}
                        />
                    </View>
                    <TouchableOpacity
                        onPress={() => {
                            handleButton();
                        }}
                        style={GroupCreationStyle.buttonTouchable}
                    >
                        <View style={GroupCreationStyle.buttonTouchable.innerView}>
                            <Text style={GroupCreationStyle.buttonTouchable.innerView.text}>Create group</Text>
                        </View>
                    </TouchableOpacity>

                    {/* Camera Dialog */}
                    <View>
                        <Dialog.Container visible={dialogVisible} onBackdropPress={() => setDialogVisible(false)}>
                            <Dialog.Description>Select a group picture from your device</Dialog.Description>
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
