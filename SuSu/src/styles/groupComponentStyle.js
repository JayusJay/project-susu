import { StyleSheet } from 'react-native';

const GroupComponentStyle = StyleSheet.create({
    container: {
        padding: 15,
        marginTop: 10,
        backgroundColor: '#000',
        borderRadius: 25,
        image: {
            width: 50,
            height: 50,
            borderRadius: 30,
        },
        textView: {
            paddingTop: -20,
            alignSelf: 'center',
        },
        nameText: {
            color: '#ccc',
            fontSize: 20,
            paddingLeft: 20,
        },
        amountText: {
            color: '#fff',
            fontSize: 20,
            fontWeight: '700',
        },
        timeLeftText: {
            color: '#fff',
            fontSize: 16,
        },
    },
});
export default GroupComponentStyle;
