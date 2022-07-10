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
});
export default HomeStyle;
