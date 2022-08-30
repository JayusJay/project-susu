import { StyleSheet } from 'react-native';

const joinGroupStyles = StyleSheet.create({
    dialogInnerView: {
        dialogDescription: {
            textAlign: 'center',
        },
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
export default joinGroupStyles;
