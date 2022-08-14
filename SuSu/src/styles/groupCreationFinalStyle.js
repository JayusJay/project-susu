import { StyleSheet } from 'react-native';

const customGoalCreationStyles = StyleSheet.create({
    dialogInnerView: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        innerView: {
            flexDirection: 'row',
            borderRadius: 20,
            icon: {
                paddingTop: 5,
                paddingLeft: 5,
            },
        },
    },
});
export default customGoalCreationStyles;
