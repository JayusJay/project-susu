import { StyleSheet } from 'react-native';

const GroupComponentStyle = StyleSheet.create({
    container: {
        padding: 15,
        marginTop: 10,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 10,
        image: {
            width: 50,
            height: 50,
            borderRadius: 30,
            borderWidth: 1,
            borderColor: '#7966FF',
        },
        noGroupsText: {
            color: '#7966FF',
            fontSize: 20,
            textAlign: 'center',
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
                    color: '#8a8a8a',
                },
            },
        },
        textView: {
            paddingTop: -20,
            alignSelf: 'center',
        },
        nameText: {
            color: '#000',
            fontSize: 20,
            paddingLeft: 20,
        },

        chevronButton: {
            padding: 10,
            alignSelf: 'center',
        },
    },
});
export default GroupComponentStyle;
