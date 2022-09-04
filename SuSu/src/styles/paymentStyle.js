import { StyleSheet } from 'react-native';
const PaymentStyle = StyleSheet.create({
    scrollable: {
        backgroundColor: '#fff',
    },
    container: {
        padding: 20,
        text: {
            color: '#7966FF',
            marginTop: 40,
            fontSize: 16,
        },
    },

    optionsViews: {
        backgroundColor: '#fff',
        borderRadius: 10,
        marginTop: 10,
        imageStyle: {
            width: 50,
            height: 50,
            margin: 20,
            borderRadius: 5,
        },
        innerView: {
            flexDirection: 'column',
            alignSelf: 'center',
            text1: {
                fontSize: 16,
                fontWeight: '500',
                color: '#7966FF',
            },
            text2: {
                color: '#8A8A8A',
                fontSize: 12,
            },
            editIcon: {
                marginLeft: 'auto',
                marginBottom: 'auto',
                padding: 5,
            },
        },
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
});
export default PaymentStyle;
