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
        innerView: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            innerView: {
                flexDirection: 'row',
                textTicker: {
                    paddingLeft: 20,
                    marginTop: 5,
                    fontSize: 16,
                },
            },
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
        buttonTouchable: {
            alignSelf: 'center',
        },
        chevronButton: {
            padding: 10,
        },
    },
});
export default GroupComponentStyle;
