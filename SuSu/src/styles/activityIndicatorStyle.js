import { StyleSheet } from "react-native"
const activityIndicatorStyle = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: "#fff",
        justifyContent: "center",
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10,
    },
})
export default activityIndicatorStyle