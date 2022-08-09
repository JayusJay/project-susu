import { StyleSheet } from 'react-native';

const customGoalCreationStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    imageView: {
        alignItems: 'center',
        padding: 20,
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 80,
    },
    textView: {
        marginBottom: 50,
        alignItems: 'center',
        firstText: {
            marginTop: 30,
            color: '#000',
            fontSize: 25,
        },
        secondText: {
            marginTop: 10,
            color: '#000',
            fontSize: 25,
        },
    },
    cameraView: {
        marginTop: 50,
        padding: 20,
        backgroundColor: '#7966FF',
        alignSelf: 'center',
        borderRadius: 60,
    },
    titleInputView: {
        paddingTop: 50,
    },
    nextButtonTouchable: {
        marginTop: 40,
        backgroundColor: '#7966FF',
        padding: 20,
        alignItems: 'center',
        borderRadius: 20,
        text: {
            color: '#fff',
            fontSize: 20,
            fontWeight: 'bold',
        },
    },
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
