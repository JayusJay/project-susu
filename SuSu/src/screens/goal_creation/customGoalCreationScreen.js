import React, { useState, useContext } from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Snackbar from 'react-native-snackbar';
import { AppStoreContext } from '../../components/AppStoreContext';

const CustomGoalCreationScreen = ({ navigation }) => {
    const { goalCreationStore } = useContext(AppStoreContext);

    const [goalState, setGoalState] = useState({
        image: '',
        title: '',
        isImage: false,
        isTitle: false,
    });
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
                        source={{ uri: 'https://via.placeholder.com/150.jpg' }}
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
                    <TouchableOpacity onPress={() => {}}>
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
            </SafeAreaView>
        </ScrollView>
    );
};

export default CustomGoalCreationScreen;
