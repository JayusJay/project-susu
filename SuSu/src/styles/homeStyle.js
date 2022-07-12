import { StyleSheet } from 'react-native';
const HomeStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7966FF',
    },
    header: {
        flex: 1,
        paddingTop: 10,
        paddingHorizontal: 20,
        paddingBottom: 50,
    },
    headerText: {
        color: '#fff',
        fontSize: 20,
        paddingTop: 5,
    },
    footer: {
        flex: 5,
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    profileView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    image: {
        height: 35,
        width: 35,
        borderRadius: 40,
        //marginBottom: 10,
    },
    instantView: {
        padding: 40,
        backgroundColor: '#9FB7FF',
        borderRadius: 10,
        marginBottom: 15,
        instantText: {
            color: '#504C6B',
            paddingTop: 10,
        },
    },
    savingsView: {
        padding: 40,
        backgroundColor: '#A6CAF0',
        borderRadius: 10,
        marginBottom: 15,
        savingsText: {
            color: '#504C6B',
            paddingTop: 10,
        },
    },
    investmentView: {
        padding: 40,
        backgroundColor: '#FFC466',
        borderRadius: 10,
        marginBottom: 15,
        investmentText: {
            color: '#504C6B',
            paddingTop: 10,
        },
    },
    transactionsOverview: {
        padding: 40,
        backgroundColor: '#FFFFEE',
        transactionsText: {
            color: '#504C6B',
            marginRight: 10,
            //paddingTop: 10,
        },
    },
    innerView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    viewText: {
        color: '#000',
        fontSize: 20,
        fontWeight: '500',
        marginTop: -20,
    },
});
export default HomeStyle;
