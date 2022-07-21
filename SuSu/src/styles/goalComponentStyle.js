import { StyleSheet } from 'react-native';

const GoalComponentStyle = StyleSheet.create({
    container: {
        padding: 20,
        marginTop: 10,
        backgroundColor: '#000',
        borderRadius: 25,
        image: {
            width: 50,
            height: 50,
            borderRadius: 30,
        },
        textView: {
            paddingTop: 10,
        },
        nameText: {
            color: '#ccc',
            fontSize: 20,
        },
        amountText: {
            color: '#fff',
            fontSize: 20,
            fontWeight: '700',
        },
        timeLeftText: {
            color: '#fff',
            fontSize: 16,
        },
    },
    CircularProgressBaseProps: {
        activeStrokeWidth: 2,
        inActiveStrokeWidth: 2,
        inActiveStrokeOpacity: 0.2,
        activeStrokeColor: '#7966FF',
        inActiveStrokeColor: '#e84118',
        radius: 30,
    },
});
export default GoalComponentStyle;
