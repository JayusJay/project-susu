import { StyleSheet } from 'react-native';


const TransactionStyle = StyleSheet.create({
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
    transactionView: {
        marginTop: 10,
        paddingBottom: 5,
    },
    transactionText: {
        color: '#000',
        alignSelf: 'center',
        fontSize: 20,
        marginTop: 10,
    },
    detailsComponentView: {
        paddingTop: 15,
        marginBottom: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: '#ccc',
        borderBottomWidth: 0.5,
        innerView: {
            flexDirection: 'row',
            width: '70%',
            innerView: {
                flexDirection: 'row',
                justifyContent: 'space-between',
                image: {
                    height: 25,
                    width: 25,
                    borderRadius: 25,
                    marginTop: -3,
                    alignSelf: 'center',
                },
            },
            secondView: {
                paddingLeft: 10,
                text1: {
                    color: '#000',
                    fontWeight: '600',
                },
                text2: {
                    color: '#000',
                    paddingRight: 10,
                    textAlign: 'left',
                },
            },
        },
        secondView: {
            flexDirection: 'row',
            justifyContent: 'flex-end',
            innerView: {
                paddingLeft: 10,
                alignSelf: 'center',
                text1: {
                    color: '#000',
                    fontWeight: '600',
                    alignSelf: 'center',
                },
                text2: {
                    fontWeight: '500',
                    alignSelf: 'center',
                },
            },
        },
        descriptionText: {
            color: '#000',
            paddingLeft: 10,
            paddingBottom: 20,
            fontSize: 16,
        },
        countText: {
            fontSize: 16,
            color: '#8A8A8A',
            paddingRight: 10,
        },
        touchableOpacity: {
            flexDirection: 'row',
            contentText: {
                fontSize: 16,
                color: '#8A8A8A',
            },
            evilIcon: {
                paddingLeft: 2,
            },
        },
    },
});
export default TransactionStyle;
