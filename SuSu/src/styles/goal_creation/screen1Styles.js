import { StyleSheet } from 'react-native';

const Screen1Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7966FF',
    },
    header: {
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
    },
    headerContentView: {
        marginTop: 10,
        paddingBottom: 5,
        marginBottom: 10,
        textView: {
            alignSelf: 'center',
            marginTop: -40,
        },
        text: {
            color: '#fff',
            fontSize: 30,
            marginTop: -6,
            paddingBottom: 5,
        },
    },
    backButton: {
        paddingTop: 12,
    },
    footer: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
});
export default Screen1Styles;
