import { StyleSheet } from "react-native";

const ResetPasswordStyle = StyleSheet.create({
    SafeAreaView: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        paddingHorizontal: 25,
    },
    text: {
        fontFamily: "Roboto-medium",
        fontSize: 28,
        fontWeight: "500",
        color: "#7966FF",
        marginBottom: 20,
    },
    textInput: {
        flex: 1,
        paddingVertical: 0,
        color: "#000"
    },
    view1: {
        flexDirection: "row",
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
        paddingBottom: 8,
        marginBottom: 25,
    },
    icon: {
        color: "#666",
        marginRight: 5,
        paddingVertical: 10,
    },
    errorText: {
        color: "red",
        fontSize: 12,
        marginTop: -20,
        paddingBottom: 5,
    },
    resetText: {
        color: "#fff",
        fontWeight: "400",
    },

    resetOpacity: {
        backgroundColor: "#7966FF",
        padding: 20,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 10,
        marginTop: 25,
        marginBottom: 5,
    },
})
export default ResetPasswordStyle;
