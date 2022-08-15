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
    groupView: {
        //flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    barChartView: {
        padding: 40,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 15,
        text: {
            color: '#000',
            fontSize: 20,
            fontFamily: 'roboto-medium',
            padding: 10,
        },
        innerView: {
            marginLeft: -40,
            marginTop: -40,
        },
    },
    createGroupView: {
        padding: 20,
        backgroundColor: '#000',
        borderRadius: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        textView: {
            paddingTop: 10,
            text1: {
                fontWeight: '700',
                color: '#fff',
                fontSize: 20,
            },
            text2: {
                paddingTop: 3,
            },
        },
        buttonView: {
            padding: 5,
            backgroundColor: '#ccc',
            borderRadius: 10,
        },
    },
    overview: {
        padding: 20,
        width: '49%',
        backgroundColor: '#000',
        borderRadius: 25,
        innerView: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            text: {
                color: '#fff',
                fontSize: 20,
            },
        },
        overviewText: {
            color: '#fff',
            paddingTop: 5,
        },
    },
    gridContainerView: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        rowView: {
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
        text: {
            color: '#000',
            fontSize: 20,
            padding: 10,
            fontFamily: 'roboto-medium',
        },
    },
});
export default GroupInvestmentStyle;
