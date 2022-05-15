import {StyleSheet} from "react-native"

const LoginStyle = StyleSheet.create({
    safeAreaView: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
    },
    text: {
        fontFamily: "Roboto-medium",
        fontSize: 28,
        fontWeight: "500",
        color: "#AD40AF",
        marginBottom: 20,
    },
    view1: {
        paddingHorizontal: 25,
    },
    view2: {
        alignItems: "center",
    },
    view3: {
        flexDirection: "row",
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
        paddingBottom: 8,
        marginBottom: 25,
    },
    view4: {
        marginTop: -10,
        flexDirection: "row",
    },
    view4Text: {
        color: "#8A8A8A",
    },
    icon: {
        color: "#666",
        marginRight: 5,
        paddingVertical: 10,
    },
    textInput: {
        flex: 1,
        paddingVertical: 0,
    },
    forgotOpacity: {
        marginTop: 15,
    },
    forgotPassword: {
        color: "#AD40AF",
        fontWeight: "700",
    },
    signupText: {
        color: "#AD40AF",
        fontWeight: "400",
        marginTop: 15,
    },
    signupOpacity: {
        marginTop: -15,
    },
    loginOpacity: {
        backgroundColor: "#AD40AF",
        padding: 20,
        borderRadius: 10,
        marginTop: 25,
        marginBottom: 5,
    },
    loginText: {
        textAlign: "center",
        fontWeight: "700",
        fontSize: 16,
        color: "#fff",
    },
    alternate: {
        textAlign: "center",
        color: "#666",
        marginTop: 10,
        marginBottom: 30,
    },
    googleOpacity: {
        alignItems: "center",
        borderRadius: 10,
        marginTop: -10,
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
})
export default LoginStyle

//create a style sheet for the login page