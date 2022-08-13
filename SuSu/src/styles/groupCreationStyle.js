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
