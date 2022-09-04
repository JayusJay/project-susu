import { StyleSheet } from 'react-native';

const GroupInvestmentStyle = StyleSheet.create({
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
        alignSelf: 'flex-start',
        paddingTop: 10,
    },
    footer: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    yourGroupsText: {
        color: '#000',
        fontSize: 20,
        padding: 10,
        marginTop: 10,
        fontFamily: 'roboto-medium',
    },

    createGroupView: {
        padding: 20,
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        textView: {
            paddingTop: 10,
            text1: {
                fontWeight: '700',
                color: '#000',
                fontSize: 20,
            },
            text2: {
                color: '#8A8A8A',
                paddingTop: 3,
            },
        },
        buttonView: {
            padding: 5,
            backgroundColor: '#ccc',
            borderRadius: 10,
        },
    },
});
export default GroupInvestmentStyle;
