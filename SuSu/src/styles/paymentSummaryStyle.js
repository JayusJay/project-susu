import { StyleSheet } from 'react-native';

const PaymentSummaryStyle = StyleSheet.create({
    scrollable: {
        backgroundColor: '#fff',
    },
    container: {
        flex: 1,
        padding: 20,
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
});
export default PaymentSummaryStyle;
