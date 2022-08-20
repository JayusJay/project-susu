import { StyleSheet } from 'react-native';

const SetPINStyle = StyleSheet.create({
    scrollable: { backgroundColor: '#fff' },
    container: {
        padding: 20,
    },
    titleText: {
        fontSize: 35,
        fontWeight: '500',
        color: '#000',
        marginTop: 40,
    },
    text: {
        color: '#8A8A8A',
        padding: 10,
        paddingLeft: -10,
        fontSize: 14,
        marginBottom: 20,
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
export default SetPINStyle;
