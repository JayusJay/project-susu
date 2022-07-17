import { StyleSheet } from 'react-native';

const SavingsStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7966FF',
    },
    header: {
        //flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        // paddingBottom: 50,
    },
    profileView: {
        flexDirection: 'row',
        //justifyContent: 'space-between',
        paddingBottom: 5,
        marginBottom: 10,
    },
    backButton: {},
    footer: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    barChartView: {
        padding: 40,
        backgroundColor: '#FFF',
        borderRadius: 10,
        marginBottom: 15,
        instantText: {
            color: '#504C6B',
            paddingTop: 10,
        },
    },
    overview: {
        padding: 40,
        backgroundColor: '#FFF',
        borderRadius: 10,
        marginBottom: 15,
        instantText: {
            color: '#504C6B',
            paddingTop: 10,
        },
    },
});
export default SavingsStyle;
