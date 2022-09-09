import { StyleSheet } from 'react-native';

const PaymentSummaryStyle = StyleSheet.create({
    scrollable: {
        backgroundColor: '#fff',
    },
    container: {
        flex: 1,
        padding: 20,
        sumaryText: {
            color: '#7966FF',
            fontSize: 25,
            alignSelf: 'center',
            padding: 20,
        },
    },
    titleText: {
        color: '#7966FF',
        fontSize: 20,
        marginBottom: 5,
        fontWeight: '500',
    },
    paymentView: {
        flexDirection: 'row',
        text1: {
            fontSize: 16,
            color: '#000',
        },
        text2: {
            color: '#8A8A8A',
            fontSize: 12,
        },
    },
    textInput: {
        backgroundColor: '#fff',
        borderRadius: 10,
        color: '#000',
        paddingLeft: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    touchableView: {
        backgroundColor: '#7966FF',
        borderRadius: 10,
        padding: 20,
        text: {
            color: '#fff',
            fontSize: 16,
            alignSelf: 'center',
        },
    },
});
export default PaymentSummaryStyle;
