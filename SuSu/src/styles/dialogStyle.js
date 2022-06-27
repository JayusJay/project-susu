import { StyleSheet } from "react-native"
const DialogStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    icon: {
        color: "#666",
        //paddingLeft: 100,
        paddingVertical: 10,
        marginBottom: 8,
    },
    view: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomColor: "#ccc",
        borderBottomWidth: 1,
    },
    textInput: {
        flex: 1,
        paddingVertical: 0,
        color: "#ccc",
        paddingRight: 100,
    },

})
export default DialogStyle
