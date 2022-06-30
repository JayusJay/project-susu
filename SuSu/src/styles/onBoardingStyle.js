import { StyleSheet } from "react-native";

const OnBoardingStyle = StyleSheet.create({
    SafeAreaView: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 15,
    },
    view2: {
        flex: 1
    },
    header: {
       color: "#20315f",
       justifyContent: "center",
       fontWeight: "bold",
       fontSize: 25,
       marginTop: 10,
    },
    text: {
        color: "#fff",
    },
    starterOpacity: {
        backgroundColor: "#AD40AF",
        padding: 20,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 10,
        marginTop: 25,
        marginBottom: 5,
    },
})
export default OnBoardingStyle;    