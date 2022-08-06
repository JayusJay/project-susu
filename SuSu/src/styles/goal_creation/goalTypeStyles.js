import { StyleSheet } from 'react-native';

const GoalTypeStyles = StyleSheet.create({
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
        marginTop: 20,
        headingText: {
            color: '#7966FF',
            fontSize: 25,
            alignSelf: 'center',
        },
    },
    selectedStrictView: {
        marginTop: 20,
        innerText: {
            color: '#7966FF',
            fontSize: 25,
            alignSelf: 'center',
        },
    },
    buttonTouchable: {
        padding: 20,
        backgroundColor: '#7966FF',
        borderRadius: 40,
        marginTop: 30,
        text: {
            fontSize: 20,
            color: '#fff',
            alignSelf: 'center',
            fontWeight: '700',
        },
    },
});
export default GoalTypeStyles;
