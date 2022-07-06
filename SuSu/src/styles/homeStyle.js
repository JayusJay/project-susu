import { StyleSheet } from "react-native";
const HomeStyle = StyleSheet.create({
    SafeAreaView: {
        flex: 1,
        alignItems: "center", 
        justifyContent: "center",
    },
    Text: {
        color: "red",
        fontSize: 25,
        fontWeight: "bold",
        marginTop: 10,
    },
    logoutOpacity: {
        backgroundColor: "#7966FF",
        padding: 20,
        borderRadius: 10,
        marginTop: 25,
        marginBottom: 5,
    },
});
export default HomeStyle;