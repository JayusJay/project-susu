import { StyleSheet } from 'react-native';

const GoalSavingAmountStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7966FF',
    },
    header: {
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
    },
    headerContentView: {
        marginTop: 10,
        paddingBottom: 5,
        marginBottom: 10,
        textView: {
            alignSelf: 'center',
            marginTop: -40,
            innerView: {
                marginTop: -15,
                stepsText: {
                    color: '#fff',
                    alignSelf: 'center',
                },
            },
        },
        text: {
            color: '#fff',
            fontSize: 30,
            marginTop: -6,
            paddingBottom: 5,
        },
    },
    backButton: {
        paddingTop: 12,
    },
    footer: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    headingView: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 100,
        innerText: {
            color: '#7966FF',
            fontSize: 20,
        },
    },
    inputView: {
        marginTop: 20,
        alignSelf: 'center',
        paddingLeft: 20,
        borderWidth: 1,
        borderRadius: 40,
        borderColor: '#ccc',
        width: '90%',
        inputStyle: {
            color: '#000',
            fontSize: 20,
        },
    },
    buttonTouchable: {
        padding: 20,
        backgroundColor: '#7966FF',
        borderRadius: 40,
        marginTop: 30,
        innerText: {
            fontSize: 20,
            color: '#fff',
            alignSelf: 'center',
            fontWeight: '700',
        },
    },
});
export default GoalSavingAmountStyles;
