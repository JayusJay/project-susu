import {StyleSheet} from "react-native"

const RegisterStyle = StyleSheet.create({
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
    view5: {
        alignSelf: "center",
        paddingBottom: 15,
    },
    icon: {
        color: "#666",
        marginRight: 5,
        paddingVertical: 10,
    },
    textInput: {
        flex: 1,
        paddingVertical: 0,
        color: "#000"
    },
    errorText: {
        color: "red",
        fontSize: 12,
        marginTop: -20,
        paddingBottom: 5,
    },
    forgotOpacity: {
        marginTop: 15,
    },
    forgotPassword: {
        color: "#AD40AF",
        fontWeight: "700",
    },
    DoBOpacity: {

    },
    DoBText: {
        color: "#666",
        marginTop: 13,
        marginLeft: 5,
    },
    RegisterText: {
        color: "#AD40AF",
        fontWeight: "400",
        marginTop: 15,
    },
    RegisterOpacity: {
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
})
export default RegisterStyle
