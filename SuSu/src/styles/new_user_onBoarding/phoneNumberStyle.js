import { StyleSheet } from 'react-native';

const phoneNumberStyle = StyleSheet.create({
    scrollable: { backgroundColor: '#fff' },
    container: {
        padding: 20,
    },
    topText: {
        color: '#7966FF',
        paddingBottom: 40,
        paddingLeft: -20,
        fontSize: 16,
        fontWeight: '500',
    },
    titleText: {
        fontSize: 25,
        fontWeight: '500',
        color: '#000',
    },
    text: {
        color: '#8A8A8A',
        padding: 10,
        paddingLeft: -10,
    },
    urlText: {
        color: '#7966FF',
        textDecorationLine: 'underline',
        fontWeight: '450',
    },
    mainView: {
        flexDirection: 'row',
        marginTop: 20,
        innerViews: {
            backgroundColor: '#fff',
            borderRadius: 10,
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            flexDirection: 'row',
        },
        flagView: {
            padding: 10,
            borderRadius: 10,
            alignSelf: 'center',
            flexDirection: 'row',
            text: {
                fontSize: 15,
                color: '#000',
                paddingLeft: 5,
            },
        },
        numberInputView: {
            marginLeft: 4,
            textInput: {
                flex: 1,
                marginTop: -5,
                marginBottom: -5,
                paddingLeft: 10,
                paddingRight: 60,
                fontSize: 15,
                color: '#000',
            },
        },
    },
    buttonTouchable: {
        marginTop: 100,
        innerView: {
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
});
export default phoneNumberStyle;
