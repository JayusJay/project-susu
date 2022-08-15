import { StyleSheet } from 'react-native';

const GoalDetailStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    circularBaseView: {
        padding: 40,
        alignItems: 'center',
    },
    circularImage: {
        width: 150,
        height: 150,
        borderRadius: 80,
    },
    CircularProgressBaseProps: {
        activeStrokeWidth: 5,
        inActiveStrokeWidth: 5,
        inActiveStrokeOpacity: 0.2,
        activeStrokeColor: '#7966FF',
        inActiveStrokeColor: '#8A8A8A',
        radius: 80,
    },
    goalNameText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#000',
    },
    amountSavedView: {
        flexDirection: 'row',
        marginTop: -10,
        innerView1: {
            flexDirection: 'row',
            currencyText: {
                fontSize: 25,
                color: '#7966FF',
                marginTop: 24,
            },
            amountSavedText: {
                fontSize: 40,
                fontWeight: 'bold',
                marginTop: 10,
                color: '#7966FF',
            },
        },
        innerView2: {
            paddingLeft: 10,
            totalAmountText: {
                fontSize: 16,
                marginTop: 10,
                color: '#000',
                marginTop: 30,
            },
        },
    },
    subHeaderText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#000',
        paddingTop: 30,
    },
    detailsComponentView: {
        paddingTop: 15,
        marginBottom: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: '#ccc',
        borderBottomWidth: 0.2,
        descriptionText: {
            color: '#000',
            paddingBottom: 20,
            fontSize: 16,
        },
        touchableOpacity: {
            flexDirection: 'row',
            contentText: {
                fontSize: 16,
                color: '#8A8A8A',
            },
            evilIcon: {
                paddingLeft: 2,
            },
        },
    },
});
export default GoalDetailStyle;
