import React, { useState, useContext } from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView, TextInput, PermissionsAndroid } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Snackbar from 'react-native-snackbar';
import Dialog from 'react-native-dialog';
import { AppStoreContext } from '../../services/AppStoreContext';
import errors from '../../utils/errors';
import customGoalCreationStyles from '../../styles/goal_creation/customGoalCreationStyle';

const CustomGoalCreationScreen = ({ navigation }) => {
    const { goalCreationStore } = useContext(AppStoreContext);
    const { RNImagePickerError } = errors();
    const [dialogVisible, setDialogVisible] = useState(false);
    const [goalState, setGoalState] = useState({
        imageUri: '',
        title: '',
        isImage: false,
        isTitle: false,
    });

    const photoOptions = {
        mediaType: 'photo',
        cameraType: 'back',
        maxWidth: 500,
        maxHeight: 500,
        //saveToPhotos: true,
    };

    const handleTitle = (title) => {
        let reg = new RegExp(/^[a-zA-Z0-9' ]*$/).test(title);
        if (reg) {
            setGoalState({
                ...goalState,
                title: title,
                isTitle: true,
            });
        } else {
            setGoalState({
                ...goalState,
                title: title,
                isTitle: false,
            });
        }
    };

    (function subFunction() {
        if (goalCreationStore.imageUri.startsWith('../../assets/')) {
            Snackbar.show({
                text: 'Please select an image',
                duration: Snackbar.LENGTH_LONG,
                backgroundColor: 'red',
            });
            goalCreationStore.setGoalCreationData('imageUri', goalState.imageUri);
            goalCreationStore.setGoalCreationData('name', goalState.title);
        }
    })(); //this hack automatically sets the image to the last image selected if the user does not select an image
    const handleButton = () => {
        if (goalState.isImage && goalState.isTitle) {
            goalCreationStore.setGoalCreationData('name', goalState.title);
            goalCreationStore.setGoalCreationData('imageUri', goalState.imageUri);
            navigation.navigate('GoalTotalAmount');
        } else {
            Snackbar.show({
                text: 'Please upload a photo and enter a valid name',
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
                            setGoalState({
                                ...goalState,
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
                    setGoalState({
                        ...goalState,
                        imageUri: response.assets[0].uri,
                        isImage: true,
                    });
                    setDialogVisible(false);
                }
            });
        }
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <SafeAreaView style={customGoalCreationStyles.container}>
                <View>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons name="close-outline" size={30} color="#000" />
                    </TouchableOpacity>
                </View>
                <View style={customGoalCreationStyles.imageView}>
                    <Image
                        source={
                            !goalState.isImage
                                ? goalCreationStore.imageUri === '' || goalCreationStore.imageUri.startsWith('../../assets')
                                    ? { uri: 'https://placehold.jp/150x150.png' }
                                    : { uri: goalCreationStore.imageUri }
                                : { uri: goalState.imageUri }
                        }
                        style={customGoalCreationStyles.image}
                    />
                </View>

                <View style={customGoalCreationStyles.cameraView}>
                    <TouchableOpacity
                        onPress={() => {
                            setDialogVisible(true);
                        }}
                    >
                        <MaterialIcons name="add-a-photo" size={50} color="#7966FF" />
                    </TouchableOpacity>
                </View>
                <View style={customGoalCreationStyles.textView}>
                    <Text style={customGoalCreationStyles.textView.text}>Add a goal picture</Text>
                </View>
                <View style={customGoalCreationStyles.titleInputView}>
                    <TextInput
                        underlineColorAndroid="transparent"
                        placeholder="Title of Goal"
                        value={goalState.title}
                        onChangeText={(text) => handleTitle(text)}
                        placeholderTextColor="#8A8A8A"
                        style={customGoalCreationStyles.titleInputView.textInput}
                        onBlur={() => {
                            goalState.title.length === 0 ? setGoalState({ ...goalState, isTitle: false }) : null;
                        }}
                    />
                    {!goalState.isTitle ? (
                        goalCreationStore.title === '' ? (
                            <Text style={{ color: 'red' }}>Enter a valid title</Text>
                        ) : (
                            setGoalState({ ...goalState, title: goalCreationStore.title, isTitle: true })
                        )
                    ) : null}
                </View>
                <TouchableOpacity
                    onPress={() => {
                        handleButton();
                    }}
                    style={customGoalCreationStyles.nextButtonTouchable}
                >
                    <Text style={customGoalCreationStyles.nextButtonTouchable.text}>Next</Text>
                </TouchableOpacity>
                <View>
                    <Dialog.Container visible={dialogVisible} onBackdropPress={() => setDialogVisible(false)}>
                        <Dialog.Description>Select a photo from your device to upload for your goal</Dialog.Description>
                        <View style={customGoalCreationStyles.dialogInnerView}>
                            <View style={customGoalCreationStyles.dialogInnerView.innerView}>
                                <Ionicons
                                    name="camera-outline"
                                    size={20}
                                    color="#7966FF"
                                    style={customGoalCreationStyles.dialogInnerView.innerView.icon}
                                />
                                <Dialog.Button
                                    label="Camera"
                                    color="#7966FF"
                                    onPress={() => {
                                        handlePhoto('camera');
                                    }}
                                />
                            </View>
                            <View style={customGoalCreationStyles.dialogInnerView.innerView}>
                                <Ionicons
                                    name="image-outline"
                                    size={20}
                                    color="#7966FF"
                                    style={customGoalCreationStyles.dialogInnerView.innerView.icon}
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
            </SafeAreaView>
        </ScrollView>
    );
};

export default CustomGoalCreationScreen;
