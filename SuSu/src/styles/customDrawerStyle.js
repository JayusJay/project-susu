import { StyleSheet } from 'react-native';

const customDrawerStyle = StyleSheet.create({
    view1: {
        flex: 1,
    },
    backgroundImage: {
        padding: 20,
    },
    image: {
        height: 70,
        width: 70,
        borderRadius: 40,
        marginBottom: 10,
    },
    imageView: {
        height: 130,
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        innerView: {
            flexDirection: 'column',
            alignContent: 'center',
            padding: 20,
            marginLeft: -5,
            greetingText: {
                color: '#fff',
                marginTop: -10,
            },
            nameText: {
                color: '#fff',
                fontSize: 30,
                fontWeight: '900',
            },
        },
    },
    view2: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 10,
    },
    view3: {
        padding: 20,
        borderTopWidth: 1,
        borderColor: '#ccc',
        shareTouchable: {
            width: 60,
        },
        logoutTouchable: {
            marginTop: 15,
            marginBottom: -5,
            width: 70,
        },
    },
    touchableView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    touchableText: {
        color: '#000',
        marginLeft: 5,
    },
});
export default customDrawerStyle;
