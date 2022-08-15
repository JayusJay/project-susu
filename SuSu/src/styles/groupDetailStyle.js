import { StyleSheet } from 'react-native';

const GroupDetailStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
        navigationTouchablesView: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            shareTouchable: { paddingTop: 4 },
        },
    },
    imageView: {
        padding: 40,
        alignItems: 'center',
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 80,
    },

    groupNameText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#000',
    },
    amountSavedView: {
        flexDirection: 'row',
        marginTop: -10,
        innerView1: {
            flexDirection: 'row',
            currencyText: {
                fontSize: 25,
                color: '#7966FF',
                marginTop: 24,
            },
            amountSavedText: {
                fontSize: 40,
                fontWeight: 'bold',
                marginTop: 10,
                color: '#7966FF',
            },
        },
        innerView2: {
            paddingLeft: 10,
            totalAmountText: {
                fontSize: 16,
                marginTop: 10,
                color: '#000',
                marginTop: 30,
            },
        },
    },
    subHeaderText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#000',
        paddingTop: 30,
    },
    detailsComponentView: {
        paddingTop: 15,
        marginBottom: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: '#ccc',
        borderBottomWidth: 0.2,
        innerView: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            image: {
                height: 25,
                width: 25,
                borderRadius: 25,
                marginTop: -3,
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
export default GroupDetailStyle;
