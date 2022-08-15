import { StyleSheet } from 'react-native';

const GroupCreationStyle = StyleSheet.create({
    scrollable: { backgroundColor: '#fff' },
    container: {
        flex: 1,
        backgroundColor: '#7966FF',
    },
    header: {
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
    },
    profileView: {
        marginTop: 10,
        paddingBottom: 5,
        marginBottom: 10,
        textView: {
            alignSelf: 'center',
            marginTop: -35,
        },
        text: {
            color: '#fff',
            fontSize: 30,
        },
    },
    backButton: {
        paddingTop: 10,
    },
    footer: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    imageView: {
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 10,
    },
    addGroupPhotoText: {
        color: '#7966FF',
        alignSelf: 'center',
    },
    image: {
        height: 100,
        width: 120,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: '#7966FF',
    },
    imageView: {
        alignSelf: 'center',
        imageTouchable: {
            margin: 20,
        },
    },
    textInputView: {
        flexDirection: 'row',
        borderBottomWidth: 0.5,
        borderColor: '#8A8A8A',
        marginTop: 30,
        cediSymbol: {
            color: '#7966FF',
            fontSize: 25,
            padding: 10,
            marginLeft: 5,
            marginRight: 9.4,
        },
        textInput: {
            color: '#000',
        },
        dropDownView: {
            container: {
                backgroundColor: 'white',
                padding: 16,
            },
            dropdown: {
                height: 50,
                borderColor: 'gray',
                borderWidth: 0.5,
                borderRadius: 8,
                paddingHorizontal: 8,
                //color: '#7966FF',
            },
            icon: {
                marginRight: 5,
            },
            label: {
                position: 'absolute',
                backgroundColor: 'white',
                color: '#7966FF',
                left: 22,
                top: 8,
                zIndex: 999,
                paddingHorizontal: 8,
                fontSize: 14,
            },
            placeholderStyle: {
                fontSize: 16,
                color: '#000',
            },
            selectedTextStyle: {
                fontSize: 16,
                color: '#7966FF',
            },
            iconStyle: {
                width: 20,
                height: 20,
            },
        },
    },

    buttonTouchable: {
        alignSelf: 'center',
        innerView: {
            marginTop: 50,
            padding: 20,
            backgroundColor: '#7966FF',
            borderRadius: 20,
            text: {
                color: '#fff',
                alignSelf: 'center',
                fontSize: 20,
                fontWeight: '500',
            },
        },
    },
    dialogInnerView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        innerView: {
            flexDirection: 'row',
            borderRadius: 20,
            icon: {
                paddingTop: 5,
                paddingLeft: 5,
            },
        },
    },
});
export default GroupCreationStyle;
