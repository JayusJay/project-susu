import { StyleSheet } from 'react-native';

const RegisterStyle = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    text: {
        fontFamily: 'Roboto-medium',
        fontSize: 28,
        fontWeight: '500',
        color: '#7966FF',
        marginBottom: 20,
    },
    welcomeText: {
        color: '#fff',
        fontSize: 25,
        fontWeight: '600',
        fontFamily: 'Roboto-medium',
        marginLeft: -20,
    },
    view1: {
        alignItems: 'center',
        backgroundColor: '#7966FF',
        height: 140,
        width: '100%',
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    view2: {
        paddingTop: 20,
        paddingHorizontal: 20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderTopColor: '#7966FF',
    },
    view3: {
        flexDirection: 'row',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingBottom: 8,
        marginBottom: 25,
    },
    view4: {
        flexDirection: 'row',
        alignSelf: 'center',
        paddingBottom: 30,
    },
    view4Text: {
        color: '#8A8A8A',
        fontSize: 15,
    },
    view5: {
        alignSelf: 'center',
        paddingBottom: 15,
    },
    icon: {
        color: '#666',
        marginRight: 5,
        paddingVertical: 10,
    },
    textInput: {
        flex: 1,
        paddingVertical: 0,
        color: '#000',
    },
    errorText: {
        color: 'red',
        fontSize: 12,
        marginTop: -20,
        paddingBottom: 5,
    },
    forgotOpacity: {
        marginTop: 15,
    },
    forgotPassword: {
        color: '#7966FF',
        fontWeight: '700',
    },
    DoBOpacity: {},
    DoBText: {
        color: '#666',
        marginTop: 13,
        marginLeft: 5,
    },
    RegisterText: {
        color: '#7966FF',
        fontWeight: '500',
        marginTop: 15,
        fontSize: 15,
    },
    RegisterOpacity: {
        marginTop: -15,
    },
    loginOpacity: {
        backgroundColor: '#7966FF',
        padding: 20,
        borderRadius: 10,
        marginBottom: 5,
    },
    loginText: {
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 16,
        color: '#fff',
    },
    alternate: {
        textAlign: 'center',
        color: '#666',
        marginTop: 10,
        marginBottom: 30,
    },
});
export default RegisterStyle;
