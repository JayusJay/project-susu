import React, { useState, useContext } from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Snackbar from 'react-native-snackbar';
import Dialog from 'react-native-dialog';
import { AppStoreContext } from '../../components/AppStoreContext';

const CustomGoalCreationScreen = ({ navigation }) => {
    const { goalCreationStore } = useContext(AppStoreContext);

    const [dialogVisible, setDialogVisible] = useState(false);
    const [goalState, setGoalState] = useState({
        image: '',
        title: '',
        isImage: false,
        isTitle: false,
    });
    const photoOptions = {
        mediaType: 'photo',
        cameraType: 'back',
        maxWidth: 500,
        maxHeight: 500,
        saveToPhotos: true,
    };
    const handleTitle = (title) => {
        let reg = new RegExp(/^[a-zA-Z0-9 ]*$/).test(title);
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
    const handleButton = () => {
        if (goalState.isImage && goalState.isTitle) {
            goalCreationStore.setGoalCreationData('title', goalState.title);
            goalCreationStore.setGoalCreationData('image', goalState.image);
            navigation.navigate('Screen2');
        } else {
            Snackbar.show({
                text: 'Please upload an image and enter a valid title',
                duration: Snackbar.LENGTH_LONG,
                backgroundColor: 'red',
            });
        }
    };

    const handlePhoto = (type) => {
        if (type === 'camera') {
            launchCamera(photoOptions, (response) => {
                if (response.didCancel) {
                    console.log('User cancelled image picker');
                } else if (response.error) {
                    console.log('ImagePicker Error: ', response.error);
                } else if (response.customButton) {
                    console.log('User tapped custom button: ', response.customButton);
                } else {
                    setGoalState({
                        ...goalState,
                        image: response.assets[0].uri,
                        isImage: true,
                    });
                    setDialogVisible(false);
                    console.log(response.assets[0].uri);
                }
            });
        } else {
            launchImageLibrary(photoOptions, (response) => {
                if (response.didCancel) {
                    console.log('User cancelled image picker');
                } else if (response.error) {
                    console.log('ImagePicker Error: ', response.error);
                } else if (response.customButton) {
                    console.log('User tapped custom button: ', response.customButton);
                } else {
                    setGoalState({
                        ...goalState,
                        image: response.assets[0].uri,
                        isImage: true,
                    });
                    setDialogVisible(false);
                    console.log(response);
                }
            });
        }
    };
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <SafeAreaView style={{ flex: 1, padding: 20 }}>
                <View>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons name="close-outline" size={30} color="#000" />
                    </TouchableOpacity>
                </View>
                <View style={{ alignItems: 'center', padding: 20 }}>
                    <Image
                        source={
                            !goalState.isImage
                                ? { uri: 'https://via.placeholder.com/150.jpg' }
                                : { uri: goalState.image }
                        }
                        style={{ width: 150, height: 150, borderRadius: 80 }}
                    />
                </View>
                <View style={{ marginBottom: 50, alignItems: 'center' }}>
                    <Text style={{ marginTop: 30, color: '#000', fontSize: 25 }}>Select an appropriate photo</Text>
                    <Text style={{ marginTop: 10, color: '#000', fontSize: 25 }}>for your goal</Text>
                </View>

                <View
                    style={{
                        marginTop: 50,
                        padding: 20,
                        backgroundColor: '#7966FF',
                        alignSelf: 'center',
                        borderRadius: 60,
                    }}
                >
                    <TouchableOpacity
                        onPress={() => {
                            setDialogVisible(true);
                            // selectImage();
                        }}
                    >
                        <Ionicons name="camera-outline" size={60} color="#fff" />
                    </TouchableOpacity>
                </View>

                <View style={{ paddingTop: 50 }}>
                    <TextInput
                        underlineColorAndroid="transparent"
                        placeholder="Title of Goal"
                        value={goalState.title}
                        onChangeText={(text) => handleTitle(text)}
                        placeholderTextColor="#8A8A8A"
                        style={{ borderBottomWidth: 1, borderColor: '#8A8A8A', color: '#000' }}
                        onBlur={() => {
                            goalState.title.length === 0 ? setGoalState({ ...goalState, isTitle: false }) : null;
                        }}
                    />
                    {!goalState.isTitle ? <Text style={{ color: 'red' }}>Enter a valid title</Text> : null}
                </View>
                <TouchableOpacity
                    onPress={() => {
                        handleButton();
                    }}
                    style={{
                        marginTop: 40,
                        backgroundColor: '#7966FF',
                        padding: 20,
                        alignItems: 'center',
                        borderRadius: 20,
                    }}
                >
                    <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>Next</Text>
                </TouchableOpacity>
                <View>
                    <Dialog.Container visible={dialogVisible} onBackdropPress={() => setDialogVisible(false)}>
                        <Dialog.Description>Select a photo from your device to upload for your goal</Dialog.Description>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <View style={{ flexDirection: 'row', borderRadius: 20 }}>
                                <Ionicons
                                    name="camera-outline"
                                    size={20}
                                    color="#7966FF"
                                    style={{ paddingTop: 5, paddingLeft: 5 }}
                                />
                                <Dialog.Button
                                    label="Camera"
                                    color="#7966FF"
                                    onPress={() => {
                                        handlePhoto('camera');
                                    }}
                                />
                            </View>
                            <View style={{ flexDirection: 'row', borderRadius: 20 }}>
                                <Ionicons
                                    name="image-outline"
                                    size={20}
                                    color="#7966FF"
                                    style={{ paddingTop: 5, paddingLeft: 5 }}
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
