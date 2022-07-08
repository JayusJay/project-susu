import { StyleSheet } from 'react-native';

const LoginStyle = StyleSheet.create({
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
        paddingTop: 30,
        color: '#fff',
        fontSize: 30,
        fontWeight: '600',
        fontFamily: 'Roboto-medium',
    },
    view1: {
        alignItems: 'center',
        backgroundColor: '#7966FF',
        height: 170,
        width: '100%',
        borderBottomLeftRadius: 25,
        borderBottomRightRadius: 25,
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
        marginTop: -10,
        flexDirection: 'row',
    },
    view5: {
        alignSelf: 'center',
        paddingBottom: 15,
    },
    view6: {
        alignSelf: 'flex-start',
    },
    view4Text: {
        color: '#8A8A8A',
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
        marginTop: -15,
        marginBottom: 15,
    },
    forgotPassword: {
        color: '#7966FF',
        fontWeight: '500',
    },
    signupText: {
        color: '#7966FF',
        fontWeight: '400',
        marginTop: 15,
    },
    signupOpacity: {
        marginTop: -15,
    },
    loginOpacity: {
        backgroundColor: '#7966FF',
        padding: 20,
        borderRadius: 10,
        marginTop: 25,
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
export default LoginStyle;
