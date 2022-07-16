import { StyleSheet } from 'react-native';

const SavingsStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7966FF',
    },
    header: {
        paddingTop: 10,
        paddingHorizontal: 20,
        flex: 1,
    },
    profileView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 5,
        marginBottom: 10,
    },
    headerText: {
        color: '#fff',
        fontSize: 20,
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
});
export default SavingsStyle;
