import { StyleSheet } from 'react-native';

const Screen1Styles = StyleSheet.create({
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
        },
        text: {
            color: '#fff',
            fontSize: 30,
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
    goalView: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 10,
        image: {
            width: 80,
            height: 80,
        },
        text: {
            color: '#000',
            fontSize: 20,
            fontFamily: 'roboto-medium',
            alignSelf: 'center',
            paddingBottom: 10,
        },
    },
    addGoalView: {
        alignSelf: 'center',
        padding: 20,
        text: {
            color: '#7966FF',
            fontSize: 20,
        },
    },
});
export default Screen1Styles;
